import { useState } from "react";
import { useRecoilState } from "recoil";
import { programStatus } from "../../store/useProgramStatus";
import { projects } from "../../constants/projectData";

interface WebsiteProps {}

function Website({}: WebsiteProps) {
  const [, setProgramArr] = useRecoilState(programStatus);
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [activeDescription, setActiveDescription] = useState<string>('');
  const [activeSrc, setActiveSrc] = useState<string>('');
  
  // ID로 프로젝트를 찾는 함수
  const findProjectByID = (id: string) => {
    return Object.values(projects).find(project => project.ID === id);
  };

  const handleProjectClick = (projectID: string) => {
    const selectedProject = findProjectByID(projectID);

    if (selectedProject) {
      setActiveProject(projectID);
      setActiveDescription(selectedProject.DESCRIPTION);
      setActiveSrc(selectedProject.SRC || '#');
    } else {
      console.error(`Project with ID ${projectID} not found.`);
      setActiveProject(null);
      setActiveDescription('');
      setActiveSrc('');
    }
  };

  const handleClose = () => {
    setProgramArr(prev => {
      const updatedProgramArr = prev.filter(prog => prog.program !== 'website');
      return updatedProgramArr;
    });
  };

  const handleNewWindowClick = () => {
    if (activeSrc) {
      window.open(activeSrc, '_blank');
    } else {
      console.error('No source URL available');
    }
  };

  return (
    <div className="websiteContainer">
      <menu role="tablist">
        <li role="tab" aria-selected="true"><span>Background</span></li>
        <li role="tab"><span>Screen Saver</span></li>
        <li role="tab"><span>Appearance</span></li>
        <li role="tab"><span>Effects</span></li>
        <li role="tab"><span>Web</span></li>
        <li role="tab"><span>Settings</span></li>
      </menu>
      <div className="tabpanel" role="tabpanel">
        <div className="monitorWrap">
          <p className="monitor">
            <span className="monitorScreen" data-screen={activeProject}></span>
          </p>
        </div>
        <div className="listWrap">
          <strong className="secTit">Website List</strong>
          <div className="headerWrap">
            <p>아래 목록에서 사이트를 선택 해주세요.</p>
            <button className="newWindowBtn" onClick={handleNewWindowClick}>새창으로 보기</button>
          </div>
          <div className="listInner">
            <ul>
              {Object.keys(projects).map((key) => {
                const item = projects[key as keyof typeof projects];
                return (
                  <li className='websiteList' key={item.ID}>
                    <button
                      id={item.ID}
                      className={`websiteBtn ${activeProject === item.ID ? 'active' : ''}`}
                      onClick={() => handleProjectClick(item.ID)}
                      >
                      <span className="websiteIcon"></span>
                      <em className="websiteName">{item.TITLE}</em>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="websiteDesc">
            <p dangerouslySetInnerHTML={{ __html: activeDescription }} />
          </div>
        </div>
      </div>
      <div className="closeBtnWrap">
        <button className="closeBtn" onClick={handleClose}>닫기</button>
      </div>
    </div>
  );
}

export default Website;
