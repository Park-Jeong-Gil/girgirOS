import { useState } from "react";
import TopMenu from "../toolBar/TopMenu";
import MiddleMenu from "../toolBar/MiddleMenu";
import AddressMenu from "../toolBar/AddressMenu";
import { projects } from "../../constants/projectData";

interface ExplorerProps {}

function Explorer({}: ExplorerProps) {
  const [isFavoritesVisible, setFavoritesVisible] = useState(true);
  const [isHistoryVisible, setHistoryVisible] = useState(true);

  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [activeDescription, setActiveDescription] = useState<string>('');
  const [activeSrc, setActiveSrc] = useState<string>('');

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

  // 데이터 연도별로 그룹화
  const groupedProjects = Object.values(projects).reduce((acc, project) => {
    const year = project.DATE.split('.')[0]; // '2024.04'에서 '2024' 추출
    if (!acc[year]) {
      acc[year] = [];
    }
    // SRC가 '#'이 아닌 경우만 추가
    if (project.SRC !== '#') {
      acc[year].push(project);
    }
    return acc;
  }, {} as Record<string, typeof projects[keyof typeof projects][]>);

  // 연도 기준으로 내림차순 정렬
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
            {/* 와우! 여기까지 봐주신 선생님은 <br />
            제가 준비한 대부분의 컨텐츠를 맛보고 계신 분이군요. <br />
            정말 감사합니다! :) */}

            R.I.P <br />
            <br />
            크로스 브라우징 난이도를 상향 평준화 시키며 <br /> 
            babel.js과 css hack으로 우릴 괴롭힌 악마같은 인터넷 익스플로러 <br />
            하지만 어린 시절 우리에게 온갖 정보와 게임, 노래를 접할 수 있게 해준<br />
            고마운 브라우저. <br />
            <hr />
            Favorites 목록에서 연도와 페이지를 선택해주세요. <br />
            History에서 선택한 웹페이지의 설명글을 볼 수 있습니다.<br />
            Home버튼을 누르면 현재 보고 계신 가이드 화면으로 돌아옵니다.
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
              <div>
              { activeSrc !== '' ? 
                <p dangerouslySetInnerHTML={{ __html: activeDescription }} /> :
                <p className="">
                  위 목록에서 선택한 웹페이지의 <br />설명글을 볼 수 있습니다.
                </p>
              }
              </div>
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
          <img id="status-bar-right-icon" width="16" height="16" src="https://98.js.org/images/icons/zone-internet-16x16.png" alt=""/>Internet
        </p>
      </div>
    </div>
  );
}

export default Explorer;
