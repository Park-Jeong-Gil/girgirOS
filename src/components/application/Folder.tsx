import { useEffect, useState } from "react";
import TopMenu from "../toolBar/TopMenu";
import MiddleMenu from "../toolBar/MiddleMenu";
import AddressMenu from "../toolBar/AddressMenu";
import { programs } from "../../constants/desktopData";

interface FolderProps {
  id: string;
}

function Folder({ id }: FolderProps) {
  const [programData, setProgramData] = useState<typeof programs[keyof typeof programs] | null>(null);

  useEffect(() => {
    // `id`를 기반으로 `programs`에서 해당 프로그램 정보를 찾음
    const program = Object.values(programs).find(program => program.ID === id);
    setProgramData(program || null);
  }, [id]);

  if (!programData) {
    return <p>Loading...</p>; // 프로그램 데이터를 로드할 때 로딩 상태 표시
  }

  return (
    <section className="folderContainer">
      <TopMenu />
      <MiddleMenu type="folder" />
      <AddressMenu type={id} />
      <div className="containerInner">
        <div className="folderPanel">
          <span className={`panelicon ${programData.ID}`}></span>
          <h3 className="panelTitle">
            <span>{programData.NANE}</span>
          </h3>
          <p className="panelInfo">
            {programData.DESCRIPTION} 
          </p>
        </div>
        <div className="fileList">
          {/* 파일 목록을 여기에 추가할 수 있습니다 */}
        </div>
      </div>
    </section>
  );
}

export default Folder;
