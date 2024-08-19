import { useEffect, useState } from "react";
import { currentAlert, currentProgram, programStatus } from "../store/useProgramStatus"; 
import { useRecoilState } from "recoil";
import { systemState } from "../store/useSystemStatus";
import { programs } from "../constants/desktopData";

interface StartProps {}

function Start({}: StartProps) {
  const [, setSystemStatus] = useRecoilState(systemState);
  const [currentTime, setCurrentTime] = useState<string>(new Date().toLocaleTimeString());
  const [programArr, setProgramArr] = useRecoilState(programStatus);
  const [activeProgram, setActiveProgram] = useRecoilState(currentProgram);
  const [, setActiveAlert] = useRecoilState(currentAlert);
  const [startMenuActive, setStartMenuActive] = useState<boolean>(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

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

  const toggleStartMenu = () => {
    setStartMenuActive((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const startButton = document.querySelector('.StartButton');
      const startMenu = document.querySelector('.startMenu');

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

  const minimizeAllPrograms = () => {
    const $DeskTopScreen = document.querySelector('.DeskTopScreen');
    const $ProgramWindows = $DeskTopScreen?.querySelectorAll('.ProgramWindow');
    setActiveProgram('');

    $ProgramWindows?.forEach(prog => {
      prog.classList.add('minimized');
    });
  };

  const handleClickRun=()=>{
    setActiveAlert(  prevArr => {
      if (prevArr.some(alert => alert.id === 'run')) {
        return prevArr;
      }
      return [
        ...prevArr,
        {
          id: 'run',
          name: 'run',
          description: '달리기 별로 안 좋아함...'
        }
      ];
    })
  }

  const handleClickHelp=()=>{
    if(!programArr.some(prog => prog.program === 'about')){
      setProgramArr([...programArr, { program: programs.ABOUT_ME.ID, name: programs.ABOUT_ME.NAME, initialSize: { width: programs.ABOUT_ME.SIZE.width, height:  programs.ABOUT_ME.SIZE.height } }]);
    }
    setActiveProgram(programs.ABOUT_ME.ID);
  }

  const handleClickFind=()=>{
    setActiveAlert(  prevArr => {
      if (prevArr.some(alert => alert.id === 'find')) {
        return prevArr;
      }
      return [
        ...prevArr,
        {
          id: 'find',
          name: 'find',
          description: '잘 찾기도 재능이더라...'
        }
      ];
    })
  }  

  const handleClickSetting=()=>{
    setActiveAlert(  prevArr => {
      if (prevArr.some(alert => alert.id === 'setting')) {
        return prevArr;
      }
      return [
        ...prevArr,
        {
          id: 'setting',
          name: 'setting',
          description: '뭐든 초반 셋팅이 가장 중요!'
        }
      ];
    })
  }  

  const handleClickDocuments=()=>{
    if(!programArr.some(prog => prog.program === 'myDoc')){
      setProgramArr([...programArr, { program: programs.PROJECTS.ID, name: programs.PROJECTS.NAME, initialSize: { width: programs.PROJECTS.SIZE.width, height:  programs.PROJECTS.SIZE.height } }]);
    }
    setActiveProgram(programs.PROJECTS.ID);
  }  

  const handleClickPrograms=()=>{
    setActiveAlert(  prevArr => {
      if (prevArr.some(alert => alert.id === 'programs')) {
        return prevArr;
      }
      return [
        ...prevArr,
        {
          id: 'programs',
          name: 'programs',
          description: '모든 개발자들 존경 합니다! Respect!!'
        }
      ];
    })
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
            <li><button className="startpPrograms" onClick={handleClickPrograms}><span>P</span>rograms</button></li>
            <li><button className="startDocuments" onClick={handleClickDocuments}><span>D</span>ocuments</button></li>
            <li><button className="startSetting" onClick={handleClickSetting}><span>S</span>etting</button></li>
            <li><button className="startFind" onClick={handleClickFind}><span>F</span>ind</button></li>
            <li><button className="startHelp" onClick={handleClickHelp}><span>H</span>elp</button></li>
            <li><button className="startRun" onClick={handleClickRun}><span>R</span>un...</button></li>
            <li><button className="startShutdown" onClick={hadnleShutDowunScreen}>Sh<span>u</span>t Down...</button></li>
          </ul>
        </div>
      </div>
      <div className="quickButtonWrap">
        <button className="quickBtn" onClick={minimizeAllPrograms}></button>
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
