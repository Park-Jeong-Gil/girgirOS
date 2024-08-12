import { useEffect } from "react";
import { programs } from "../../constants/desktopData";

import htmlIcon from '../../assets/images/common/html-16x16.png'
import mycomIcon from '../../assets/images/common/my-computer-16x16.png'
import myDocIcon from '../../assets/images/common/my-documents-16x16.png'
import recycleIcon from '../../assets/images/common/recycle-bin-16x16.png'

interface AdressMenuProps {
  type: string;
  url?:string
}

function AdressMenu({type, url}: AdressMenuProps) {
  useEffect(() => {
    // 초기화 작업 (필요한 경우)
  }, []);

  return (
    <div className="toolBar addressBar">
      <label htmlFor="address">Address</label>
      <div id="addressInput">
        { type == 'explorer' && 
          <>
            <img id="addressIcon" width="16" height="16" src={htmlIcon} alt="html icon" /> 
            <input type="text" id="address" autoComplete="off" value={url || 'localhost:5000'} readOnly/>
          </>
        }
        { type == 'myPc' && 
          <>
            <img id="addressIcon" width="16" height="16" src={mycomIcon} alt="my computer icon" /> 
            <input type="text" id="address" autoComplete="off" value={programs.CONTACT.NANE} readOnly/>
          </>
        }
        { type == 'myDoc' && 
          <>
            <img id="addressIcon" width="16" height="16" src={myDocIcon} alt="my document icon" /> 
            <input type="text" id="address" autoComplete="off" value={programs.PROJECTS.NANE} readOnly/>
          </>
        }
        { type == 'trashCan' && 
          <>
            <img id="addressIcon" width="16" height="16" src={recycleIcon} alt="recycle icon" /> 
            <input type="text" id="address" autoComplete="off" value={programs.TRASHCAN.NANE} readOnly/>
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
