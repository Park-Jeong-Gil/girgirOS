// 내가 디테일하게 뭘 담당했고 어떤 문제가 있었고 어떻게 풀어냈고 등등 개발적인 내용은 별로 없어서

const projects = {
  KG: {
    ID:'kg',
    DATE:'2024.04',
    TITLE: 'KG Mobility',
    SRC: 'https://girgir.synology.me/dev/KG-Mobility/',
    DESCRIPTION: `
      <header class="siteHeader">
        <h3>프로젝트 : <strong>KG Mobolity 3D 상세 페이지</strong></h3>
        <p>
          작업 기간 : 
          <time datetime="2024-03">2024년 3월</time> ~ 
          <time datetime="2024-04">2024년 4월</time>
        </p>
        <p class="skill">사용기술 : HTML, CSS, Javascript, Vite, WebGL, three.js, blender</p>
      </header>
      <div class="siteDesc">
        <p><strong>KG Mobolity</strong> 홈페이지의 리뉴얼 프로젝트를 위해 개발하게 된 제안용(PC only) 웹페이지 입니다. </p>
        <p>컨셉은 <strong>'풀 3D로 차량을 보면서 심리스하게 정보를 전달하는 상세 페이지.'</strong> 이며, 페이지 내에서 사용자가 실시간으로 차체의 색상을 바꾸거나 휠 컬러를 바꾸는 경험을 할 수 있는 것이 특징 입니다.</p>
        <p>3D로 차량이 등장하는 모든 부분을 담당하여 개발 했습니다. 프로젝트 제안용이라 작업 할 수 있는 기간이 짧았고, 디자인에서는 3D로 어떻게 표현이 되는지 알 수 없었기 때문에 제가 실제 코란도 페이지의 내용을 토대로 직접 카메라 동선과 스토리보드를 만들어 공유하고, 디자인을 작업하는 동안 개발을 병행하여 작업 기간을 최대한 단축하는 방향으로 빠듯하게 작업을 진행 했습니다.</p>
        <p>블렌더를 통해 카메라 동선을 만들어서 스크롤 애니메이션을 적용하고, three.js를 통해 차량 모델을 컨트롤 했습니다. </p>
      </div>
    `,
  },
  WINE: {
    ID:'weeklywine',
    DATE:'2023.10',
    TITLE: 'Weekly wine',
    SRC: 'https://www.weeklywine.co.kr/',
    DESCRIPTION: `
      <header class="siteHeader">
        <h3>프로젝트 : <strong>Weekly wine 리뉴얼 프로젝트</strong></h3>
        <p>
          작업 기간 : 
          <time datetime="2023-07">2023년 7월</time> ~ 
          <time datetime="2023-10">2023년 10월</time>
        </p>
        <p class="skill">사용기술 : HTML, CSS, Javascript</p>
      </header>
      <div class="siteDesc">
        <p>
          독일 프랑크푸르트에서 와인을 배송해주는 <strong>Weekly Wine</strong> 사이트를 리뉴얼 작업 했습니다. 
          기존에 카페24를 사용중 이였기 때문에 카페24의 환경에 맞춰 인터렉션과 다양한 기능들을 구현해야 했습니다.
        </p>
        <p>
          저는 메인 페이지와 게시판 페이지들을 맡았으며, 카페24 환경과 제품 특성상 표현 방법이 제한적이라, 인터렉션을 구상 하는데에 어려움이 있었으나 
          관리자가 등록하는 제품의 데이터에 따라 메인 페이지에 다양한 리스트를 표현했고, 리스트의 형태 또한 옵션으로 만들어 자유롭게 추가하고 뺄 수 있게 고려하여 작업 했습니다.
        </p>
        <p>특히 페이지 중간 <strong>조세핀 컬렉션</strong>에서 스크롤에 따라 로고에서 와인잔으로 변화하는 인터렉션으로 리스트가 나열된 정적인 페이지에 최대한 포인트를 주려고 노력 했습니다.</p>
      </div>
    `,
  },
  EASTPOLE: {
    ID:'eastpole',
    DATE:'2023.07',
    TITLE: '직방 모바일 모델하우스 (롯데캐슬 이스트폴)',
    SRC: 'https://girgir.synology.me/dev/lotte-eastpole/zigbang/',
    DESCRIPTION: `
      <header class="siteHeader">
        <h3>프로젝트 : <strong>직방 모바일 모델하우스 개발 (롯데 이스트폴) 1차</strong></h3>
        <p>
          작업 기간 : 
          <time datetime="2023-05">2023년 5월</time> ~ 
          <time datetime="2023-07">2023년 7월</time>
        </p>
        <p class="skill">사용기술 : HTML, CSS, Javascript, Vite, ejs</p>
      </header>
      <div class="siteDesc">
        <p>직방 어플내에서 WebView로 서비스 했던 <strong>'롯데캐슬 이스트폴'의 모바일 모델하우스</strong> 페이지 입니다. </p>
        <p>아파트 분양 정보의 특성상 내용이 많고 복잡하기 때문에 정보 전달을 쉽고 간결하게 하기 위한 인터렉션을 고민하며 제작 했습니다. </p>
        <p>이전 천안 유보라 프로젝트때 보다 컨텐츠의 규모가 컸기 때문에 (1-2차 나누어 오픈) 인터렉션으로 인한 퍼포먼스나 페이지 최적화를 위한 작업을 더 신중하게 했습니다.</p>
        <p>이미지 최적화는 'intersection observer'를 활용하여 모두 화면에 노출하지 않을땐 로드 되지 않도록 레이지 로드 처리를 했고, webp 확장자로 이미지 변환 및 압축 모듈을 사용하여 에셋 용량 또한 절반 이하로 줄였습니다. svg 아이콘도 dataimage로 압축하여 반영 했습니다.</p>
        <p><a href="https://s.zigbang.com/campaign/97/zigbang/index.html" target="_blank">2차 컨텐츠</a>에선 내용이 정말 방대한 pdf 문서와 타입별 평면도를 노출 시켜야 하는 이슈가 있었는데, 직접 스크립트로 이미지 확대, 축소, 드래그로 이동 기능을 구현하여 이슈를 해결 했습니다. </p>
        <p>개발 작업과 동시에 PL역할로 클라이언트와 프리렌서 디자이너의 소통을 원활하게 이끌며 프로젝트가 기간내에 무사히 완료 될 수 있게 리딩 했습니다.</p>
      </div>
    `
  },
  SPACEHUB: {
    ID:'spacehub',
    DATE:'2023.05',
    TITLE: 'Hanwha Spacehub',
    SRC: 'https://www.hanwhaspacehub.com/media-room/',
    DESCRIPTION: `
      <header class="siteHeader">
        <h3>프로젝트 : <strong>한화 스페이스 허브</strong></h3>
        <p>
          작업 기간 : 
          <time datetime="2023-03">2023년 3월</time> ~ 
          <time datetime="2023-05">2023년 5월</time>
        </p>
        <p class="skill">사용기술 : HTML, CSS, Javascript, Vite, ejs</p>
      </header>
      <div class="siteDesc">
        <p>한화 그룹의<strong>스페이스 허브</strong> 웹사이트 입니다.</p>
        <p>인터렉션이 많이 들어가는 것으로 기획되어 많은 부분을 참여하려 했으나, 이스트폴 1차 오픈 시기와 작업 기간이 겹치는 바람에 비교적 비중이 적은 게시판 리스트 페이지를 담당하게 되었습니다.</p>
        <p>하지만 단순한 게시판 형태여도 페이지 전체 컨셉에 맞춰 생동감을 최대한 주기 위해 고민 했으며, 'intersection observer'를 활용하여 스크롤에 따라 각 썸네일 영역의 속도를 다르게 주고 마우스 호버 위치에 따라 3D 처럼 기울이며 움직이도록 작업 했습니다.</p>
        <p>게시판 작업은 vite ejs와 json파일을 활용하여 벡엔드 작업이 붙기 전에도 최대한 데이터를 통해 게시글과 상세 페이지가 생성 되도록 고려하여 작업 했습니다.</p>
      </div>
    `,
  },
  UBORA: {
    ID:'ubora',
    DATE:'2023.04',
    TITLE: '직방 모바일 모델하우스 (천안 유보라)',
    SRC: 'https://girgir.synology.me/dev/ubora-cheonan/zigbang/',
    DESCRIPTION: `
      <header class="siteHeader">
        <h3>프로젝트 : <strong>직방 모바일 모델하우스 개발 (천안 유보라)</strong></h3>
        <p>
          작업 기간 : 
          <time datetime="2023-03">2023년 3월</time> ~ 
          <time datetime="2023-04">2023년 4월</time>
        </p>
        <p class="skill">사용기술 : HTML, CSS, Javascript, Vite, ejs</p>
      </header>
      <div class="siteDesc">
        <p>직방 어플내에서 WebView로 서비스 했던 <strong>'천안 유보라'의 모바일 모델하우스 </strong> 페이지 입니다. </p>
        <p>직방과 모바일 모델하우스를 처음 진행하는 프로젝트의 PL을 맡았기 때문에 기존 서비스 중이던 기능들(inquery, pinpoint 등)을 파악해서 구현하는 것도 어려움이 있었습니다. 때문에 직방 앱 개발자들과 소통 채널을 만들어 데이터가 정상적으로 반영 될 수 있게 커뮤니케이션을 하며 문제를 해결 했습니다.</p>
        <p>그리고 Vite를 처음으로 프로젝트에 도입하여 환경 셋팅과 공통 부분을 작업해서 다른 작업자들에게 가이드를 공유하며 진행 했습니다.</p>
        <p>처음 진행하는 만큼 소통부터 작업물의 퀄리티 까지 모두 챙기기 위해 유달리 신경을 많이 썼던 프로젝트 였습니다.</p>
      </div>
    `,
  },
  SEMICONDUCTOR: {
    ID:'semiconductor',
    DATE:'2023.02',
    TITLE: 'samsung semiconductor 삼성 반도체 ',
    SRC: 'https://semiconductor.samsung.com/image-sensor/mobile-image-sensor/isocell-hp2/#',
    DESCRIPTION: `
      <header class="siteHeader">
        <h3>프로젝트 : <strong>삼성 반도체 다국어 웹사이트 운영 (2022 2H ~ 2023 1H)</strong></h3>
        <p>
          작업 기간 : 
          <time datetime="2022-09">2022년 9월</time> ~ 
          <time datetime="2023-02">2023년 2월</time>
        </p>
        <p class="skill">사용기술 : HTML, CSS, Javascript, AEM</p>
      </header>
      <div class="siteDesc">
        <p>처음 삼성 반도체의 운영 프로젝트를 맡은 개발팀의 PL로 고객사와 소통 및 팀원들의 업무 배분을 담당 했습니다.</p>
        <p>글로벌 사이트인 만큼 규모가 굉장히 크고 JIRA, Slack 등 개발 업무 외에 이미 운영 중인 환경에 대해 파악해야 하는 범위가 넓었지만 최대한 먼저 파악해서 팀원들에게 가이드를 만들어 공유 했습니다. 
          특히 AEM(Adobe Experience Manager) 이라는 CMS 환경이 특징이였으며, 총 6개국어의 삼성 반도체 웹페이지를 운영, 유지 보수 및 신규 페이지 개발을 진행 했습니다.</p>
        <p>프로젝트를 담당하는 동안 많은 신규 페이지를 오픈 했지만 그중에서 가장 고려사항이 많았던 <strong>Isocell-HP2</strong> 페이지를 링크로 걸었습니다.</p><br> 
        <p><strong>Isocell-HP2</strong> 페이지는 처음 로드하는 순간 페이지 로드 속도를 체크해서 모션, 스태틱 페이지를 한 페이지 내에서 구분하여 컨텐츠를 제공 합니다.
          그리고 모션 페이지 일때 각 섹션을 스크롤로 제어하는 요건들이 까다로웠기 때문에 구현해야 하는 고려사항이 아주 많았습니다.
        </p>
        <p>  
          1. 스크롤이 해당 위치에 왔을때 배경 영상 재생<br> 
          2. 지정된 영상의 시간이 될 때 까지 스크롤 제어X<br> 
          3. 재생이 끝나면 다음 스크롤 가능<br> 
          4. 하지만 역방향 스크롤은 제어 가능<br> 
          5. 모달 팝업 창이 열리면 지정된 스크롤 위치로 이동
        </p>
        <p>  
          이렇게 순수 바닐라 자바스크립트로 각 요건에 맞는 상태를 계속 체크하고 업데이트 하면서 요건들을 충족하여 작업 했습니다.
        </p>
      </div>
    `,
  },
  GALAXY_Z_FLIP4: {
    ID:'z-flip4',
    DATE:'2022.08',
    TITLE: 'Galaxy Z Flip4',
    SRC: 'https://girgir.synology.me/global/galaxy/galaxy-z-flip4/',
    DESCRIPTION: `
      <header class="siteHeader">
        <h3>프로젝트 : <strong>Galaxy Z Flip4 Unpacked</strong></h3>
        <p>
          작업 기간 : 
          <time datetime="2022-06">2022년 6월</time> ~ 
          <time datetime="2022-08">2022년 8월</time>
        </p>
        <p class="skill">사용기술 : HTML, CSS, Javascript, Gulp, ejs</p>
      </header>
      <div class="siteDesc">
        <p><strong>Galaxy Z Flip4</strong>모델의 제품 페이지 입니다.</p>
        <p>갤럭시 신제품 페이지를 작업 할 땐 고려해야 할 사항이 많습니다. 짧은 작업 기간과 퍼포먼스 최적화 작업, 전세계를 대상으로 하는 웹페이지인 만큼 엄격한 크로스 브라우징과 웹 접근성 준수 등 일반 웹페이지 개발보다 각별히 신경써야 하는 부분들이 많았습니다.</p>
        <p>그렇지만 이만큼 인터렉션을 유려하게 할 수 있는 기회 또한 흔치 않기 때문에 매번 설레는 마음으로 갤럭시 프로젝트에 참여 했습니다.</p>
        <p>모든 컨텐츠에 모션을 신경 써서 작업 했지만, VIDEO CALL 영역에서 스크롤 애니메이션으로 각 요소의 포지션을 계산하는 식을 직접 만들고, 퍼포먼스가 하락하지 않도록 각별히 주의하여 작업 했습니다.</p>
        <p class="blind">만약 보안 이슈가 발생한다면 페이지를 제거 하겠습니다.</p>
      </div>
    `,
  },
  FAVE: {
    ID:'fave',
    DATE:'2022.06',
    TITLE: 'FAVE 3D 웹사이트',
    SRC: 'https://fave.kr/',
    DESCRIPTION: `
      <header class="siteHeader">
        <h3>프로젝트 : <strong>fave 홈페이지 개발</strong></h3>
        <p>
          작업 기간 : 
          <time datetime="2022-03">2022년 3월</time> ~ 
          <time datetime="2022-06">2022년 6월</time>
        </p>
        <p class="skill">사용기술 : HTML, CSS, Javascript, Gulp, ejs</p>
      </header>
      <div class="siteDesc">
        <p>인터렉션을 전문적으로 연구하고 개발하는 웹에이전시 <strong>fave</strong> 홈페이지 입니다.</p>
        <p>기획자, 디자이너 없이 순수 개발자들만 모여서 진행했던 프로젝트 입니다. 때문에 여러 레퍼런스를 모아 아이디어 회의를 하며 페이지의 스토리텔링을 구상하고, 풀 3D 웹사이트로 만들기 위해 모델링 소스를 작업하며 직접 디자인을 하는 등 많은 노력이 필요 했습니다.</p>
        <p>이 웹페이지는 여러번의 반전을 보여주는 컨셉으로 제작 하였으며, 2D 페이지 에서 3D 공간으로, 사무실 공간에서 외부 전경으로, 건물에서 지도로 점점 확장하는 모습을 담았습니다. </p>
        <p>저는 프로젝트 PL로서 공통 부분을 맡아 개발하고 팀원들에게 공유하며 업무 배분과 디자이너의 공백을 채우기 위한 디자인 작업도 함께 진행 했습니다.</p>
      </div>
    `,
  },
  GALAXY_S22: {
    ID:'s22-ultra',
    DATE:'2022.02',
    TITLE: 'Galaxy S22 Ultra',
    SRC: 'https://girgir.synology.me/global/galaxy/galaxy-s22-ultra/',
    DESCRIPTION: `
      <header class="siteHeader">
        <h3>프로젝트 : <strong>Galaxy S22 Series Unpacked</strong></h3>
        <p>
          작업 기간 : 
          <time datetime="2021-12">2021년 12월</time> ~ 
          <time datetime="2022-02">2022년 2월</time>
        </p>
        <p class="skill">사용기술 : HTML, CSS, Javascript, Gulp, ejs</p>
      </header>
      <div class="siteDesc">
        <p><strong>Galaxy S22 Ultra</strong> 모델의 제품 페이지 입니다.</p>
        <p>신제품의 다양한 기능을 유려하게 인터렉션으로 표현함과 동시에 전세계를 대상으로 하는 웹페이지인 만큼 엄격한 크로스 브라우징과 웹 접근성을 준수하여 작업 했습니다.</p>
        <p>특히 PRODUCTIVITY 영역에 S pen 기능을 스크롤 애니메이션으로 보여주는 부분은 많은 요소를 스크롤 값에 따라 스크립트로 계산하여 애니메이션을 줘야 했기 때문에 페이지의 퍼포먼스가 떨어지지 않도록 각별히 주의하여 작업 했습니다.</p>
        <p>이후 언팩 행사 날에는 큐 사인에 맞춰 직접 페이지 라이브를 진행 했습니다.</p>
        <p class="blind">만약 보안 이슈가 발생한다면 페이지를 제거 하겠습니다.</p>
      </div>
    `,
  },
  GOBLINS: {
    ID:'goblins',
    DATE:'2022.02',
    TITLE: 'Raving Goblins',
    SRC: 'https://girgir.synology.me/dev/RV/',
    DESCRIPTION: `
      <header class="siteHeader">
        <h3>프로젝트 : <strong>Raving Goblins 홈페이지</strong></h3>
        <p>
          작업 기간 : 
          <time datetime="2021-12">2021년 12월</time> ~ 
          <time datetime="2022-02">2022년 2월</time>
        </p>
        <p class="skill">사용기술 : HTML, CSS, Javascript, React</p>
      </header>
      <div class="siteDesc">
        <p><strong>Raving Goblins</strong> NFT 발행을 위해 개발된 웹페이지 입니다. </p>
        <p>리액트를 기반으로 프론트 엔드를 작업을 담당 했으며, 특히 css 애니메이션을 적극 사용하여 픽셀 아트 컨셉을 극대화 했습니다. MINT 영역은 가챠 머신을 통해 실제 opensea 지갑에 추가가 될 수 있도록 벡엔드와 연동이 되어있습니다. (현재는 작동x)</p>
        <p>MINT 버튼을 누름과 동시에 각 단계별로 애니메이션과 음원 소스가 게임처럼 재생 될 수 있도록 상태를 업데이트 해가면서 작업 했습니다.</p>
      </div>
    `,
  },
} as const;

export { projects };