import { useEffect } from "react";

interface DeskTopProps {

}

function DeskTop({}: DeskTopProps) {
  useEffect(() => {
    const $DeskTopScreen = document.querySelector('.DeskTopScreen');
    
    const timer = setTimeout(() => {
      $DeskTopScreen?.classList.add('loaded');
    }, 2500);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <section className="DeskTopScreen">
      DeskTop page
    </section>
  )
}

export default DeskTop;