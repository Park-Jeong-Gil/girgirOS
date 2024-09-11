import { useEffect, useRef, useState } from "react";
import Draggable, {DraggableEvent, DraggableData } from 'react-draggable';
import { useRecoilState } from 'recoil';
import { currentAlert } from '../store/useProgramStatus';
import ding from '../assets/sounds/ding.wav';
import { soundState } from "../store/useSystemStatus";

interface AlertProps {
  id: string;
  name: string;
  description: string;
  layer: number;
}

function Alert({ id, name, description, layer }: AlertProps) {
  const [, setAlert] = useRecoilState(currentAlert);
  const [soundActive] = useRecoilState(soundState);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const alertRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (soundActive) {
      const alertAudio = new Audio(ding);
      alertAudio.play();
    }
  }, [soundActive]);

  useEffect(() => {
    if (alertRef.current) {
      alertRef.current.focus();
    }
  }, []);

  const handleClose = () => {
    setAlert(prev => {
      const updatedAlertArr = prev.filter(data => data.name !== name);
      return updatedAlertArr;
    });
  };

  return (
    <Draggable
      handle=".title-bar"
      position={position}
      onDrag={(_e: DraggableEvent, data: DraggableData) => setPosition({ x: data.x, y: data.y })}
      cancel=".title-bar-controls button" 
    >
      <div
        id={`${id}Alert`}
        className="window alertWindow"
        tabIndex={0}
        ref={alertRef}
        style={{ zIndex: (10 + layer) }}
      >
        <div className="title-bar">
          <h2 className="title-bar-text"> {name} </h2>
          <div className="title-bar-controls">
            <button aria-label="Close" onClick={handleClose} onMouseDown={(e) => e.stopPropagation()} onTouchStart={(e) => e.stopPropagation()}></button>
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
