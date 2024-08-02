import { useEffect } from "react";
import { programs } from "../../constants/desktopData";

interface AdressMenuProps {
  type: string;
}

function AdressMenu({type}: AdressMenuProps) {
  useEffect(() => {
    // 초기화 작업 (필요한 경우)
  }, []);

  return (
    <div className="toolBar addressBar">
      <label htmlFor="address">Address</label>
      <div id="addressInput">
        { type == 'explorer' && 
          <>
            <img id="addressIcon" width="16" height="16" src="https://98.js.org/images/icons/html-16x16.png" alt="" /> 
            <input type="text" id="address" autoComplete="off"/>
          </>
        }
        { type == 'myPc' && 
          <>
            <img id="addressIcon" width="16" height="16" src="https://98.js.org/images/icons/my-computer-16x16.png" alt="" /> 
            <input type="text" id="address" autoComplete="off" value={programs.CONTACT.NANE}/>
          </>
        }
        { type == 'myDoc' && 
          <>
            <img id="addressIcon" width="16" height="16" src="https://98.js.org/images/icons/my-documents-16x16.png" alt="" /> 
            <input type="text" id="address" autoComplete="off" value={programs.PROJECTS.NANE}/>
          </>
        }
        { type == 'trashCan' && 
          <>
            <img id="addressIcon" width="16" height="16" src="https://98.js.org/images/icons/recycle-bin-16x16.png" alt="" /> 
            <input type="text" id="address" autoComplete="off" value={programs.TRASHCAN.NANE}/>
          </>
        }
        <button id="addressDropdownButton" disabled>
          <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style={{ fill: "currentColor" }}>
            <path style={{ transformOrigin: "center" }} d="m5 6 4 4-4 4z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default AdressMenu;
