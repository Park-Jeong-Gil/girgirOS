import { useEffect } from "react";
import TopMenu from "../toolBar/TopMenu";
import { notepad } from "../../constants/notepad";

interface NotePadProps {
  id: string;
}

function NotePad({ id }: NotePadProps) {
  useEffect(() => {
    // `id`가 `introduction`일 때만 `textarea`의 값을 설정
    if (id === 'introduction') {
      const intro = document.querySelector('#introduction') as HTMLTextAreaElement;
      if (intro) {
        intro.value = notepad.SELF_INTRO;
      }
    }
  }, [id]); // `id`가 변경될 때마다 `useEffect` 실행

  return (
    <div className="notePadContainer">
      <div className="toolBarWrap">
        <TopMenu />
      </div>
        {id === 'introduction' ? (
          <textarea name="introduction" id="introduction"></textarea>
        ) : (
          <textarea name="empty" id="empty"></textarea>
        )}
    </div>
  );
}

export default NotePad;
