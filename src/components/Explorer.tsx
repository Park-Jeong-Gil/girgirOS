import { useEffect } from "react";
import { currentProgram, programStatus } from "../store/useProgramStatus"; 
import { useRecoilState } from "recoil";
import TopMenu from "./TopMenu";

interface ExplorerProps {}

function Explorer({}: ExplorerProps) {
  useEffect(() => {
    
  }, []);

  return (
    <section className="explorerContainer">
      <div className="toolBarWrap">
        <TopMenu/>
        <div className="toolBar internetMenu">
          <div className="arrowBtnWrap">
            <button className="toolbarButton backButton" >
              <span className="btnLabelText">Back</span>
            </button>
            <button className="toolbarDropdownButton" >
              <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style={{ fill: "currentColor", display: "inline-block", verticalAlign: "middle" }}>
                <path style={{ transform: "rotate(90deg)", transformOrigin: "center" }} d="m6 4 4 4-4 4z"></path>
              </svg>
            </button>
          </div>
          <div className="arrowBtnWrap">
            <button className="toolbarButton forwardButton" >
              <span className="btnLabelText">Forward</span>
            </button>
            <button className="toolbarDropdownButton" >
              <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style={{ fill: "currentColor", display: "inline-block", verticalAlign: "middle" }}>
                <path style={{ transform: "rotate(90deg)", transformOrigin: "center" }} d="m6 4 4 4-4 4z"></path>
              </svg>
            </button>
          </div>
          <button className="toolbarButton stopButton"><span className="btnLabelText">Stop</span></button>
          <button className="toolbarButton refreshButton"><span className="btnLabelText">Refresh</span></button>
          <button className="toolbarButton homeButton"><span className="btnLabelText">Home</span></button>
          <hr aria-orientation="vertical" />
          <button className="toolbarButton searchButton"><span className="btnLabelText">Search</span></button>
          <button className="toolbarButton favoritesButton"><span className="btnLabelText">Favorites</span></button>
          <button className="toolbarButton historyButton"><span className="btnLabelText">History</span></button>
          <hr aria-orientation="vertical" />
          <button className="toolbarButton printButton"><span className="btnLabelText">Print</span></button>
        </div>
        <div className="toolBar addressBar">
          <label htmlFor="address">Address</label>
          <div id="addressInput">
            <img id="addressIcon" width="16" height="16" src="https://98.js.org/images/icons/html-16x16.png" alt="" />
            <input type="text" id="address" autoComplete="off" value={'home'}/>
            <button id="addressDropdownButton" disabled>
              <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style={{ fill: "currentColor" }}>
                <path style={{ transformOrigin: "center" }} d="m5 6 4 4-4 4z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="containerInner">
        <iframe src=""></iframe>
      {/* <iframe
        width="100%"
        height="100%"
        src="https://www.ravinggoblins.club/"
        frameBorder="0"
      ></iframe> */}
      <div className="favorite">
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
    <div className="status-bar">
      <p className="statusBox statusLeft"></p>
      <p className="statusBox statusMiddle"></p>
      <p className="statusBox statusRight">
        <img id="status-bar-right-icon" width="16" height="16" src="https://98.js.org/images/icons/zone-internet-16x16.png" alt=""/>Internet
      </p>
    </div>
    <div className="portfolioDesc">
    </div>
    </section>
  );
}

export default Explorer;
