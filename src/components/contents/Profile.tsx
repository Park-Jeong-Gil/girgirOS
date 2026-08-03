import { useRecoilState } from "recoil";
import selfImage from "../../assets/images/common/profile-image.jpg";
import eduImage from "../../assets/images/common/eduScreen.png";
import { contact, programs } from "../../constants/desktopData";
import { careers } from "../../constants/careerData";
import {
  getCareerPeriodText,
  getTotalCareerText,
} from "../../utils/careerHelper";
import { currentProgram, programStatus } from "../../store/useProgramStatus";
import { useMemo, useState } from "react";

interface ProfileProps {}

function Profile({}: ProfileProps) {
  const [programArr, setProgramArr] = useRecoilState(programStatus);
  const [, setActiveProgram] = useRecoilState(currentProgram);
  // 상태 관리 추가
  const [activeTab, setActiveTab] = useState("Girgir"); // 기본적으로 'Girgir' 탭이 활성화됨
  // 경력 데이터를 합산해서 총 경력을 자동 계산
  const totalCareerText = useMemo(() => getTotalCareerText(careers), []);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab); // 클릭한 탭으로 상태 업데이트
  };

  const runIntroProgram = () => {
    if (
      contact.SELF_INTRO.SIZE &&
      !programArr.some((prog) => prog.program === contact.SELF_INTRO.ID)
    ) {
      setProgramArr([
        ...programArr,
        {
          program: contact.SELF_INTRO.ID,
          name: contact.SELF_INTRO.NAME,
          initialSize: {
            width: contact.SELF_INTRO.SIZE.width,
            height: contact.SELF_INTRO.SIZE.height,
          },
        },
      ]);
    }

    setActiveProgram(contact.SELF_INTRO.ID);
  };

  const runProjectsProgram = () => {
    if (!programArr.some((prog) => prog.program === programs.PROJECTS.ID)) {
      setProgramArr([
        ...programArr,
        {
          program: programs.PROJECTS.ID,
          name: programs.PROJECTS.NAME,
          initialSize: {
            width: programs.PROJECTS.SIZE.width,
            height: programs.PROJECTS.SIZE.height,
          },
        },
      ]);
    }

    setActiveProgram(programs.PROJECTS.ID);
  };

  const runWantedProgram = () => {
    window.open(contact.WANTED.LINK, "_blank");
  };

  const handleClose = () => {
    setProgramArr((prev) => {
      const updatedProgramArr = prev.filter(
        (prog) => prog.program !== "profile"
      );
      return updatedProgramArr;
    });
  };

  return (
    <>
      <menu role="tablist">
        <li
          role="tab"
          aria-selected={activeTab === "Girgir"}
          onClick={() => handleTabClick("Girgir")}
        >
          <button>Girgir</button>
        </li>
        <li
          role="tab"
          aria-selected={activeTab === "Skills"}
          onClick={() => handleTabClick("Skills")}
        >
          <button>Skills</button>
        </li>
        <li
          role="tab"
          aria-selected={activeTab === "Education"}
          onClick={() => handleTabClick("Education")}
        >
          <button>Education</button>
        </li>
        <li
          role="tab"
          aria-selected={activeTab === "Experience"}
          onClick={() => handleTabClick("Experience")}
        >
          <button>Experience</button>
        </li>
      </menu>
      <div className="profileContainer" role="tabpanel">
        <section
          className={`profileContentsWrap profileTab ${
            activeTab === "Girgir" ? "active" : ""
          }`}
        >
          <div className="imageWrap">
            <h3 className="secTit">Girgir</h3>
            <img src={selfImage} alt="profile image" />
          </div>
          <div className="specList">
            <ul>
              <li>Name : 박정길</li>
              <li>Birthday : 1991. 01. 05</li>
              <li>
                Phone : <a href="tel:">010-4468-7412</a>
              </li>
              <li>
                Email : <a href="mailto:">wjdrlf5986@naver.com</a>
              </li>
              <li>Location : 서울, 은평구 통일로</li>
              <li>MBTI : INFJ</li>
            </ul>
          </div>
        </section>
        <section
          className={`profileContentsWrap ${
            activeTab === "Skills" ? "active" : ""
          }`}
        >
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
              <dd className="zustand">Zustand</dd>
              <dd className="reactQuery">React Query</dd>
              <dd className="node">Node.js</dd>
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
              <dd className="githubActions">Github Actions</dd>
              <dd className="gitlab">Gitlab</dd>
              <dd className="slack">Slack</dd>
              <dd className="notion">Notion</dd>
              <dd className="jira">Jira</dd>
              <dd className="confluence">Confluence</dd>
              <dd className="aem">Aem</dd>
            </dl>
          </div>
        </section>
        <section
          className={`profileContentsWrap educationTab ${
            activeTab === "Education" ? "active" : ""
          }`}
        >
          <div className="eduImg">
            <img src={eduImage} alt="" />
          </div>
          <h3 className="secTit">Education</h3>
          <ul>
            <li>고려사이버대학교 디자인 공학과 (2021~2025 / 졸업)</li>
            <li>한남대학고 회화과 (2010 / 중퇴) </li>
            <li>인하대학교 부속 고등학교 (2009 / 졸업) </li>
          </ul>
        </section>
        <section
          className={`profileContentsWrap ${
            activeTab === "Experience" ? "active" : ""
          }`}
        >
          <h3 className="secTit">Experience (총 경력 {totalCareerText})</h3>
          <ul className="experienceWrap">
            {careers.map((career) => (
              <li key={`${career.COMPANY}-${career.START}`}>
                <strong>
                  {career.COMPANY} ({getCareerPeriodText(career)})
                </strong>
                <span>{career.DESCRIPTION}</span>
              </li>
            ))}
          </ul>
        </section>
        <div className="resumeBtnWrap">
          <button className="introBtn" onClick={runIntroProgram}>
            자기소개 보기
            <strong>
              (<span>I</span>ntroduction)
            </strong>
          </button>
          <button className="projectBtn" onClick={runProjectsProgram}>
            프로젝트 보기
            <strong>
              (<span>P</span>rojects)
            </strong>
          </button>
          <button className="wantedBtn" onClick={runWantedProgram}>
            원티드 이력서 보기
            <strong>
              (<span>W</span>anted)
            </strong>
          </button>
        </div>
      </div>
      <div className="closeBtnWrap">
        <button className="closeBtn" onClick={handleClose}>
          닫기
        </button>
      </div>
    </>
  );
}

export default Profile;
