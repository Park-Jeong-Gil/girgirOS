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

function Icon({type, id, name, desc}: IconProps) {
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

      if (type === 'application') {
        if (iconName && !programArr.some(prog => prog.name === iconName)) {
          const programData = Object.values(programs).find(program => program.ID === programKey);

          if (programData) {
            const { width: programW, height: programH } = programData.SIZE;
            setProgramArr(prevArr => [
              ...prevArr,
              { program: programKey, name: iconName, initialSize: { width: programW, height: programH } }
            ]);
            setActiveProgram(programKey);
          } else {
            console.error(`Program data not found for key: ${programKey}`);
          }
        }
      } else if (type === 'alert') {
        // Contact에서 알림 정보를 가져와서 업데이트
        const alretData = Object.values(contact).find(item => item.ID === programKey);

        if (alretData) {
          setActiveAlert({
            id: alretData.ID,
            name: alretData.NANE,
            description: alretData.DESCRIPTION
          });
        } else {
          console.error(`Alert data not found for key: ${programKey}`);
        }
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
  }, [type, programArr, setProgramArr, setActiveProgram, activeAlert]);

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
