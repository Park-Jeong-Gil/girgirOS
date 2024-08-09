import { useCallback, useEffect } from "react";
import { contact, programs, works } from "../constants/desktopData";
import { useRecoilState } from "recoil";
import { currentAlert, currentProgram, programStatus } from "../store/useProgramStatus";

interface IconProps {
  type: string;
  id: string;
  name: string;
  desc: string;
}

function Icon({ type, id, name, desc }: IconProps) {
  const [programArr, setProgramArr] = useRecoilState(programStatus);
  const [activeProgram, setActiveProgram] = useRecoilState(currentProgram);
  const [activeAlert, setActiveAlert] = useRecoilState(currentAlert);

  const handleRunProgram = useCallback((e: Event) => {
    const target = e.currentTarget as HTMLElement;
    const iconNameElement = target.querySelector('.iconName');
    const iconName = iconNameElement ? iconNameElement.textContent : 'Unknown';
    const programKey = target.getAttribute('id') || '';
    const programDesc = target.getAttribute('title') || '';

    if (target.classList.contains('application')) {
      if (iconName && !programArr.some(prog => prog.program === programKey)) {
        const programData = Object.values(programs).find(program => program.ID === programKey);
        const contactData = Object.values(contact).find(item => item.ID === programKey);
        const worksData = Object.values(works).find(item => item.ID === programKey);

        const defaultSize = { width: 840, height: 600 };

        const size =  worksData?.SIZE ||
                      contactData?.SIZE ||
                      programData?.SIZE ||
                      defaultSize;

        if (programData || contactData || worksData) {
          setProgramArr(prevArr => [
            ...prevArr,
            { program: programKey, name: iconName, initialSize: size }
          ]);
          
          setActiveProgram(programKey);
        } else {
          console.error(`Program or contact data not found for key: ${programKey}`);
        }
      }
    } else if (target.classList.contains('alert')) {
      setActiveAlert(prevArr => {
        // Avoid duplicate alerts
        if (prevArr.some(alert => alert.id === programKey)) {
          return prevArr;
        }
        return [
          ...prevArr,
          {
            id: programKey,
            name: iconName || '',
            description: programDesc
          }
        ];
      });
    } else if (target.classList.contains('link')) {
      const contactData = Object.values(contact).find(item => item.ID === programKey);

      if (contactData && 'LINK' in contactData) {
        const link = (contactData as { LINK?: string }).LINK;
        if (link) {
          window.open(link, '_blank');
        } else {
          console.error(`Link not found for key: ${programKey}`);
        }
      } else {
        console.error(`Link not found for key: ${programKey}`);
      }
    }
    
    setActiveProgram(programKey);

    const $progWindow = document.querySelector(`#${programKey}App`)

    if($progWindow && $progWindow.classList.contains('minimized')){
      $progWindow.classList.remove('minimized')
    }
  }, [programArr, setProgramArr, setActiveProgram, setActiveAlert]);

  useEffect(() => {
    const appIcons = document.querySelectorAll('.appIcon');

    appIcons.forEach((elem) => {
      elem.addEventListener('dblclick', handleRunProgram);
    });

    return () => {
      appIcons.forEach((elem) => {
        elem.removeEventListener('dblclick', handleRunProgram);
      });
    };
  }, [handleRunProgram]);

  useEffect(() => {
    const appPanel = document.querySelector('.appPanelWrap');

    if (appPanel) {
      appPanel.querySelectorAll('button').forEach((prog) => {
        prog.classList.remove('active');
      });

      if (activeProgram !== '') {
        const activeProg = appPanel.querySelector(`[data-program-name=${activeProgram}]`);
        activeProg?.classList.add('active');
      }
    }
  }, [activeProgram]);

  return (
    <button id={id} className={`appIcon ${type}`} title={desc}>
      <span className="iconImage"></span>
      <span className="iconName">{name}</span>
    </button>
  );
}

export default Icon;
