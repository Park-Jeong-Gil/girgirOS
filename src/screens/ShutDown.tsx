import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { systemState } from "../store/useSystemStatus";
import { currentAlert, programStatus } from "../store/useProgramStatus";

const ShutDown = () => {
  const [, setSystemStatus] = useRecoilState(systemState);
  const [, setProgramArr] = useRecoilState(programStatus);
  const [, setActiveAlert] = useRecoilState(currentAlert);


  function enterPress() {
    setSystemStatus('booting')
  }

  useEffect(() => {
    setProgramArr([])
    setActiveAlert([])
    
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Enter') enterPress()
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [setSystemStatus]);

  return (
    <section className="shutDownScreen">
      <strong>Epilogue</strong>
      <p>이 화면까지 와주셨다는건 제 포트폴리오를 디테일하게 봐주셨다는 의미군요!</p>
      <p>만약 재밌게 봐주셨다면 저에게 작게나마 관심을 표현 해주시길,</p>
      <p>그리고 앞으로도 좋은 인연을 이어갈 수 있길 진심으로 바라봅니다!</p>
      <p>여기까지 제 포트폴리오를 봐주셔서 감사 드립니다.</p>
      <p>Press <button onClick={enterPress} >&lt;Enter&gt;</button> Key to Continue... </p>
    </section>
  )
};

export default ShutDown;