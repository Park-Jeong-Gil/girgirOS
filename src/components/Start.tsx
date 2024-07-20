import { useEffect, useState } from "react";
import { programStatus } from "../store/useProgramStatus"; 
import { useRecoilState } from "recoil";

interface StartProps {

}

function Start({}: StartProps) {
  const [currentTime, setCurrentTime] = useState<string>(new Date().toLocaleTimeString());
  const [programArr] = useRecoilState(programStatus)

  useEffect(() => {
    // 시간 업데이트 설정
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <section className="StartBar">
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
            <button className="runningProgram" key={index}>
              {item}
            </button>
          ))
        }
      </div>
      <div className="notiWrap">
        <time>{currentTime}</time>
      </div>
    </section>
  )
}

export default Start;