import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { systemState } from "../store/useSystemStatus";

const loading = () => {
  const [, setSystemStatus] = useRecoilState(systemState);

  useEffect(() => {
    const $loadingScreen = document.querySelector(".loadingScreen");
    const $splashScreen = $loadingScreen?.querySelector(".splash");

    const timerLoading = setTimeout(() => {
      $loadingScreen?.classList.add("loaded");
    }, 500); // 로딩 시작
    const timerEnd = setTimeout(() => {
      $splashScreen?.classList.add("end");
    }, 3500); // 로딩 중
    const timerSetDesktop = setTimeout(() => {
      setSystemStatus("desktop");
    }, 4500); // 깜빡

    return () => {
      clearTimeout(timerLoading);
      clearTimeout(timerEnd);
      clearTimeout(timerSetDesktop);
    };
  }, []);

  return (
    <section className="loadingScreen">
      <h1 className="blind">girgir portfolio</h1>
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
  );
};

export default loading;
