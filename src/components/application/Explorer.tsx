import { useEffect, useRef, useState } from "react";
import TopMenu from "../toolBar/TopMenu";
import MiddleMenu from "../toolBar/MiddleMenu";
import AddressMenu from "../toolBar/AddressMenu";
import { projects } from "../../constants/projectData";
import zone from '../../assets/images/common/zone-internet-16x16.png'

interface ExplorerProps {}

function Explorer({}: ExplorerProps) {
  const [isFavoritesVisible, setFavoritesVisible] = useState(true);
  const [isHistoryVisible, setHistoryVisible] = useState(true);

  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [activeDescription, setActiveDescription] = useState<string>('');
  const [activeSrc, setActiveSrc] = useState<string>('');
  const descriptionRef = useRef<HTMLDivElement>(null);
  
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

  const toggleFavorites = () => {
    setFavoritesVisible(!isFavoritesVisible);
    if (isHistoryVisible) {
      setHistoryVisible(false);
    }
  };

  const closeFavorites = () => {
    setFavoritesVisible(false);
    if (isHistoryVisible) {
      setHistoryVisible(false);
    }
  };

  const toggleHistory = () => {
    if (!isFavoritesVisible) {
      setFavoritesVisible(true);
    }
    if (!isHistoryVisible) {
      setHistoryVisible(true);
    } else {
      setHistoryVisible(!isHistoryVisible);
    }
  };

  const toggleHome = () => {
    setActiveProject(null);
    setActiveDescription('');
    setActiveSrc('');
  };

  const closeHistory = () => {
    setHistoryVisible(false);
  };

  useEffect(() => {
    if (descriptionRef.current) {
      descriptionRef.current.scrollTop = 0;
    }
  }, [activeDescription]);

  const groupedProjects = Object.values(projects).reduce((acc, project) => {
    const year = project.DATE.split('.')[0]; 
    if (!acc[year]) {
      acc[year] = [];
    }
    
    // project.SRC !== '#' && 
    if (!project.SRC.endsWith('#')) {
      acc[year].push(project);
    }
    return acc;
  }, {} as Record<string, typeof projects[keyof typeof projects][]>);

  const sortedYears = Object.keys(groupedProjects).sort((a, b) => parseInt(b) - parseInt(a));

  return (
    <div className="explorerContainer">
      <div className="toolBarWrap">
        <TopMenu />
        <MiddleMenu
          type='explorer'
          toggleFavorites={toggleFavorites}
          toggleHistory={toggleHistory}
          toggleHome={toggleHome}
        />
        <AddressMenu type='explorer' url={activeSrc || ''} />
      </div>
      <div className="bodyInner">
        { activeSrc !== '' ? 
          <iframe src={activeSrc}></iframe> :
          <div className="homeScreen">
            <p className="homeTit">R.I.P Internet Explorer</p>
            <p>
              크로스 브라우징 난이도를 상향 평준화 시킨 악마. <br />
              하지만 어린 시절 우리에게 온갖 정보와 게임, 노래를 아낌없이 주며, (법보다 강력하게)<br />
              눈으로 볼 수 없는 넓은 세상이 있다는 자각과 다채로운 꿈을 꾸게 해준 낡은 추억. <br />
              흉내 뿐이지만 이렇게 나마 애증의 브라우저를 재현 해봤습니다.
            </p>
            <p className="howto">
              <strong>How to use : </strong>
              <em className="favorites">Favorites</em> 목록에서 연도와 페이지를 선택해주세요. <br />
              <em className="history">History</em> 에서 선택한 웹페이지의 설명글을 볼 수 있습니다.<br />
              <em className="home">Home</em> 버튼을 누르면 현재 보고 계신 가이드 화면으로 돌아옵니다.
            </p>
          </div>
        }
        <div className={`sideBar ${isFavoritesVisible ? 'open' : ''} `}>
          <div className="favoritesWrap">
            <div className="favoriteTitBox titleBox">
              <h4>Favorites</h4>
              <button className="favoriteCloseBtn sideCloseBtn" onClick={closeFavorites}></button>
            </div>
            <div className="treeWrap">
              <ul className="tree-view">
                {sortedYears.map((year) => (
                  groupedProjects[year].length > 0 && (
                    <details key={year}>
                      <summary>{year}</summary>
                      <ul>
                        {groupedProjects[year].map((project) => (
                          <li className='websiteList' key={project.ID}>
                            <button
                              id={project.ID}
                              className={`websiteBtn ${activeProject === project.ID ? 'active' : ''}`}
                              onClick={() => handleProjectClick(project.ID)}
                            >
                              <span className="websiteIcon"></span>
                              <em className="websiteName">{project.TITLE}</em>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </details>
                  )
                ))}
              </ul>
            </div>
          </div>
          <div className={`historyWrap ${isHistoryVisible ? 'open' : ''}`}>
            <div className="historyTitBox titleBox">
              <h4>History</h4>
              <button className="historyCloseBtn sideCloseBtn" onClick={closeHistory}></button>
            </div>
            <div className="description">
              { activeSrc !== '' ? 
                <article className="pageDesc" ref={descriptionRef}  dangerouslySetInnerHTML={{ __html: activeDescription }} >
                </article> :
                <p className="pageDesc">
                  위 목록에서 선택한 웹페이지의 <br />설명글을 볼 수 있습니다.
                </p>
              }
            </div>
          </div>
          <div className="moveButtonWrap">
            <a href={activeSrc || '#'} target="_blank" className="newWindowBtn">새창으로 보기</a>
          </div>
        </div>
      </div>
      <div className="status-bar">
        <p className="statusBox statusLeft"></p>
        <p className="statusBox statusMiddle"></p>
        <p className="statusBox statusRight">
          <img id="status-bar-right-icon" width="16" height="16" src={zone} alt="zone internet icon"/>Internet
        </p>
      </div>
    </div>
  );
}

export default Explorer;
