import { useEffect } from "react";
import Draggable from "react-draggable";
import { useRecoilState } from 'recoil';
import { currentAlert } from '../store/useProgramStatus';
import ding from '../assets/sounds/ding.wav'
import { soundState } from "../store/useSystemStatus";

interface AlertProps {
  name:string;
  description:string;
}

function Alert({name, description}: AlertProps) {
  const [alert, setAlert] = useRecoilState(currentAlert);
  const [soundActive] = useRecoilState(soundState)

  useEffect(() => {
    const alertAudio = new Audio(ding);
    soundActive && alertAudio.play()
  }, []);

  const handleClose = () => {
    setAlert(prev => {
      const updatedAlertArr = prev.filter(data => data.name !== name);
      return updatedAlertArr;
    });
  };

  return (
    <Draggable handle=".title-bar">
      <div className="window alertWindow" tabIndex={0}>
        <div className="title-bar">
          <h2 className="title-bar-text">
            {name}
          </h2>
          <div className="title-bar-controls">
            <button aria-label="Close" onClick={handleClose}></button>
          </div>
        </div>
        <div className="window-body">
          <p>{description}</p>
          <section className="field-row">
            <button onClick={handleClose}>OK</button>
          </section>
        </div>
      </div>
    </Draggable>
  );
}

export default Alert;
