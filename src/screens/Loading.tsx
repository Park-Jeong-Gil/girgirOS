import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { systemState } from "../store/useSystemStatus";

const loading = () => {
  const [, setSystemStatus] = useRecoilState(systemState);

  useEffect(() => {
    const $loadingScreen = document.querySelector('.loadingScreen');
    const $splashScreen = $loadingScreen?.querySelector('.splash');
    
    const timer = setTimeout(() => {
      $loadingScreen?.classList.add('loaded');

      setTimeout(() => {
        $splashScreen?.classList.add('end')

        setTimeout(() => {
          setSystemStatus('desktop')
        }, 2500)
      }, 3800)
    }, 1000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <section className="loadingScreen">
      <h1 className='blind'>girgir portfolio</h1>
      <div className="screenInner">
        <div className="splash">
          <h2 className="windowLogo">
            <span className="blind">window logo</span>
          </h2>
          <span className="loadingBar"></span>
        </div>
        <span className="flickBar">_</span>
      </div>
    </section>
  )
};

export default loading;