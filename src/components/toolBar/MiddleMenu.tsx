import { useEffect } from "react";

interface MiddleMenuProps {
  toggleFavorites: () => void;
  toggleHistory: () => void;
}

function MiddleMenu({ toggleFavorites, toggleHistory }: MiddleMenuProps) {
  useEffect(() => {
    // 초기화 작업 (필요한 경우)
  }, []);

  return (
    <div className="toolBar internetMenu">
      <div className="arrowBtnWrap">
        <button className="toolbarButton backButton" disabled>
          <span className="btnLabelText">Back</span>
        </button>
        <button className="toolbarDropdownButton" disabled>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            style={{ fill: "currentColor", display: "inline-block", verticalAlign: "middle" }}
          >
            <path
              style={{ transform: "rotate(90deg)", transformOrigin: "center" }}
              d="m6 4 4 4-4 4z"
            ></path>
          </svg>
        </button>
      </div>
      <div className="arrowBtnWrap">
        <button className="toolbarButton forwardButton" disabled>
          <span className="btnLabelText">Forward</span>
        </button>
        <button className="toolbarDropdownButton" disabled>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            style={{ fill: "currentColor", display: "inline-block", verticalAlign: "middle" }}
          >
            <path
              style={{ transform: "rotate(90deg)", transformOrigin: "center" }}
              d="m6 4 4 4-4 4z"
            ></path>
          </svg>
        </button>
      </div>
      <button className="toolbarButton stopButton" disabled>
        <span className="btnLabelText">Stop</span>
      </button>
      <button className="toolbarButton refreshButton" disabled>
        <span className="btnLabelText">Refresh</span>
      </button>
      <button className="toolbarButton homeButton">
        <span className="btnLabelText">Home</span>
      </button>
      <hr aria-orientation="vertical" />
      <button className="toolbarButton searchButton" disabled>
        <span className="btnLabelText">Search</span>
      </button>
      <button className="toolbarButton favoritesButton" onClick={toggleFavorites}>
        <span className="btnLabelText">Favorites</span>
      </button>
      <button className="toolbarButton historyButton" onClick={toggleHistory}>
        <span className="btnLabelText">History</span>
      </button>
      <hr aria-orientation="vertical" />
      <button className="toolbarButton printButton" disabled>
        <span className="btnLabelText">Print</span>
      </button>
    </div>
  );
}

export default MiddleMenu;
