import { useEffect, useState } from "react";
import { currentProgram, programStatus } from "../store/useProgramStatus"; 
import { useRecoilState } from "recoil";
import { systemState } from "../store/useSystemStatus";

interface StartProps {}

function Start({}: StartProps) {
  const [, setSystemStatus] = useRecoilState(systemState);
  const [currentTime, setCurrentTime] = useState<string>(new Date().toLocaleTimeString());
  const [programArr] = useRecoilState(programStatus);
  const [activeProgram, setActiveProgram] = useRecoilState(currentProgram);
  const [startMenuActive, setStartMenuActive] = useState<boolean>(false);

  // 시간 업데이트
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  // 시작 바에서 프로그램 클릭 시
  useEffect(() => {
    const $DeskTopScreen = document.querySelector('.DeskTopScreen');
    const $appPanel = $DeskTopScreen?.querySelector('.appPanelWrap');
    const $programs = $appPanel?.querySelectorAll('button');
    
    const handleActiveProgram = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      const programKey = target.getAttribute('data-program-name') || '';
      const $ProgramWindows = $DeskTopScreen?.querySelectorAll('.ProgramWindow');

      setActiveProgram(programKey);
      
      $ProgramWindows?.forEach(prog => {
        if (prog.id.includes(programKey)) {
          prog.classList.remove('minimized');
        }
      });
    };
        
    $programs?.forEach((elem) => {
      elem.addEventListener('click', handleActiveProgram);
    });
    
    return () => {
      $programs?.forEach((elem) => {
        elem.removeEventListener('click', handleActiveProgram);
      });
    };
  }, [activeProgram]);

  // StartButton 클릭 시 active 클래스를 토글
  const toggleStartMenu = () => {
    setStartMenuActive((prevState) => !prevState);
  };

  // StartButton 및 startMenu 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const startButton = document.querySelector('.StartButton');
      const startMenu = document.querySelector('.startMenu');

      // StartButton 또는 startMenu 외부를 클릭한 경우
      if (
        startButton && 
        startMenu && 
        !startButton.contains(target) && 
        !startMenu.contains(target)
      ) {
        setStartMenuActive(false);
      }
    };

    // 전역 클릭 이벤트 등록
    window.addEventListener('click', handleClickOutside);

    return () => {
      // 전역 클릭 이벤트 제거
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const hadnleShutDowunScreen =()=>{
    setSystemStatus('shutDown')
  }

  return (
    <div className="StartBar">
      <div className="startWrap">
        <button           
          className={`StartButton ${startMenuActive ? "active" : ""}`}
          onClick={toggleStartMenu}
        ></button>
        <div className={`startMenu ${startMenuActive ? "active" : ""}`}>
          <span className="sideLabel"><strong>Windows</strong> 91</span>
          <ul>
            <li><button className="startpPrograms"><span>P</span>rograms</button></li>
            <li><button className="startDocuments"><span>D</span>ocuments</button></li>
            <li><button className="startSetting"><span>S</span>etting</button></li>
            <li><button className="startFind"><span>F</span>ind</button></li>
            <li><button className="startHelp"><span>H</span>elp</button></li>
            <li><button className="startRun"><span>R</span>un...</button></li>
            <li><button className="startShutdown" onClick={hadnleShutDowunScreen}>Sh<span>u</span>t Down...</button></li>
          </ul>
        </div>
      </div>
      <div className="quickButtonWrap">
        <button className="quickBtn"></button>
      </div>
      <div className="appPanelWrap">
        {programArr.length > 0 && programArr.map((item, index) => (
          <button className="runningProgram active" key={index} data-program-name={item.program}>
            <span>{item.name}</span>
          </button>
        ))}
      </div>
      <div className="notiWrap">
        <time>{currentTime}</time>
      </div>
    </div>
  )
}

export default Start;
