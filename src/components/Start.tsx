import { useEffect, useState } from "react";
import { currentProgram, programStatus } from "../store/useProgramStatus"; 
import { useRecoilState } from "recoil";

interface StartProps {

}

function Start({}: StartProps) {
  const [currentTime, setCurrentTime] = useState<string>(new Date().toLocaleTimeString());
  const [programArr] = useRecoilState(programStatus)
  const [activeProgram, setActiveProgram] = useRecoilState(currentProgram)

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
  useEffect(()=>{
    const $DeskTopScreen = document.querySelector('.DeskTopScreen');
    const $appPanel = $DeskTopScreen?.querySelector('.appPanelWrap');
    const $programs = $appPanel?.querySelectorAll('button');
    
    const handleActiveProgram = (e:Event)=>{
      const target = e.currentTarget as HTMLElement;
      const programKey = target.getAttribute('data-program-name') || '';
      const $ProgramWindows = $DeskTopScreen?.querySelectorAll('.ProgramWindow')

      setActiveProgram(programKey)
      
      $ProgramWindows?.forEach(prog =>{
        if(prog.id === programKey){
          prog.classList.remove('minimized')
        }
      })
    }
        
    $programs?.forEach((elem) => {
      elem.addEventListener('click', handleActiveProgram);
    });



    
    return () => {
      $programs?.forEach((elem) => {
        elem.removeEventListener('click', handleActiveProgram);
      });
    };
  },[activeProgram])

  return (
    <div className="StartBar">
      <div className="startWrap">
        <button className="StartButton"></button>
        <ul className="start">
          
        </ul>
      </div>
      <div className="quickButtonWrap">
        <button className="quickBtn"></button>
      </div>
      <div className="appPanelWrap">
        {
          programArr.length > 0 && programArr.map((item, index) => (
            <button className="runningProgram" key={index} data-program-name={item.program}>
              <span>{item.name}</span>
            </button>
          ))
        }
      </div>
      <div className="notiWrap">
        <time>{currentTime}</time>
      </div>
    </div>
  )
}

export default Start;