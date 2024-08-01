import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { currentProgram, programStatus } from "../store/useProgramStatus";
import { programs } from "../constants/desktopData";

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
      const programKey = target.getAttribute('id') || '';

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
      {
        Object.keys(programs).map((key) => {
          const item = programs[key as keyof typeof programs];
          return (
            <button key={item.ID} id={item.ID} className="desktopIcon" title={item.DESCRIPTION}>
              <span className="iconImage"></span>
              <span className="iconName">{item.NANE}</span>
            </button>
          );
        })
      }
    </div>
  );
}

export default Background;
