import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./screens/App";

// Add type declaration for clarity
declare global {
  interface Window {
    clarity: (command: string, ...args: any[]) => void;
  }
}

window.addEventListener("load", function () {
  // Clarity 초기화가 모든 리소스 로드 후에 실행되도록 보장
  if (window.clarity) {
    window.clarity("set", "cssLoaded", "true");
  }
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
