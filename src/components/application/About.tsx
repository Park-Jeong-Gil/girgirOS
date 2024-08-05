import { useEffect } from "react";

interface AboutProps {

}

function About({}: AboutProps) {
  useEffect(()=>{

  },[])

  return (
    <div className="aboutContainer">
      <div className="containerInner">
        <div className="imageBox">
          <span className="profile"></span>
        </div>
        <div className="description">
          <div className="textDiv">
            안녕하세요! <br />
            코딩을 통해 그래픽 작업을 하는 개발자 <br />
            <strong>Code grapher</strong> 박정길 입니다. <br />
          </div>

          <div className="textDiv">
            원래 제 전공은 회화, <br />
            그림을 그리는 순수 미술 이였습니다. <br />
            지금은 붓 대신 키보드를 잡고 있지만 <br />
            그저 표현의 도구만 바뀌었을 뿐 <br />
            사람들에게 영감을 주는 무언갈 만드는 건 <br />
            여전히 멋진 일 입니다.
          </div>

          <div className="textDiv">
            평범한 개발자들과는 다른 출발점에 섰던 저는 <br />
            직접 에셋을 공수 할 수 있는 각종 디자인 툴 스킬, <br />
            ux를 기반으로 구현 가능한 아이디어와 영감을 가진 <br />
            프론트 엔드 개발자가 되었습니다. <br />
            덕분에 동료 개발자들 뿐 아니라 <br />
            기획자, 디자이너와도 깊은 이해를 가지고 소통하며 <br />
            항상 최선의 결과를 만들어 왔다고 자부 합니다.
          </div>

          <div className="textDiv">
            이렇듯 남다른 스킬 포인트 투자로 인해 <br />
            아쉽게도 프론트 엔드 스킬이 얕다는 약점도 있습니다. <br />
            하지만 그만큼 개발 스터디에 관심을 가지며, <br />
            성장하는 즐거움을 느끼는걸 좋아 합니다.
          </div>

          <div className="textDiv">
            지금 이 포폴을 보시다 싶이 <br />
            저는 도전적인 길을 가는걸 좋아 합니다. <br />
            저 처럼 웹의 한계를 시험하는 <br />
            멋진 작업을 좋아하신다면<br />
            많은 관심 표현 부탁 드립니다.
          </div>

          <div className="textDiv">
            감사합니다. ^_^
          </div>



          {/* <div className="textDiv">
            저는 레트로 감성을 사랑하는 프론트엔드 개발자 입니다. <br />
            지금 이 포폴을 보시다 싶이 저는 평범함과 다른 길을 가는걸 좋아 합니다. <br />
            픽셀 게임과 숨겨진 이스터 에그! 
            그리고 그런 특별한 무언가를 만드는걸 좋아 합니다.
            덕분에 어렸을때 부터 그림그리는걸 좋아했고 미술 전공까지 했었습니다.
          </div> */}
          
        </div>
      </div>
    </div>
  )
}

export default About;