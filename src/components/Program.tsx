import React, { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { currentProgram, programStatus } from "../store/useProgramStatus";
import Draggable from "react-draggable";
import About from "./application/About";
import Explorer from "./application/Explorer";
import Folder from "./application/Folder";
import Profile from "./application/Profile";

interface ProgramProps {
  name: string;
  programId: string | null;
  layer: number;
  initialSize: { width: number, height: number };
}

function Program({ name, programId, layer, initialSize }: ProgramProps) {
  const [, setProgramArr] = useRecoilState(programStatus);
  const [activeProgram, setActiveProgram] = useRecoilState(currentProgram);

  const [size, setSize] = useState(initialSize);
  const [isResizing, setIsResizing] = useState(false);
  const [resizeDirection, setResizeDirection] = useState<null | string>(null);
  const [isMaximized, setIsMaximized] = useState(false);
  const [position, setPosition] = useState({
    x: -(size.width / 2) + (layer * 25),
    y: -(size.height / 2) + (layer * 25),
  });

  useEffect(() => {
    switch (programId) {
      case 'profile':
        setPosition({
          x: -(size.width / 2) + (layer * 25),
          y: -(size.height / 2) + (layer * 25),
        });
        break;
      case 'spec':
        setPosition({
          x: (size.width / 2) + 60,
          y: -(size.height / 2),
        });
        break;
      default:
        setPosition({
          x: -(size.width / 2) + (layer * 25),
          y: -(size.height / 2) + (layer * 25),
        }); 
        break;
    }
  }, [programId]);
  
  const [prevPosition, setPrevPosition] = useState(position); 
  const windowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const $ProgramWindows = document.querySelectorAll('.window');

    $ProgramWindows.forEach(prog => {
      prog.removeAttribute('data-window');
    });

    if (activeProgram) {
      document.querySelector(`#${activeProgram}App`)?.setAttribute('data-window', 'focused');
      // document.querySelector(`#${activeProgram}App`)?.setAttribute('style', `z-index: ${layer + 1}`);
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
    setActiveProgram('');
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

  // const setLastProgActive = () => {
  //   // 가장 마지막 요소의 인덱스를 계산합니다.
  //   const lastProgIndex = programArr.length - 1;

  //   // 프로그램 배열이 비어있는 경우를 처리합니다.
  //   if (lastProgIndex < 0) {
  //     setActiveProgram(''); // 또는 적절한 기본값
  //     return;
  //   }

  //   // 가장 마지막 요소의 ID를 가져옵니다.
  //   const lastProgId = programArr[lastProgIndex].program;

  //   // 프로그램의 ID를 설정합니다.
  //   lastProgId !== null && setActiveProgram(lastProgId);

  //   // 디버깅을 위한 로그 출력
  //   console.log(lastProgIndex, lastProgId, activeProgram);
  // };

  const handleClose = () => {
    setProgramArr(prev => {
      const updatedProgramArr = prev.filter(prog => prog.program !== programId);
      // setLastProgActive();
      return updatedProgramArr;
    });
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
        // onClick={handleFocus}
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
            {programId == 'about' && <About />}
            {programId == 'profile' && <Profile />}
            {programId == 'ie' && <Explorer />}
            {programId == 'myPc' && <Folder id='myPc'/>}
            {programId == 'myDoc' && <Folder id='myDoc'/>}
            {programId == 'trashCan' && <Folder id='trashCan'/>}
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
