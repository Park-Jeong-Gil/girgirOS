import Draggable from "react-draggable";
import { useRecoilValue } from 'recoil';
import { currentAlert } from '../store/useProgramStatus';

interface AlertProps {

}

function Alert({}: AlertProps) {
  const alert = useRecoilValue(currentAlert);

  return (
    <Draggable
      handle=".title-bar"
    >
      <div className="window alertWindow" 
        tabIndex={0}
        >
        <div className="title-bar">
          <h2 className="title-bar-text">
            {alert?.name}
          </h2>

          <div className="title-bar-controls">
            <button aria-label="Close"></button>
          </div>
        </div>
        <div className="window-body">
          <p>{alert?.description}</p>
          <section className="field-row">
            <button>OK</button>
          </section>
        </div>
      </div>
    </Draggable>
  )
}

export default Alert;