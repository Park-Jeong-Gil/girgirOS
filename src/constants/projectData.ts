const projects = {
  KG: {
    ID:'kg',
    DATE:'2024.04',
    TITLE: 'KG Mobility',
    SRC: 'https://girgir.synology.me/dev/KG-Mobility/',
    DESCRIPTION: `
      <p class="descDiv">
        토레스EV 차량 출시에 앞서 <strong>KG Mobolity</strong> 홈페이지의 리뉴얼 프로젝트를 위해 제안용으로 개발하게 된 웹페이지 입니다. 
      </p>
      <p class="descDiv">
        컨셉은 <strong>'풀 3D로 차량을 보면서 심리스하게 정보를 전달하는 상세 페이지.'</strong> 이며,
        페이지 내에서 사용자가 실시간으로 차체의 색상을 바꾸거나 휠 컬러를 바꾸는 경험을 할 수 있는 것이 특징 입니다.
      </p>
      <p class="descDiv">
        블렌더를 통해 카메라 동선을 만들어서 스크롤 애니메이션을 적용하고, three.js를 통해 차량 모델을 컨트롤 했습니다.
      </p>
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
        특히 페이지 중간 조세핀 컬렉션에서 스크롤에 따라 로고에서 와인잔으로 변화하는 부분에서 포인트를 주었습니다.
      </p>
    `,
  },
  EASTPOLE: {
    ID:'eastpole',
    DATE:'2023.07',
    TITLE: '직방 모바일 모델하우스 (롯데 이스트폴)',
    SRC: 'https://girgir.synology.me/dev/lotte-eastpole/zigbang/',
    DESCRIPTION: `
      <p class="descDiv">
        <strong>직방</strong> 어플내에서 서비스 했던 모바일 모델하우스 페이지 입니다. 
      </p>
      <p class="descDiv">
        아파트 분양 정보의 특성상 내용이 많고 복잡하기 때문에 정보 전달을 쉽고 간결하기 위한 인터렉션을 고민하며 제작 했습니다.
      </p>
      <p class="descDiv">
        페이지 최적화를 위해 이미지 레이지 로드 처리, 인터렉션 퍼포먼스 최적화 등 작업을 거쳤습니다.
      </p>
    `
  },
  SPACEHUB: {
    ID:'spacehub',
    DATE:'2023.05',
    TITLE: 'Hanwha Spacehub',
    SRC: 'https://www.hanwhaspacehub.com/media-room/',
    DESCRIPTION: `한화 그룹 우주 사업 스페이스 허브 웹사이트 개발 참여`,
  },
  UBORA: {
    ID:'ubora',
    DATE:'2023.04',
    TITLE: '직방 모바일 모델하우스 (천안 유보라)',
    SRC: 'https://girgir.synology.me/dev/ubora-cheonan/zigbang/',
    DESCRIPTION: `
      <p class="descDiv">
        <strong>직방</strong> 어플내에서 서비스 했던 모바일 모델하우스 페이지 입니다. 
      </p>
    `,
  },
  SEMICONDUCTOR: {
    ID:'semiconductor',
    DATE:'2023.02',
    TITLE: 'samsung semiconductor 삼성 반도체 ',
    SRC: 'https://semiconductor.samsung.com/image-sensor/mobile-image-sensor/isocell-hp2/#',
    DESCRIPTION: `
    삼성 반도체 운영 개발팀 PL로 고객사와 소통 및 팀원 관리 담당
    AEM 환경의 다국어 페이지 운영 유지보수 및 개발 `,
  },
  GALAXY_Z_FLIP4: {
    ID:'z-flip4',
    DATE:'2022.08',
    TITLE: 'Galaxy Z Flip4',
    SRC: 'https://girgir.synology.me/global/galaxy/galaxy-z-flip4/',
    DESCRIPTION: `Galaxy Z Flip4 글로벌 페이지 개발, 삼성닷컴 80여개국 동시 언팩 프로젝트 참여`,
  },
  FAVE: {
    ID:'fave',
    DATE:'2022.06',
    TITLE: 'FAVE 3D 웹사이트',
    SRC: 'https://fave.kr/',
    DESCRIPTION: `
    fave 홈페이지 개발을 위해 PL로서 기획, 디자인, 개발 직접 진행 <br/>
    three.js 를 활용한 풀 3D 웹사이트 개발 및 오픈`,
  },
  GALAXY_S22: {
    ID:'s22-ultra',
    DATE:'2022.02',
    TITLE: 'Galaxy S22 Ultra',
    SRC: 'https://girgir.synology.me/global/galaxy/galaxy-s22-ultra/',
    DESCRIPTION: `
    Galaxy S22 Series 글로벌 페이지 개발, 삼성닷컴 80여개국 동시 언팩 프로젝트 참여
    언팩 행사 큐 사인에 맞춰 라이브 진행`,
  },
  GOBLINS: {
    ID:'goblins',
    DATE:'2022.02',
    TITLE: 'Raving Goblins',
    SRC: 'https://girgir.synology.me/dev/RV/',
    DESCRIPTION: `고블린 사이트`,
  },
} as const;

export { projects };