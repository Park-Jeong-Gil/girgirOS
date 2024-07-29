import { useEffect, useState } from "react";
import { currentProgram, programStatus } from "../store/useProgramStatus"; 
import { useRecoilState } from "recoil";

interface AboutProps {

}

function About({}: AboutProps) {
  useEffect(()=>{

  },[])

  return (
    <section className="aboutContainer">
      <div className="containerInner">
        <div className="imageBox">

        </div>
        <div className="description">
          안녕하세요!
        </div>
      </div>
    </section>
  )
}

export default About;