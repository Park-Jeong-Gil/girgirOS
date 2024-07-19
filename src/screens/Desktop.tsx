import { useEffect } from "react";
import "98.css";
import '../style/Desktop.scss'
import '../style/Start.scss'
import startUpSound from '../assets/sounds/startup.mp3'
import Start from "../components/Start";

interface DeskTopProps {

}

function DeskTop({}: DeskTopProps) {
  useEffect(() => {
    const $DeskTopScreen = document.querySelector('.DeskTopScreen');
    
    const timer = setTimeout(() => {
      $DeskTopScreen?.classList.add('loaded');
      const startUpAudio = new Audio(startUpSound)
      // startUpAudio.play()
    }, 1000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <section className="DeskTopScreen">
      <div className="screenInner">
        <Start/>
      </div>
    </section>
  )
}

export default DeskTop;