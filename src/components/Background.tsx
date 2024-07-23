import { useEffect } from "react";


function Background() {

  useEffect(() => {

  }, []);

  return (
    <div className="Background">
      <button className="desktopIcon myPc">
        <span className="iconImage"></span>
        <span className="iconName">내 컴퓨터</span>
      </button>
      <button className="desktopIcon myDoc">
        <span className="iconImage"></span>
        <span className="iconName">내 문서</span>
      </button>
      <button className="desktopIcon trashCan">
        <span className="iconImage"></span>
        <span className="iconName">휴지통</span>
      </button>
      <button className="desktopIcon ie">
        <span className="iconImage"></span>
        <span className="iconName">Internet<br/> Explorer</span>
      </button>
      <button className="desktopIcon outlook">
        <span className="iconImage"></span>
        <span className="iconName">Outlook<br/> Express</span>
      </button>
      <button className="desktopIcon help">
        <span className="iconImage"></span>
        <span className="iconName">도움말</span>
      </button>

    </div>
  )
}

export default Background;