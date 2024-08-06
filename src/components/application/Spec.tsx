import { useEffect } from "react";

interface SpecProps {

}

function Spec({}: SpecProps) {
  useEffect(()=>{

  },[])

  return (
    <dl className="specContainer">
      <dt className="tit">
        <p className="bubble">Birthday</p>
      </dt>
      <dd className="desc">
        <ul className="bubble">
          <li>1991.01.05</li>
        </ul>
      </dd>
      <dt className="tit">
        <p className="bubble">Contact</p>
      </dt>
      <dd className="desc">
        <ul className="bubble">
          <li>010-4468-7412 </li>
          <li>wjdrlf5986@naver.com </li>
          <li>Seoul, Enpyung-gu</li>
        </ul>
      </dd>
      <dt className="tit">
        <p className="bubble">Education</p>
      </dt>
      <dd className="desc">
        <ul className="bubble">
          <li>인하대학교 부속 고등학교 (2008) </li>
          <li>한남대학고 회화과 (중퇴) </li>
          <li>고려사이버대 디자인 공학과 (재학중)</li>
        </ul>
      </dd>
      <dt className="tit">
        <p className="bubble">Experience</p>
      </dt>
      <dd className="desc">
        <ul className="bubble">
          <li>인하대학교 부속 고등학교 (2008) </li>
          <li>한남대학고 회화과 (중퇴) </li>
          <li>고려사이버대 디자인 공학과 (재학)</li>
        </ul>
      </dd>
    </dl>
  )
}

export default Spec;