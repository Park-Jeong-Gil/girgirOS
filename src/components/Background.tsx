import { useEffect } from "react";


function Background() {

  useEffect(() => {

  }, []);

  return (
    <div className="Background">
      <button className="desktopIcon myPc">
        <span>내 컴퓨터</span>
      </button>
      <button className="desktopIcon myDoc">
        <span>내 문서</span>
      </button>
      <button className="desktopIcon trashCan">
        <span>휴지통</span>
      </button>
      <button className="desktopIcon ie">
        <span>Internet<br/> Explorer</span>
      </button>
      <button className="desktopIcon outlook">
        <span>outlook<br/> Express</span>
      </button>
      <button className="desktopIcon help">
        <span>도움말</span>
      </button>
    </div>
    
  )
}

export default Background;