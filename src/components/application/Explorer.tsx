import { useEffect, useState } from "react";
import TopMenu from "../toolBar/TopMenu";
import MiddleMenu from "../toolBar/MiddleMenu";
import AddressMenu from "../toolBar/AddressMenu";

interface ExplorerProps {}

function Explorer({}: ExplorerProps) {
  const [isFavoritesVisible, setFavoritesVisible] = useState(true);
  const [isHistoryVisible, setHistoryVisible] = useState(true);

  const toggleFavorites = () => {
    setFavoritesVisible(!isFavoritesVisible);
    if(isHistoryVisible) {setHistoryVisible(false)}
  };

  const closeFavorites = () => {
    setFavoritesVisible(false);
    if(isHistoryVisible) {setHistoryVisible(false)}
  };

  const toggleHistory = () => {
    if(!isFavoritesVisible) setFavoritesVisible(true)
    if(!isHistoryVisible) {setHistoryVisible(true)
    }else{
      setHistoryVisible(!isHistoryVisible);
    }
  };

  const closeHistory = () => {
    setHistoryVisible(false);
  };

  useEffect(() => {
    // 필요 시 초기화 작업
  }, [isFavoritesVisible, isHistoryVisible]);

  return (
    <section className="explorerContainer">
      <div className="toolBarWrap">
        <TopMenu />
        <MiddleMenu
          type='explorer'
          toggleFavorites={toggleFavorites}
          toggleHistory={toggleHistory}
        />
        <AddressMenu type='explorer'/>
      </div>
      <div className="containerInner">
        <iframe src="https://girgir.synology.me/dev/KG-Mobility/"></iframe>
      {/* <iframe
        width="100%"
        height="100%"
        src="https://www.ravinggoblins.club/"
        frameBorder="0"
      ></iframe> */}
      <div className={`sideBar ${isFavoritesVisible ? 'open' : ''} `}>

        <div className="favoritesWrap">
          <div className="favoriteTitBox titleBox">
            <h4>Favorites</h4>
            <button className="favoriteCloseBtn sideCloseBtn" onClick={closeFavorites}></button>
          </div>
          <div className="treeWrap">
            <ul className="tree-view">
              <li>Table of Contents</li>
              <li>What is web development?</li>
              <li>
                CSS
                <ul>
                  <li>Selectors</li>
                  <li>Specificity</li>
                  <li>Properties</li>
                </ul>
              </li>
              <li>
                <details open>
                  <summary>JavaScript</summary>
                  <ul>
                    <li>Avoid at all costs</li>
                    <li>
                      <details>
                        <summary>Unless</summary>
                        <ul>
                          <li>Avoid</li>
                          <li>
                            <details>
                              <summary>At</summary>
                              <ul>
                                <li>Avoid</li>
                                <li>At</li>
                                <li>All</li>
                                <li>Cost</li>
                              </ul>
                            </details>
                          </li>
                          <li>All</li>
                          <li>Cost</li>
                        </ul>
                      </details>
                    </li>
                  </ul>
                </details>
              </li>
              <li>HTML</li>
              <li>Special Thanks</li>
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
            
            </div>
          </div>
        </div>
        <div className="moveButtonWrap">
          {/* <strong>새 창으로 이동 합니다.</strong> */}
          <a href="#" className="linkto">new window</a>
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
    </section>
  );
}

export default Explorer;
