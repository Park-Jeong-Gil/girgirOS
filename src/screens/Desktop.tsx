import { useEffect } from "react";
import { useRecoilState } from "recoil";

import "98.css";
import startUpSound from '../assets/sounds/startup.mp3'
import { soundState } from "../store/useSystemStatus";

import Start from "../components/Start";
import Background from "../components/Background";
import { programStatus } from "../store/useProgramStatus";
import Program from "../components/Program";


function DeskTop() {
  const [soundActive] = useRecoilState(soundState)
  const [programArr] = useRecoilState(programStatus);
  
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
        {/* {
          programArr.length > 0 && programArr.map((item, index) => (
            <Program 
              key={index} 
              name={item.name} 
              programId={item.program} 
              layer={index} 
              initialSize={item.initialSize}/>
          ))
        } */}
        <Start />
      </div>
    </section>
  )
}

export default DeskTop;