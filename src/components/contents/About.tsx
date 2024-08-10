import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { programStatus } from "../../store/useProgramStatus";
import { programs } from "../../constants/desktopData";

function About() {
  const [, setProgramArr] = useRecoilState(programStatus);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement !== null);
    };

    handleFullscreenChange()

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);


  const handleClose = () => {
    setProgramArr(prev => {
      const updatedProgramArr = prev.filter(prog => prog.program !== 'about');
      return updatedProgramArr;
    });
  };
  
  const handleFullScreen = () => {
    document.documentElement.requestFullscreen()
  };

  return (
    <div className="bodyInner">
      <div className="imageBox">
        <span className="profile"></span>
      </div>
      <div className="descBox">
        <strong>Welcome to Portfolio!</strong>
        <div className="description">
          <strong>
            Hello world! 반갑습니다! <br />
            박정길의 포트폴리오에 오신걸 환영 합니다.
          </strong>
          <ul>
            <li>해당 포트폴리오는 풀 스크린 사이즈에 <br />최적화 되어 있습니다.</li>
            <li>바탕화면에 아이콘을 더블클릭 하여 내용을 <br />확인 할 수 있습니다.</li>
            <li>모쪼록 재밌게 봐주시면 감사드리겠습니다.</li>
          </ul>
        </div>
        <ul>
          {Object.keys(programs).map((key) => {
            const item = programs[key as keyof typeof programs];
            return (
              <li className={`helpIcon ${item.ID}`}>: {item.DESCRIPTION}</li>
            );
          })}
        </ul>
        <div className="btnWrap">
          {!isFullscreen && (
            <button onClick={handleFullScreen}>풀 스크린으로 보기</button>
          )}
          <button className="aboutCloseBtn" onClick={handleClose}>닫기</button>
        </div>
      </div>
    </div>
  )
}

export default About;