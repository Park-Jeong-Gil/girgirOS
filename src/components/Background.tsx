import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { currentProgram, programStatus } from "../store/useProgramStatus";
import { programs } from "../constants/desktopData";
import Program from "./Program";

function Background() {
  const [programArr, setProgramArr] = useRecoilState(programStatus);
  const [activeProgram, setActiveProgram] = useRecoilState(currentProgram);

  useEffect(() => {
    const $appIcons = document.querySelectorAll('.appIcon');

    const handleRunProgram = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      const iconNameElement = target.querySelector('.iconName');
      const iconName = iconNameElement ? iconNameElement.textContent : 'Unknown';
      const programKey = target.getAttribute('id') || '';
    
      if (iconName && !programArr.some(prog => prog.name === iconName)) {
        const programData = Object.values(programs).find(program => program.ID === programKey);
    
        if (programData) {
          const { width: programW, height: programH } = programData.SIZE;
          setProgramArr([...programArr, { program: programKey, name: iconName, initialSize: { width: programW, height: programH } }]);
          setActiveProgram(programKey);
        } else {
          console.error(`Program data not found for key: ${programKey}`);
        }
      }
    };

    $appIcons.forEach((elem) => {
      elem.addEventListener('dblclick', handleRunProgram);
    });

    return () => {
      $appIcons.forEach((elem) => {
        elem.removeEventListener('dblclick', handleRunProgram);
      });
    };
  }, [programArr, setProgramArr]);

  useEffect(() => {
    const $DeskTopScreen = document.querySelector('.DeskTopScreen');
    const $appPanel = $DeskTopScreen?.querySelector('.appPanelWrap');

    if ($appPanel && activeProgram !== '') {
      $appPanel?.querySelectorAll('button').forEach((prog) => {
        prog.classList.remove('active');
      });

      const $activeProg = $appPanel.querySelector(`[data-program-name=${activeProgram}]`);
      $activeProg?.classList.add('active');
    } else if (activeProgram === '') {
      $appPanel?.querySelectorAll('button').forEach((prog) => {
        prog.classList.remove('active');
      });
    }
  }, [activeProgram]);

  useEffect(() => {
    const firstProgramTime = setTimeout(() => {
      clearTimeout(firstProgramTime);
      setProgramArr([...programArr, { program: programs.ABOUT_ME.ID, name: programs.ABOUT_ME.NANE, initialSize: { width: programs.ABOUT_ME.SIZE.width, height:  programs.ABOUT_ME.SIZE.height } }]);
      setActiveProgram(programs.ABOUT_ME.ID);
    }, 5000);

    return () => {
      clearTimeout(firstProgramTime);
    };
  }, []);

  return (
    <div className="Background">
      {Object.keys(programs).map((key) => {
        const item = programs[key as keyof typeof programs];
        return (
          <button key={item.ID} id={item.ID} className="appIcon" title={item.DESCRIPTION}>
            <span className="iconImage"></span>
            <span className="iconName">{item.NANE}</span>
          </button>
        );
      })}

      { programArr.map((prog, index) => (
        <Program
          key={prog.program}
          name={prog.name}
          programId={prog.program}
          layer={index}
          initialSize={prog.initialSize}
        />
      ))}
    </div>
  );
}

export default Background;
