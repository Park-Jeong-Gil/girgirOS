import React, { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { currentProgram, programStatus } from "../store/useProgramStatus";
import Draggable, {DraggableEvent, DraggableData } from 'react-draggable';
import About from "./contents/About";
import Explorer from "./application/Explorer";
import Folder from "./application/Folder";
import Profile from "./contents/Profile";
import NotePad from "./application/Notepad";
import Design from "./contents/Design";
import Website from "./contents/Website";

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
    x: (window.innerWidth/2) - (size.width / 2) + (layer * 25),
    y: (window.innerHeight/2) - (size.height / 2) + (layer * 25),
  });


  // useEffect(() => {
  //   switch (programId) {
  //     case 'profile':
  //       setPosition({
  //         x: -(size.width / 2) + (layer * 25),
  //         y: -(size.height / 2) + (layer * 25),
  //       });
  //       break;
  //     case 'spec':
  //       setPosition({
  //         x: (size.width / 2) + 60,
  //         y: -(size.height / 2),
  //       });
  //       break;
  //     default:
  //       setPosition({
  //         x: -(size.width / 2) + (layer * 25),
  //         y: -(size.height / 2) + (layer * 25),
  //       }); 
  //       break;
  //   }
  // }, [programId]);
  
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
        // width: Math.max(800, e.clientX - rect.left),
        width: (e.clientX - rect.left),
      }));
    }
    if (resizeDirection.includes('bottom')) {
      setSize(prevSize => ({
        ...prevSize,
        // height: Math.max(600, e.clientY - rect.top),
        height: (e.clientY - rect.top),
      }));
    }
    if (resizeDirection.includes('left')) {
      setSize((prevSize) => ({
        ...prevSize,
        // width: Math.max(800, rect.right - e.clientX),
        width: (rect.right - e.clientX),
      }));
      setPosition((prevPosition) => ({
        ...prevPosition,
        x: prevPosition.x + (e.clientX - rect.left),
      }));
    }
    if (resizeDirection.includes('top')) {
      setSize((prevSize) => ({
        ...prevSize,
        // height: Math.max(600, rect.bottom - e.clientY),
        height: (rect.bottom - e.clientY),
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

  const handleFocus = (e: React.SyntheticEvent<HTMLElement, Event>) => {
    const target = e.currentTarget as HTMLElement;
    const $currentProgram = target.closest('.window') as HTMLElement;

    if (programId && !$currentProgram.classList.contains('minimized')) {
      setActiveProgram(programId);
    }
  };

  const handleClose = () => {
    setProgramArr(prev => {
      const updatedProgramArr = prev.filter(prog => prog.program !== programId);
      return updatedProgramArr;
    });
  };

  const handleResize = () => {
    const windowWidth = window.innerWidth;
    
    if (windowWidth <= 1000) {
      // 1000px을 기준으로 현재 컴포넌트의 사이즈 비율 계산
      const widthRatio = windowWidth / 1000;
  
      // 새로운 사이즈 계산
      const newWidth = size.width * widthRatio;
      const newHeight = size.height * widthRatio;
  
      setSize({
        width: newWidth,
        height: newHeight,
      });
  
      // 새로운 포지션 설정
      setPosition({
        x: (windowWidth - newWidth) / 2  + (layer * 10), // 화면 너비의 절반에서 컴포넌트 너비의 절반을 뺌
        y: (window.innerHeight - newHeight) / 2  + (layer * 10), // 화면 높이의 절반에서 컴포넌트 높이의 절반을 뺌
      });
    }
  };
  
  
  
  useEffect(() => {
    handleResize(); // 컴포넌트 마운트 시 호출
    window.addEventListener("resize", handleResize); // 리사이즈 이벤트 등록

    return () => {
      window.removeEventListener("resize", handleResize); // 컴포넌트 언마운트 시 리사이즈 이벤트 제거
    };
  }, []);

  return (
    <Draggable
      handle=".title-bar"
      position={position}
      onDrag={(_e: DraggableEvent, data: DraggableData) => setPosition({ x: data.x, y: data.y })}
      disabled={isMaximized}
      cancel=".title-bar-controls button" 
    >
      <section
        className={`ProgramWindow window${isMaximized ? ' maximized' : ''}`}
        id={`${programId}App` || ""}
        ref={windowRef}
        style={{
          width: isMaximized ? "100%" : size.width,
          height: isMaximized ? "100%" : size.height,
          top: isMaximized ? 0 : undefined,
          left: isMaximized ? 0 : undefined,
          zIndex: layer + 1,
        }}
        onFocus={handleFocus}
        tabIndex={0}
      >
        <div className="container">
          <header className="title-bar">
            <h2 className="title-bar-text">{name}</h2>
            <div className="title-bar-controls">
              <button aria-label="Minimize" onClick={handleMinimize} onMouseDown={(e) => e.stopPropagation()} onTouchStart={(e) => e.stopPropagation()}></button>
              <button aria-label={`${isMaximized ? 'Restore' : 'Maximize'}`} onClick={handleMaximize} onMouseDown={(e) => e.stopPropagation()} onTouchStart={(e) => e.stopPropagation()}></button>
              <button aria-label="Close" onClick={handleClose} onMouseDown={(e) => e.stopPropagation()} onTouchStart={(e) => e.stopPropagation()}></button>
            </div>
          </header>
          <div className="window-body">
            {programId == 'about' && <About />}
            {programId == 'profile' && <Profile />}
            {programId == 'ie' && <Explorer />}
            {programId == 'myPc' && <Folder id='myPc'/>}
            {programId == 'myDoc' && <Folder id='myDoc'/>}
            {programId == 'trashCan' && <Folder id='trashCan'/>}
            {programId == 'notepad' && <NotePad id='introduction'/>}
            {programId == 'website' && <Website />}
            {programId == 'design' && <Design />}
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
      </section>
    </Draggable>
  );
}

export default Program;
