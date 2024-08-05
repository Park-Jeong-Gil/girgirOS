import { useEffect } from "react";
import { contact, programs } from "../constants/desktopData";
import { useRecoilState } from "recoil";
import { currentAlert, currentProgram, programStatus } from "../store/useProgramStatus";

interface IconProps {
  type: 'application' | 'alert';
  id: string;
  name: string;
  desc: string;
}

function Icon({ type, id, name, desc }: IconProps) {
  const [programArr, setProgramArr] = useRecoilState(programStatus);
  const [activeProgram, setActiveProgram] = useRecoilState(currentProgram);
  const [activeAlert, setActiveAlert] = useRecoilState(currentAlert);

  useEffect(() => {
    const appIcons = document.querySelectorAll('.appIcon');

    const handleRunProgram = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      const iconNameElement = target.querySelector('.iconName');
      const iconName = iconNameElement ? iconNameElement.textContent : 'Unknown';
      const programKey = target.getAttribute('id') || '';
      const programDesc = target.getAttribute('title') || '';

      if (target.classList.contains('application')) {
        if (iconName && !programArr.some(prog => prog.name === iconName)) {
          const programData = Object.values(programs).find(program => program.ID === programKey);
          const contactData = Object.values(contact).find(item => item.ID === programKey);

          const defaultSize = { width: 840, height: 600 };

          const { width: programW = defaultSize.width, height: programH = defaultSize.height } = 
            programData?.SIZE || 
            (contactData?.TYPE === 'application' ? contactData.SIZE : {});

          if (programData ||contactData) {
            setProgramArr(prevArr => [
              ...prevArr,
              { program: programKey, name: iconName, initialSize: { width: programW, height: programH } }
            ]);
            setActiveProgram(programKey);
          } else {
            console.error(`Program or contact data not found for key: ${programKey}`);
          }






          // // Check programs first
          // const programData = Object.values(programs).find(program => program.ID === programKey);
          // const contactData = Object.values(contact).find(item => item.ID === programKey);
  
          // if (programData || contactData) {
          //   const { width: programW, height: programH } = programData.SIZE; || contactData.SIZE
            
          //   setProgramArr(prevArr => [
          //     ...prevArr,
          //     { program: programKey, name: iconName, initialSize: { width: programW, height: programH } }
          //   ]);
          //   setActiveProgram(programKey);
          // } 
          // else {
          //   // Check contact if not found in programs
          //   const contactData = Object.values(contact).find(item => item.ID === programKey);
          //   if (contactData && contactData.TYPE === 'application') {
          //     const { width: contactW, height: contactH } = contactData.SIZE || { width: 840, height: 600 }; // Default size
          //     setProgramArr(prevArr => [
          //       ...prevArr,
          //       { program: programKey, name: iconName, initialSize: { width: contactW, height: contactH } }
          //     ]);
          //     setActiveProgram(programKey);
          //   } else {
          //     console.error(`Program or contact data not found for key: ${programKey}`);
          //   }
          // }
        }
      } else if (target.classList.contains('alert')) {
        setActiveAlert(prevArr =>[
          ...prevArr,{
            id: programKey,
            name: iconName !== null ? iconName : '',
            description: programDesc
          }
        ]);
      }
    };

    appIcons.forEach((elem) => {
      elem.addEventListener('dblclick', handleRunProgram);
    });

    return () => {
      appIcons.forEach((elem) => {
        elem.removeEventListener('dblclick', handleRunProgram);
      });
    };
  }, [type, programArr, setProgramArr, setActiveProgram, setActiveAlert]);

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
