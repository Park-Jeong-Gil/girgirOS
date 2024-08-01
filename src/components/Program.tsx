import React, { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { currentProgram, programStatus } from "../store/useProgramStatus";
import Draggable from "react-draggable";
import About from "./About";
import Explorer from "./Explorer";

interface ProgramProps {
  name: string;
  programId: string | null;
  layer: number;
  initialSize: { width: number, height: number };
}

function Program({ name, programId, layer, initialSize }: ProgramProps) {
  const [programArr, setProgramArr] = useRecoilState(programStatus);
  const [activeProgram, setActiveProgram] = useRecoilState(currentProgram);

  const winW = window.innerWidth;
  const winH = window.innerHeight;

  const [size, setSize] = useState(initialSize);
  const [isResizing, setIsResizing] = useState(false);
  const [resizeDirection, setResizeDirection] = useState<null | string>(null);
  const [isMaximized, setIsMaximized] = useState(false);
  const [position, setPosition] = useState({
    x: (winW / 2) - (size.width / 2) + (layer * 25),
    y: (winH / 2) - (size.height / 2) + (layer * 25),
  });
  
  const [prevPosition, setPrevPosition] = useState(position); // 이전 위치 저장
  const windowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const $ProgramWindows = document.querySelectorAll('.window');

    $ProgramWindows.forEach(prog => {
      prog.removeAttribute('data-window');
    });

    if (activeProgram) {
      document.querySelector(`#${activeProgram}App`)?.setAttribute('data-window', 'focused');
    }
  }, [activeProgram]);

  const handleMouseMove = (e: MouseEvent) => {
    if (!isResizing || !resizeDirection) return;

    const window = windowRef.current;
    if (!window) return;

    const rect = window.getBoundingClientRect();
    if (resizeDirection.includes('right')) {
      setSize(prevSize => ({
        ...prevSize,
        width: Math.max(800, e.clientX - rect.left),
      }));
    }
    if (resizeDirection.includes('bottom')) {
      setSize(prevSize => ({
        ...prevSize,
        height: Math.max(600, e.clientY - rect.top),
      }));
    }
    if (resizeDirection.includes('left')) {
      setSize((prevSize) => ({
        ...prevSize,
        width: Math.max(800, rect.right - e.clientX),
      }));
      setPosition((prevPosition) => ({
        ...prevPosition,
        x: prevPosition.x + (e.clientX - rect.left),
      }));
    }
    if (resizeDirection.includes('top')) {
      setSize((prevSize) => ({
        ...prevSize,
        height: Math.max(600, rect.bottom - e.clientY),
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

  const handleMinimize = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget as HTMLElement;
    const $currentProgram = target.closest('.window') as HTMLElement;

    $currentProgram?.classList.add('minimized');

    const currentIndex = programArr.findIndex(prog => prog.program === programId);

    if (currentIndex === 0) {
      // 가장 먼저 열린 프로그램일 때
      setActiveProgram('');
    } else {
      // 나머지 경우 (예: currentIndex > 1)
      const previousProgramId = currentIndex > 0 ? programArr[currentIndex - 1].program : null;

      if (previousProgramId) {
        setActiveProgram(previousProgramId);
      }
    }
  };

  const handleMaximize = () => {
    if (isMaximized) {
      // 최대화 해제
      setIsMaximized(false);
      setPosition(prevPosition); // 이전 위치로 돌아가기
    } else {
      // 최대화
      setPrevPosition(position); // 현재 위치 저장
      setIsMaximized(true);
      setPosition({ x: 0, y: 0 }); // 최대화 위치로 이동
    }
  };

  const handleFocus = (e: React.SyntheticEvent<HTMLDivElement, Event>) => {
    const target = e.currentTarget as HTMLElement;
    const $currentProgram = target.closest('.window') as HTMLElement;

    if (programId && !$currentProgram.classList.contains('minimized')) {
      setActiveProgram(programId);
    }
  };

  const handleClose = () => {
    setProgramArr(prev => prev.filter(prog => prog.program !== programId));
  };

  return (
    <Draggable
      handle=".title-bar"
      position={position}
      onDrag={(e, data) => setPosition({ x: data.x, y: data.y })}
      disabled={isMaximized}
    >
      <div
        className={`ProgramWindow window${isMaximized ? ' maximized' : ''}`}
        id={`${programId}App` || ""}
        ref={windowRef}
        style={{
          width: isMaximized ? "100%" : size.width,
          height: isMaximized ? "100%" : size.height,
          top: isMaximized ? 0 : undefined,
          left: isMaximized ? 0 : undefined,
          zIndex: layer,
        }}
        onClick={handleFocus}
        onFocus={handleFocus}
        tabIndex={0}
      >
        <div className="container">
          <div className="title-bar">
            <h3 className="title-bar-text">{name}</h3>
            <div className="title-bar-controls">
              <button aria-label="Minimize" onClick={handleMinimize}></button>
              <button aria-label={`${isMaximized ? 'Restore' : 'Maximize'}`} onClick={handleMaximize}></button>
              <button aria-label="Close" onClick={handleClose}></button>
            </div>
          </div>
          <div className="window-body">
            {programId == 'help' && <About />}
            {programId == 'ie' && <Explorer />}
          </div>
        </div>
        {isMaximized === false && (
          <div className="handleWrap">
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
        )}
      </div>
    </Draggable>
  );
}

export default Program;
