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
          {activeSrc ? 
            <article className="websiteDesc pageDesc" ref={descriptionRef} dangerouslySetInnerHTML={{ __html: activeDescription }}></article> :
            <article className="websiteDesc pageDesc">
              <header className="siteHeader">
                <h3>프로젝트 : <strong>Girgir OS</strong></h3>
                <p>
                  작업 기간 : 
                  <time dateTime="2024-03">2024년 7월</time> ~ 
                  <time dateTime="2024-04">2024년 8월</time>
                </p>
                <p className="skill">사용기술 : Vite, React, Typescript</p>
              </header>
              <div className="siteDesc">
                <p>현재 포트폴리오 사이트는 <strong>90년대 Windows</strong>를 컨셉으로 작업 했습니다.</p>
                <p>제가 레트로한 감성을 좋아하기도 하고, 호불호가 갈릴 수도 있지만 조금 더 기억에 남을 수 있게 재미있는 포트폴리오 사이트를 만들고 싶었습니다. </p>
                <p>그동안 재직 중 제 관심 분야였던 스크롤 인터렉션을 만드는 작업과 퍼포먼스를 최적화 하는 경험은 많이 있었지만, 아쉽게도 프론트 엔드 기술을 활용 할 수 있는 프로젝트를 접할 기회가 없었습니다. 때문에 혼자서 React와 Typescript를 틈틈히 공부했고 이번 포트폴리오에서 Vite, React, Typescript를 사용하여 작업 할 수 있었습니다.</p>
              </div>
            </article>
          }
        </div>
      </div>
      <div className="closeBtnWrap">
        <button className="closeBtn" onClick={handleClose}>닫기</button>
      </div>
    </div>
  );
}

export default Website;
