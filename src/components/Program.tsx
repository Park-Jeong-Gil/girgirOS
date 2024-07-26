import React, { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { currentProgram, programStatus } from "../store/useProgramStatus";
import Draggable from "react-draggable";

interface ProgramProps {
  name: string;
  programId: string | null;
}

function Program({ name, programId }: ProgramProps) {
  const dragRef = useRef<HTMLDivElement>(null);
  const [programArr, setProgramArr] = useRecoilState(programStatus);
  const [activeProgram, setActiveProgram] = useRecoilState(currentProgram);

  const [size, setSize] = useState({ width: 400, height: 300 });
  const [isResizing, setIsResizing] = useState(false);
  const [resizeDirection, setResizeDirection] = useState<null | string>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const windowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(`Program ${name} has mounted`);
    return () => {
      console.log(`Program ${name} has unmounted`);
    };
  }, [name]);

  const handleMouseMove = (e: MouseEvent) => {
    if (!isResizing || !resizeDirection) return;

    const window = windowRef.current;
    if (!window) return;

    const rect = window.getBoundingClientRect();
    if (resizeDirection.includes('right')) {
      setSize((prevSize) => ({
        ...prevSize,
        width: Math.max(200, e.clientX - rect.left),
      }));
    }
    if (resizeDirection.includes('bottom')) {
      setSize((prevSize) => ({
        ...prevSize,
        height: Math.max(200, e.clientY - rect.top),
      }));
    }
    if (resizeDirection.includes('left')) {
      setSize((prevSize) => ({
        ...prevSize,
        width: Math.max(200, rect.right - e.clientX),
      }));
      setPosition((prevPosition) => ({
        ...prevPosition,
        x: prevPosition.x + (e.clientX - rect.left),
      }));
    }
    if (resizeDirection.includes('top')) {
      setSize((prevSize) => ({
        ...prevSize,
        height: Math.max(200, rect.bottom - e.clientY),
      }));
      setPosition((prevPosition) => ({
        ...prevPosition,
        y: prevPosition.y + (e.clientY - rect.top),
      }));
    }
  };

  const handleMouseUp = () => {
    setIsResizing(false);
    setResizeDirection(null);
  };

  const handleMouseDown = (direction: string) => {
    setIsResizing(true);
    setResizeDirection(direction);
  };

  useEffect(() => {
    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing]);

  return (
    <Draggable
      handle=".title-bar"
      bounds="parent"
      position={position}
      onDrag={(e, data) => setPosition({ x: data.x, y: data.y })}
    >
      <div
        className="ProgramWindow window"
        id={programId || ""}
        ref={windowRef}
        style={{
          width: size.width,
          height: size.height,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      >
        <div className="container">
          <div className="title-bar">
            <h3 className="title-bar-text">{name}</h3>
            <div className="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button aria-label="Maximize"></button>
              <button aria-label="Close"></button>
            </div>
          </div>
          <div className="window-body">
            <p>There's so much room for activities!</p>
          </div>
        </div>
        <span
          className="resize-handle right"
          onMouseDown={() => handleMouseDown("right")}
        />
        <span
          className="resize-handle bottom"
          onMouseDown={() => handleMouseDown("bottom")}
        />
        <span
          className="resize-handle bottom-right"
          onMouseDown={() => handleMouseDown("bottom-right")}
        />
        <span
          className="resize-handle left"
          onMouseDown={() => handleMouseDown("left")}
        />
        <span
          className="resize-handle top"
          onMouseDown={() => handleMouseDown("top")}
        />
        <span
          className="resize-handle top-left"
          onMouseDown={() => handleMouseDown("top-left")}
        />
        <span
          className="resize-handle top-right"
          onMouseDown={() => handleMouseDown("top-right")}
        />
        <span
          className="resize-handle bottom-left"
          onMouseDown={() => handleMouseDown("bottom-left")}
        />
      </div>
    </Draggable>
  );
}

export default Program;
