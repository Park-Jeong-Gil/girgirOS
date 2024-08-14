import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { programStatus } from "../../store/useProgramStatus";
import { projects } from "../../constants/projectData";

interface WebsiteProps {}

function Website({}: WebsiteProps) {
  const [, setProgramArr] = useRecoilState(programStatus);
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [activeDescription, setActiveDescription] = useState<string>('');
  const [activeSrc, setActiveSrc] = useState<string>('');

  // 페이지 설명을 참조할 수 있는 ref
  const descriptionRef = useRef<HTMLDivElement>(null);
  
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

  const handleDoubleClick = (projectID: string) => {
    const selectedProject = findProjectByID(projectID);
    // && selectedProject.SRC !== '#'
    if (selectedProject && selectedProject.SRC ) {
      window.open(selectedProject.SRC, '_blank');
    } else {
      console.error('No source URL available or URL is invalid');
    }
  };

  // activeDescription이 변경될 때마다 페이지 설명의 스크롤을 상단으로 이동
  useEffect(() => {
    if (descriptionRef.current) {
      descriptionRef.current.scrollTop = 0;
    }
  }, [activeDescription]);

  const handleClose = () => {
    setProgramArr(prev => {
      const updatedProgramArr = prev.filter(prog => prog.program !== 'website');
      return updatedProgramArr;
    });
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
            <a href={activeSrc ? activeSrc : '#'} target="_blank" className="newWindowBtn">새창으로 보기</a>
          </div>
          <div className="listInner">
            <div className="listHeader">
              <span>Site Name</span>
              <span>Date</span>
            </div>
            <ul>
              {Object.keys(projects).map((key) => {
                const item = projects[key as keyof typeof projects];
                return (
                  <li className='websiteList' key={item.ID}>
                    <button
                      id={item.ID}
                      className={`websiteBtn ${activeProject === item.ID ? 'active' : ''}`}
                      onClick={() => handleProjectClick(item.ID)}
                      onDoubleClick={() => handleDoubleClick(item.ID)} // 더블 클릭 핸들러 추가
                      >
                      <span className="websiteIcon"></span>
                      <em className="websiteName">{item.TITLE}</em>
                      <span className="websiteDate">{item.DATE}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <p className="descTit">사이트 설명 :</p>
          <div className="websiteDesc pageDesc" ref={descriptionRef}>
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
