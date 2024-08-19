import { useEffect, useState } from "react";
import TopMenu from "../toolBar/TopMenu";
import MiddleMenu from "../toolBar/MiddleMenu";
import AddressMenu from "../toolBar/AddressMenu";
import { contact, programs, works, recycle } from "../../constants/desktopData";
import Icon from "../Icon";

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
      <div className="bodyInner">
        <div className="folderPanel">
          <span className={`panelicon ${programData.ID}`}></span>
          <h3 className="panelTitle">
            <span>{programData.NAME}</span>
          </h3>
          <p className="panelInfo">
            {programData.DESCRIPTION}
          </p>
        </div>
        <div className="fileList">
          {id === 'myPc' && (
            Object.keys(contact).map((key) => {
              const item = contact[key as keyof typeof contact];
              return (
                <Icon type={item.TYPE} key={item.ID} id={item.ID} name={item.NAME} desc={item.DESCRIPTION}/>
              );
            })
          )}
          {id === 'myDoc' && (
            Object.keys(works).map((key) => {
              const item = works[key as keyof typeof works];
              return (
                <Icon type={item.TYPE} key={item.ID} id={item.ID} name={item.NAME} desc={item.DESCRIPTION}/>
              );
            })
          )}
          {id === 'trashCan' && (
            Object.keys(recycle).map((key) => {
              const item = recycle[key as keyof typeof recycle];
              return (
                <Icon type={item.TYPE} key={item.ID} id={item.ID} name={item.NAME} desc={item.DESCRIPTION}/>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}

export default Folder;
