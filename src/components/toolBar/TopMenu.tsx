import { useEffect } from "react";

interface TopMenuProps {}

function TopMenu({}: TopMenuProps) {
  useEffect(() => {
    // 초기화 작업 (필요한 경우)
  }, []);

  return (
    <div className="toolBar topMenu">
      <button><span>F</span>ile</button>
      <button><span>E</span>dit</button>
      <button><span>V</span>iew</button>
      <button><span>G</span>o</button>
      <button>F<span>a</span>vorites</button>
      <button><span>T</span>ools</button>
      <button><span>H</span>elp</button>
    </div>
  );
}

export default TopMenu;
