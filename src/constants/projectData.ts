const projects = {
  KG: {
    ID:'kg',
    DATE:'2024.04',
    TITLE: 'KG Mobility',
    SRC: 'https://girgir.synology.me/dev/KG-Mobility/',
    DESCRIPTION: `
      <p class="descDiv"><strong>KG Mobolity</strong> 홈페이지의 리뉴얼 프로젝트를 위해 개발하게 된 제안용(PC only) 웹페이지 입니다. </p>
      <p class="descDiv">컨셉은 <strong>'풀 3D로 차량을 보면서 심리스하게 정보를 전달하는 상세 페이지.'</strong> 이며, 페이지 내에서 사용자가 실시간으로 차체의 색상을 바꾸거나 휠 컬러를 바꾸는 경험을 할 수 있는 것이 특징 입니다.</p>
      <p class="descDiv">블렌더를 통해 카메라 동선을 만들어서 스크롤 애니메이션을 적용하고, three.js를 통해 차량 모델을 컨트롤 했습니다. </p>
    `,
  },
  WINE: {
    ID:'weeklywine',
    DATE:'2023.10',
    TITLE: 'Weekly wine',
    SRC: 'https://www.weeklywine.co.kr/',
    DESCRIPTION: `
      <p class="descDiv">
        독일 프랑크푸르트에서 와인을 배송해주는 <strong>Weekly Wine</strong> 사이트를 리뉴얼 작업 했습니다. 
        기존 카페24를 사용중 이였기 때문에 카페24의 환경에 맞춰 인터렉션과 다양한 기능들을 구현해야 했습니다.
      </p>
      <p class="descDiv">
        카페24 환경과 제품 특성상 표현 방법이 제한적이라, 인터렉션을 구상 하는데에 어려움이 있었으나 
        관리자가 등록하는 제품의 데이터에 따라 메인 페이지에 다양한 리스트를 표현했고, 
        특히 페이지 중간 <strong>조세핀 컬렉션</strong>에서 스크롤에 따라 로고에서 와인잔으로 변화하는 모션으로 포인트를 주었습니다.
      </p>
    `,
  },
  EASTPOLE: {
    ID:'eastpole',
    DATE:'2023.07',
    TITLE: '직방 모바일 모델하우스 (롯데캐슬 이스트폴)',
    SRC: 'https://girgir.synology.me/dev/lotte-eastpole/zigbang/',
    DESCRIPTION: `
      <p class="descDiv"><strong>직방</strong> 어플내에서 서비스 했던 '롯데캐슬 이스트폴'의 모바일 모델하우스 페이지 입니다. </p>
      <p class="descDiv">아파트 분양 정보의 특성상 내용이 많고 복잡하기 때문에 정보 전달을 쉽고 간결하기 위한 인터렉션을 고민하며 제작 했습니다. </p>
      <p class="descDiv">이전 천안 유보라 프로젝트때 보다 컨텐츠의 규모가 컸기 때문에 인터렉션으로 인한 퍼포먼스나 페이지 최적화를 위한 작업을 더 신중하게 했습니다. </p>
      <p class="descDiv">페이지 작업과 동시에 PL 역할로 클라이언트와 프리렌서 디자이너의 소통을 원활하게 이끌며 프로젝트가 기간내에 무사히 완료 될 수 있게 리딩 했습니다. </p>
      <p class="descDiv"><a href="https://s.zigbang.com/campaign/97/zigbang/index.html" target="_blank">2차 오픈 페이지</a>는 여기서 확인 가능 합니다. </p>
    `
  },
  SPACEHUB: {
    ID:'spacehub',
    DATE:'2023.05',
    TITLE: 'Hanwha Spacehub',
    SRC: 'https://www.hanwhaspacehub.com/media-room/',
    DESCRIPTION: `
      <p class="descDiv">한화 그룹의<strong>스페이스 허브</strong> 웹사이트 입니다.</p>
      <p class="descDiv">인터렉션이 많이 들어가는 것으로 기획되어 많은 부분을 참여하려 했으나, 이스트폴 1차 오픈 시기와 작업 기간이 겹치는 바람에 비교적 비중이 적은 게시판 리스트 페이지를 담당하게 되었습니다.</p>
      <p class="descDiv">하지만 단순한 게시판 형태여도 페이지 전체 컨셉에 맞춰 생동감을 최대한 주기 위해 고민 했으며, 'intersection observer'를 활용하여 스크롤에 따라 각 게시글의 속도를 다르게 주고 썸네일 이미지도 마우스 호버 위치에 따라 3D 처럼 움직이게 작업 했습니다.</p>
      <p class="descDiv">ejs와 json파일을 통해 벡엔드 작업이 붙기 전에도 최대한 데이터를 통해 게시글과 상세 페이지가 생성 되도록 고려하여 작업 했습니다.</p>
    `,
  },
  UBORA: {
    ID:'ubora',
    DATE:'2023.04',
    TITLE: '직방 모바일 모델하우스 (천안 유보라)',
    SRC: 'https://girgir.synology.me/dev/ubora-cheonan/zigbang/',
    DESCRIPTION: `
      <p class="descDiv"><strong>직방</strong> 어플내에서 서비스 했던 '천안 유보라'의 모바일 모델하우스 페이지 입니다. </p>
      <p class="descDiv">아파트 분양 정보의 특성상 내용이 많고 복잡하기 때문에 정보 전달을 쉽고 간결하기 위한 인터렉션을 고민하며 작업 했습니다.</p>
      <p class="descDiv">페이지 작업과 동시에 PL 역할로 클라이언트와 프리렌서 디자이너의 소통을 원활하게 이끌며 프로젝트가 기간내에 무사히 완료 될 수 있게 리딩 했습니다. </p>
    `,
  },
  SEMICONDUCTOR: {
    ID:'semiconductor',
    DATE:'2023.02',
    TITLE: 'samsung semiconductor 삼성 반도체 ',
    SRC: 'https://semiconductor.samsung.com/image-sensor/mobile-image-sensor/isocell-hp2/#',
    DESCRIPTION: `
      <p class="descDiv">삼성 반도체의 운영 개발팀의 PL로 고객사와 소통 및 팀원들의 업무 배분을 담당 했습니다. </p>
      <p class="descDiv">갤럭시 신제품 페이지와 마찬가지로 엄격한 크로스 브라우징과 웹접근성을 준수하며 작업 했습니다. AEM(Adobe Experience Manager) 이라는 CMS 환경에서 작업 했으며, 6개국의 다국어로 운영, 유지 보수 및 개발을 진행 했습니다.</p>
      <p class="descDiv">프로젝트를 담당하는 동안 많은 신규 페이지를 오픈 했지만 그중에 한 페이지를 링크로 걸었습니다.</p>
    `,
  },
  GALAXY_Z_FLIP4: {
    ID:'z-flip4',
    DATE:'2022.08',
    TITLE: 'Galaxy Z Flip4',
    SRC: 'https://girgir.synology.me/global/galaxy/galaxy-z-flip4/',
    DESCRIPTION: `
      <p class="descDiv"><strong>Galaxy Z Flip4</strong>모델의 제품 페이지 입니다.</p>
      <p class="descDiv">갤럭시 신제품 페이지를 작업 할 땐 고려해야 할 사항이 많습니다. 짧은 작업 기간과 퍼포먼스 최적화 작업, 전세계를 대상으로 하는 웹페이지인 만큼 엄격한 크로스 브라우징과 웹 접근성 준수 등 일반 웹페이지 개발보다 각별히 신경써야 하는 부분들이 많았습니다.</p>
      <p class="descDiv">그렇지만 이만큼 인터렉션을 유려하게 할 수 있는 기회 또한 흔치 않기 때문에 매번 설레는 마음으로 프로젝트에 참여 했습니다.</p>
      <p class="descDiv">모든 컨텐츠에 모션을 신경 써서 작업 했지만, VIDEO CALL 영역에서 스크롤 애니메이션으로 퍼포먼스가 하락하지 않도록 각별히 주의하여 작업 했습니다.</p>
    `,
  },
  FAVE: {
    ID:'fave',
    DATE:'2022.06',
    TITLE: 'FAVE 3D 웹사이트',
    SRC: 'https://fave.kr/',
    DESCRIPTION: `
      <p class="descDiv">인터렉션을 전문적으로 연구하고 개발하는 웹에이전시 <strong>fave</strong> 홈페이지 입니다.</p>
      <p class="descDiv">기획자, 디자이너 없이 순수 개발자들만 모여서 진행했던 프로젝트 입니다. 때문에 아이디어 회의를 하며 페이지의 스토리텔링을 구상하고, 풀 3D 웹사이트로 만들기 위해 모델링 소스를 작업하며 직접 디자인을 하는 등 많은 노력이 필요 했습니다.</p>
      <p class="descDiv">이 웹페이지는 여러번의 반전을 보여주는 컨셉으로 제작 하였으며, 2D 페이지 에서 3D 공간으로, 사무실 공간에서 외부 전경으로, 건물에서 지도로 점점 확장하는 모습을 담았습니다. </p>
      <p class="descDiv">프로젝트 PL로서 팀원들 업무 배분과 디자인, 개발 작업도 진행 했습니다.</p>
    `,
  },
  GALAXY_S22: {
    ID:'s22-ultra',
    DATE:'2022.02',
    TITLE: 'Galaxy S22 Ultra',
    SRC: 'https://girgir.synology.me/global/galaxy/galaxy-s22-ultra/',
    DESCRIPTION: `
      <p class="descDiv"><strong>Galaxy S22 Ultra</strong> 모델의 제품 페이지 입니다.</p>
      <p class="descDiv">신제품의 다양한 기능을 유려하게 인터렉션으로 표현함과 동시에 전세계를 대상으로 하는 웹페이지인 만큼 엄격한 크로스 브라우징과 웹 접근성을 준수하여 작업 했습니다.</p>
      <p class="descDiv">PRODUCTIVITY 영역에 S pen 기능을 스크롤 애니메이션으로 보여주는 부분은 많은 요소를 스크롤 값에 따라 애니메이션을 줘야 했기 때문에 페이지의 퍼포먼스가 떨어지지 않도록 각별히 주의하여 작업 했습니다.</p>
      <p class="descDiv">이후 언팩 행사 날에는 큐 사인에 맞춰 직접 페이지 라이브를 진행 했습니다.</p>
    `,
  },
  GOBLINS: {
    ID:'goblins',
    DATE:'2022.02',
    TITLE: 'Raving Goblins',
    SRC: 'https://girgir.synology.me/dev/RV/',
    DESCRIPTION: `
      <p class="descDiv"><strong>Raving Goblins</strong> NFT 발행을 위해 개발된 웹페이지 입니다. </p>
      <p class="descDiv">리액트 기반에 페이지 전반적으로 css 애니메이션을 사용하여 픽셀 아트 컨셉을 극대화 했습니다. MINT 영역은 가챠 머신을 통해 실제 opensea 지갑에 추가가 될 수 있도록 벡엔드와 연동이 되어있습니다. (현재는 작동x)</p>
      <p class="descDiv">MINT버튼을 누름과 동시에 각 단계별로 애니메이션과 음원 소스가 게임처럼 진행 될 수 있도록 상태를 업데이트 해가면서 작업 했습니다. </p>
    `,
  },
} as const;

export { projects };