import { useEffect } from "react";
import { useRecoilState } from "recoil";

import "98.css";
import startUpSound from '../assets/sounds/startup.mp3'
import { soundState } from "../store/useSystemStatus";

import Start from "../components/Start";
import Background from "../components/Background";

function DeskTop() {
  const [soundActive] = useRecoilState(soundState)
  
  useEffect(() => {
    const $DeskTopScreen = document.querySelector('.DeskTopScreen');
    const startUpAudio = new Audio(startUpSound);
    
    const timer = setTimeout(() => {
      $DeskTopScreen?.classList.add('loaded');
      soundActive && startUpAudio.play()
    }, 100);
    
    return () => clearTimeout(timer); 
  }, []);

  return (
    <section className="DeskTopScreen">
      <div className="screenInner">
        <Background/>
        <Start />
      </div>
    </section>
  )
}

export default DeskTop;