import { useEffect } from "react";
import Draggable from "react-draggable";
import { useRecoilState } from 'recoil';
import { currentAlert } from '../store/useProgramStatus';
import ding from '../assets/sounds/ding.wav'
import { soundState } from "../store/useSystemStatus";

interface AlertProps {}

function Alert({}: AlertProps) {
  const [alert, setAlert] = useRecoilState(currentAlert);
  const [soundActive] = useRecoilState(soundState)

  useEffect(() => {
    const alertAudio = new Audio(ding);
    soundActive && alertAudio.play()
  }, []);

  const handleClose = () => {
    setAlert(null); // 상태를 null로 설정하여 알림을 닫습니다.
  };

  return (
    <Draggable handle=".title-bar">
      <div className="window alertWindow" tabIndex={0}>
        <div className="title-bar">
          <h2 className="title-bar-text">
            {alert?.name}
          </h2>
          <div className="title-bar-controls">
            <button aria-label="Close" onClick={handleClose}></button>
          </div>
        </div>
        <div className="window-body">
          <p>{alert?.description}</p>
          <section className="field-row">
            <button onClick={handleClose}>OK</button>
          </section>
        </div>
      </div>
    </Draggable>
  );
}

export default Alert;
