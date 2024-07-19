import { useEffect, useState } from "react";
import '../style/Desktop.scss'

interface StartProps {

}

function Start({}: StartProps) {
  const [currentTime, setCurrentTime] = useState<string>(new Date().toLocaleTimeString());

  useEffect(() => {
    // 시간 업데이트 설정
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    // 컴포넌트 언마운트 시 오디오 정지 및 타이머 클리어
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <section className="StartBar">
      <div className="startWrap">
        <button className="StartButton"></button>
      </div>
      <div className="quickButtonWrap">
        <button className="quickBtn"></button>
      </div>
      <div className="appPanelWrap">

      </div>
      <div className="notiWrap">
        <time>{currentTime}</time>
      </div>
    </section>
  )
}

export default Start;