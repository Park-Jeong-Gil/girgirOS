import { useEffect } from "react";

interface AdressMenuProps {}

function AdressMenu({}: AdressMenuProps) {
  useEffect(() => {
    // 초기화 작업 (필요한 경우)
  }, []);

  return (
    <div className="toolBar addressBar">
      <label htmlFor="address">Address</label>
      <div id="addressInput">
        <img id="addressIcon" width="16" height="16" src="https://98.js.org/images/icons/html-16x16.png" alt="" />
        <input type="text" id="address" autoComplete="off"/>
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
