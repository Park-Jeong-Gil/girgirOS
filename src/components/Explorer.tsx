import { useEffect } from "react";
import { currentProgram, programStatus } from "../store/useProgramStatus"; 
import { useRecoilState } from "recoil";

interface ExplorerProps {}

function Explorer({}: ExplorerProps) {
  useEffect(() => {
    // 초기화 작업 (필요한 경우)
  }, []);

  return (
    <section className="explorerContainer">

      <div className="containerInner"></div>
    </section>
  );
}

export default Explorer;
