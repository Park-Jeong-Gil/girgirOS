import { useEffect } from "react";

interface MiddleMenuProps {
  type: string;
  toggleFavorites?: () => void;
  toggleHistory?: () => void;
  toggleHome?: () => void;
}

function MiddleMenu({ toggleFavorites, toggleHistory, toggleHome, type }: MiddleMenuProps) {
  useEffect(() => {
    // 초기화 작업 (필요한 경우)
  }, []);

  return (
    <div className="toolBar middleMenu">
      <div className="arrowBtnWrap">
        <button className="toolbarButton backButton" {...(type === 'explorer' ? { disabled: true } : {})}>
          <span className="btnLabelText">Back</span>
        </button>
        <button className="toolbarDropdownButton" {...(type === 'explorer' ? { disabled: true } : {})}>
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
        <button className="toolbarButton forwardButton" {...(type === 'explorer' ? { disabled: true } : {})}>
          <span className="btnLabelText">Forward</span>
        </button>
        <button className="toolbarDropdownButton" {...(type === 'explorer' ? { disabled: true } : {})}>
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
      { type == 'explorer' && 
        <>
          <button className="toolbarButton stopButton" disabled>
            <span className="btnLabelText">Stop</span>
          </button>
          <button className="toolbarButton refreshButton" disabled>
            <span className="btnLabelText">Refresh</span>
          </button>
          <button className="toolbarButton homeButton" onClick={toggleHome}>
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
        </>
      }
      { type == 'folder' && 
        <>
          <button className="toolbarButton upButton" >
            <span className="btnLabelText">Up</span>
          </button>
          <hr aria-orientation="vertical" />
          <button className="toolbarButton cutButton" >
            <span className="btnLabelText">Cut</span>
          </button>
          <button className="toolbarButton copyButton">
            <span className="btnLabelText">Copy</span>
          </button>
          <hr aria-orientation="vertical" />
          <button className="toolbarButton pasteButton" >
            <span className="btnLabelText">Paste</span>
          </button>
          <hr aria-orientation="vertical" />
          <button className="toolbarButton undoButton">
            <span className="btnLabelText">Undo</span>
          </button>
          <hr aria-orientation="vertical" />
          <button className="toolbarButton deleteButton">
            <span className="btnLabelText">Delete</span>
          </button>
          <button className="toolbarButton propertiesButton" >
            <span className="btnLabelText">Properties</span>
          </button>
          <hr aria-orientation="vertical" />
          <div className="arrowBtnWrap">
            <button className="toolbarButton viewsButton" >
              <span className="btnLabelText">Views</span>
            </button>
            <button className="toolbarDropdownButton" >
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
        </>
      }
    </div>
  );
}

export default MiddleMenu;
