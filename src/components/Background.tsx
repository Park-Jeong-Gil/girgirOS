import { useEffect, useState, useRef } from "react";
import { useRecoilState } from "recoil";
import { currentAlert, currentProgram, programStatus } from "../store/useProgramStatus";
import { programs } from "../constants/desktopData";
import Program from "./Program";
import Alert from "./Alert";
import Icon from "./Icon";

function Background() {
  const [programArr, setProgramArr] = useRecoilState(programStatus);
  const [, setActiveProgram] = useRecoilState(currentProgram);
  const [activeAlert] = useRecoilState(currentAlert);

  const [dragging, setDragging] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [currentPos, setCurrentPos] = useState({ x: 0, y: 0 });
  const [draggingIcons, setDraggingIcons] = useState<Set<HTMLButtonElement | null>>(new Set()); // Set으로 변경
  const iconRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const firstProgramTime = setTimeout(() => {
      clearTimeout(firstProgramTime);
      setProgramArr([...programArr, { program: programs.ABOUT_ME.ID, name: programs.ABOUT_ME.NAME, initialSize: { width: programs.ABOUT_ME.SIZE.width, height: programs.ABOUT_ME.SIZE.height } }]);
      setActiveProgram(programs.ABOUT_ME.ID);
    }, 2500);

    return () => {
      clearTimeout(firstProgramTime);
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    // 드래그를 .background에서만 시작하도록 설정
    if (e.target !== e.currentTarget) return;

    setDragging(true);
    setStartPos({ x: e.clientX, y: e.clientY });
    setCurrentPos({ x: e.clientX, y: e.clientY });

    document.querySelectorAll('.focused').forEach((element) => {
      element.classList.remove('focused');
    });

    setDraggingIcons(new Set());
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (dragging) {
      const newPos = { x: e.clientX, y: e.clientY };
      setCurrentPos(newPos);

      const distance = Math.sqrt(
        Math.pow(newPos.x - startPos.x, 2) + Math.pow(newPos.y - startPos.y, 2)
      );

      if (distance > 5) {
        setIsDragging(true);

        const dragBox = getBoxStyle();
        const newDraggingIcons = new Set<HTMLButtonElement | null>(draggingIcons);

        iconRefs.current.forEach((iconRef) => {
          if (iconRef) {
            const iconRect = iconRef.getBoundingClientRect();

            if (isElementInDragBox(iconRect, dragBox)) {
              newDraggingIcons.add(iconRef); // 드래그 영역에 포함된 아이콘 추가
            } else {
              newDraggingIcons.delete(iconRef); // 드래그 영역에서 벗어난 아이콘 제거
            }
          }
        });

        setDraggingIcons(newDraggingIcons); // 상태 업데이트
      }
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
    setIsDragging(false);

    setStartPos({ x: 0, y: 0 });
    setCurrentPos({ x: 0, y: 0 });

    // setDraggingIcons(new Set()); 
  };

  useEffect(() => {
    // 상태가 업데이트될 때마다 포커스를 설정
    iconRefs.current.forEach((iconRef) => {
      if (iconRef) {
        if (draggingIcons.has(iconRef)) {
        iconRef.classList.add('focused');
        } else {
          iconRef.classList.remove('focused');
        }
      }
    });
    
  }, [draggingIcons]); // draggingIcons가 변경될 때마다 호출

  const getBoxStyle = () => {
    const width = Math.abs(currentPos.x - startPos.x);
    const height = Math.abs(currentPos.y - startPos.y);
    const left = Math.min(currentPos.x, startPos.x);
    const top = Math.min(currentPos.y, startPos.y);
    return {
      width,
      height,
      left,
      top,
      right: left + width,
      bottom: top + height,
    };
  };


  const isElementInDragBox = (iconRect: DOMRect, dragBox: { left: number; top: number; right: number; bottom: number }) => {
    return (
      dragBox.left < iconRect.right &&
      dragBox.right > iconRect.left &&
      dragBox.top < iconRect.bottom &&
      dragBox.bottom > iconRect.top
    );
  };

  return (
    <div className="background" 
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}>
      <menu>
        {Object.keys(programs).map((key, index) => {
          const item = programs[key as keyof typeof programs];
          return (
            <Icon 
              type="application" 
              key={item.ID} 
              id={item.ID} 
              name={item.NAME} 
              desc={item.DESCRIPTION} 
              ref={(el: HTMLButtonElement | null) => (iconRefs.current[index] = el)}
            />
          );
        })}
      </menu>
      
      { programArr.map((prog, index) => (
        <Program
          key={prog.program}
          name={prog.name}
          programId={prog.program}
          layer={index}
          initialSize={prog.initialSize}
        />
      ))}
          
      { activeAlert.map((data, index) => (
        <Alert key={index} id={data.id} name={data.name} description={data.description} layer={index}/> 
      ))}

      {isDragging && <div className="dragBox" style={getBoxStyle()} />} 
    </div>
  );
}

export default Background;