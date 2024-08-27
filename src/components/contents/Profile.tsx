import { useRecoilState } from "recoil";
import selfImage from '../../assets/images/common/profile-image.jpg'
import eduImage from '../../assets/images/common/eduScreen.png'
import { contact, programs } from "../../constants/desktopData";
import { currentProgram, programStatus } from "../../store/useProgramStatus";
import { useState } from "react";

interface ProfileProps {}

function Profile({}: ProfileProps) {
  const [programArr, setProgramArr] = useRecoilState(programStatus);
  const [, setActiveProgram] = useRecoilState(currentProgram);
  // 상태 관리 추가
  const [activeTab, setActiveTab] = useState('Girgir'); // 기본적으로 'Girgir' 탭이 활성화됨
  
  const handleTabClick = (tab: string) => {
    setActiveTab(tab); // 클릭한 탭으로 상태 업데이트
  };

  const runIntroProgram = ()=>{
    if(contact.SELF_INTRO.SIZE && !programArr.some(prog => prog.program === contact.SELF_INTRO.ID)){
      setProgramArr([...programArr, { 
          program: contact.SELF_INTRO.ID, 
          name: contact.SELF_INTRO.NAME, 
          initialSize: { width: contact.SELF_INTRO.SIZE.width, height:  contact.SELF_INTRO.SIZE.height }
        }]);
    }

    setActiveProgram(contact.SELF_INTRO.ID);
  }

  const runProjectsProgram = ()=>{
    if(!programArr.some(prog => prog.program === programs.PROJECTS.ID)){
      setProgramArr([...programArr, { 
          program: programs.PROJECTS.ID, 
          name: programs.PROJECTS.NAME, 
          initialSize: { width: programs.PROJECTS.SIZE.width, height:  programs.PROJECTS.SIZE.height }
        }]);
    }

    setActiveProgram(programs.PROJECTS.ID);
  }

  const runWantedProgram = ()=>{
    window.open(contact.WANTED.LINK, '_blank');
  }

  const handleClose = () => {
    setProgramArr(prev => {
      const updatedProgramArr = prev.filter(prog => prog.program !== 'profile');
      return updatedProgramArr;
    });
  };

  return (
    <>
      <menu role="tablist">
        <li role="tab" aria-selected={activeTab === 'Girgir'} onClick={() => handleTabClick('Girgir')}>
          <button>Girgir</button>
        </li>
        <li role="tab" aria-selected={activeTab === 'Skills'} onClick={() => handleTabClick('Skills')}>
          <button>Skills</button>
        </li>
        <li role="tab" aria-selected={activeTab === 'Education'} onClick={() => handleTabClick('Education')}>
          <button>Education</button>
        </li>
        <li role="tab" aria-selected={activeTab === 'Experience'} onClick={() => handleTabClick('Experience')}>
          <button>Experience</button>
        </li>
      </menu>
      <div className="profileContainer" role="tabpanel">
        <section className={`profileContentsWrap profileTab ${activeTab === 'Girgir' ? 'active' : ''}`}>
          <div className="imageWrap">
            <h3 className="secTit">Girgir</h3>
            <img src={selfImage} alt="profile image"/>
          </div>
          <div className="specList">
            <ul>
              <li>Name : 박정길</li>
              <li>Birthday : 1991. 01. 05</li>
              <li>Phone : <a href="tel:">010-4468-7412</a> </li>
              <li>Email : <a href="mailto:">wjdrlf5986@naver.com</a></li>
              <li>Location : 서울, 은평구 통일로</li>
              <li>MBTI : INFJ</li>
            </ul>
          </div>
        </section>
        <section className={`profileContentsWrap ${activeTab === 'Skills' ? 'active' : ''}`}>
          <h3 className="secTit">Skills</h3>
          <div className="skillWrap">
            <dl className="develop">
              <dt>Development</dt>
              <dd className="html">HTML5</dd>
              <dd className="css">CSS3</dd>
              <dd className="scss">SCSS</dd>
              <dd className="javascript">Javascript</dd>
              <dd className="typescript">Typescript</dd>
              <dd className="jquery">jQuery</dd>
              <dd className="gsap">GSAP</dd>
              <dd className="webgl">WebGL</dd>
              <dd className="three">Three.js</dd>
              <dd className="react">React</dd>
              <dd className="recoil">Recoil</dd>
              <dd className="gulp">Gulp</dd>
              <dd className="vite">Vite</dd>
              <dd className="git">Git</dd>
            </dl>
            <dl className="design">
              <dt>Design tools</dt>
              <dd className="photoshop">Adobe Photoshop</dd>
              <dd className="illustrator">Adobe Illustrator</dd>
              <dd className="figma">Figma</dd>
              <dd className="blender">Blender</dd>
              <dd className="sketchbook">Autodesk Sketchbook</dd>
            </dl>
            <dl className="work">
              <dt>Work tools</dt>
              <dd className="github">Github</dd>
              <dd className="gitlab">Gitlab</dd>
              <dd className="slack">Slack</dd>
              <dd className="notion">Notion</dd>
              <dd className="jira">Jira</dd>
              <dd className="aem">Aem</dd>
            </dl>
          </div>
        </section>
        <section className={`profileContentsWrap educationTab ${activeTab === 'Education' ? 'active' : ''}`}>
          <div className="eduImg">
            <img src={eduImage} alt="" />
          </div>
          <h3 className="secTit">Education</h3>
          <ul>
            <li>고려사이버대학교 디자인 공학과 (2021~재학중)</li>
            <li>한남대학고 회화과 (2009~중퇴) </li>
            <li>인하대학교 부속 고등학교 (2009) </li>
          </ul>
        </section>
        <section className={`profileContentsWrap ${activeTab === 'Experience' ? 'active' : ''}`}>
          <h3 className="secTit">Experience (총 경력 6년 11 개월)</h3>
          <ul className="experienceWrap">
            <li>
              <strong>FAVE (2020. 06 ~ 2024. 05)</strong>
              <span>인터렉션에 특화된 웹에이전시에서 감각적인 모션을 작업하며 다양한 프로모션 페이지들을 개발 하였습니다.
              특히 Samsung Galaxy Global, Samsung Semiconductor, 한화, 직방 등의 대기업 클라이언트를 대상으로 엄격한 크로스 브라우징과 웹 접근성을 충족하는 웹사이트를 다수 개발 했습니다.</span>
            </li>
            <li>
              <strong>이넘넷 (2019. 03 ~ 2020. 06)</strong>
              <span>UI/UX 파트를 맡은 웹 퍼블리셔로, 다수의 프로젝트에서 자바스크립트 및 제이쿼리를 활용하여 인터렉션 UX 개발을 진행 했습니다. </span>
            </li>
            <li>
              <strong>프리랜서 (2018. 09 ~ 2019. 03)</strong>
              <span>재취업 전 프리랜서로 다수의 홈페이지 디자인 및 개발을 했습니다.</span>
            </li>
            <li>
              <strong>DCTOM (2017. 07 ~ 2018. 09)</strong>
              <span>엔터테인먼트, 마케팅, 여행사, 스트리밍 서비스 등 회사에서 추진하는 다양한 사업분야에 따라 다수의 홈페이지를 디자인 및 개발 했습니다.</span>
            </li>
            <li>
              <strong>로뎀코퍼레이션 (2016. 08 ~ 2017. 03)</strong>
              <span>퍼플리셔 겸 디자이너로 입사. 개발자가 없이 부족한 부분은 솔루션을 최대한 활용하며 다수의 홈페이지 제작 및 관리 했습니다.</span>
            </li>
          </ul>
        </section>
        <div className="resumeBtnWrap">
          <button className="introBtn" onClick={runIntroProgram}>자기소개 보기 <strong>(<span>I</span>ntroduction) </strong></button>
          <button className="projectBtn" onClick={runProjectsProgram}>프로젝트 보기 <strong>(<span>P</span>rojects)</strong></button>
          <button className="wantedBtn" onClick={runWantedProgram}>원티드 이력서 보기 <strong>(<span>W</span>anted)</strong></button>
        </div>
      </div>
      <div className="closeBtnWrap">
        <button className="closeBtn" onClick={handleClose}>닫기</button>
      </div>
    </>
  )
}

export default Profile;