import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { currentProgram, programStatus } from "../store/useProgramStatus";

function Background() {
  const [programArr, setProgramArr] = useRecoilState(programStatus);
  const [activeProgram, setActiveProgram] = useRecoilState(currentProgram)

  useEffect(() => {
    const $desktopIcons = document.querySelectorAll('.desktopIcon');
    const winW = window.innerWidth;
    const winH = window.innerHeight;

    const handleRunProgram = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      const iconNameElement = target.querySelector('.iconName');
      const iconName = iconNameElement ? iconNameElement.textContent : 'Unknown';
      const programKey = target.getAttribute('data-program-name') || '';

      let programW;
      let programH;
      
      if (iconName && !programArr.some(prog => prog.name === iconName)) {
        
        switch (programKey) {
          case 'myPc':
            programW = 600;
            programH = 400;
            break;
          case 'myDoc':
            programW = 700;
            programH = 500;
            break;
          case 'trashCan':
            programW = 500;
            programH = 300;
            break;
          case 'ie':
            programW = winW/2;
            programH = winH/2;
            break;
          case 'outlook':
            programW = 750;
            programH = 450;
            break;
          case 'help':
            programW = 840;
            programH = 600;
            break;
          default:
            programW = 800;
            programH = 600;
        }

        setProgramArr([...programArr, { program: programKey, name: iconName, initialSize:{ width: programW, height: programH} }]);
        setActiveProgram(programKey)
      } else {
        // console.log("Program already exists or name is unknown:", iconName);
      }
      
    };

    $desktopIcons.forEach((elem) => {
      elem.addEventListener('dblclick', handleRunProgram);
    });

    return () => {
      $desktopIcons.forEach((elem) => {
        elem.removeEventListener('dblclick', handleRunProgram);
      });
    };
  }, [programArr, setProgramArr]);


  useEffect(() => {
    const $DeskTopScreen = document.querySelector('.DeskTopScreen');
    const $appPanel = $DeskTopScreen?.querySelector('.appPanelWrap');

    if ($appPanel && activeProgram !== '') {
      $appPanel?.querySelectorAll('button').forEach((prog) => {
        prog.classList.remove('active')
      });

      const $activeProg = $appPanel.querySelector(`[data-program-name=${activeProgram}]`)
      $activeProg?.classList.add('active')

    }else if(activeProgram == ''){
      $appPanel?.querySelectorAll('button').forEach((prog) => {
        prog.classList.remove('active')
      });
    }
  }, [activeProgram]);

  useEffect(() => {
    const firstProgramTime =  setTimeout(() => {
      clearTimeout(firstProgramTime)
      setProgramArr([...programArr, { program: 'help', name: 'About Me', initialSize:{ width: 840, height: 600} }]);
      setActiveProgram('help')
    }, 5000)

    return () => {
      clearTimeout(firstProgramTime)
    };
  }, []);

  return (
    <div className="Background">
      <button className="desktopIcon myPc" data-program-name="myPc">
        <span className="iconImage"></span>
        <span className="iconName">내 컴퓨터</span>
      </button>
      <button className="desktopIcon myDoc" data-program-name="myDoc">
        <span className="iconImage"></span>
        <span className="iconName">내 문서</span>
      </button>
      <button className="desktopIcon trashCan" data-program-name="trashCan">
        <span className="iconImage"></span>
        <span className="iconName">휴지통</span>
      </button>
      <button className="desktopIcon ie" data-program-name="ie">
        <span className="iconImage"></span>
        <span className="iconName">Internet<br /> Explorer</span>
      </button>
      <button className="desktopIcon outlook" data-program-name="outlook">
        <span className="iconImage"></span>
        <span className="iconName">Outlook<br /> Express</span>
      </button>
      <button className="desktopIcon help" data-program-name="help">
        <span className="iconImage"></span>
        <span className="iconName">About Me</span>
      </button>
    </div>
  );
}

export default Background;
