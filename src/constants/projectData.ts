const projects = {
  KG: {
    ID:'kg',
    DATE:'2024.04',
    TITLE: 'KG-Mobility',
    SRC: 'https://girgir.synology.me/dev/KG-Mobility/',
    DESCRIPTION: `
    토레스 EV 모델 출시에 앞서 KG Mobolity 공식 홈페이지를 리뉴얼 하는 프로젝트를 위해 제안용으로 개발하게 된 웹페이지 입니다.<br/>
    실제 코란도 상세 페이지의 내용을 토대로 차량을 전방위로 볼 수 있는 동선을 직접 구상 했으며, <br/>
    상세 페이지 내에서 사용자가 실시간으로 차체의 색상을 바꾸거나 휠 컬러를 바꾸는 경험을 할 수 있는 것이 포인트 입니다. <br/>
    3D 모델러가 없었기 때문에 유료로 판매하는 코란도 모델을 구입하여, three.js를 활용해서 제작했습니다.<br/>
    스크롤 애니메이션은 블렌더를 통해 작업 했습니다. <br/>
    `,
  },
  WINE: {
    ID:'weeklywine',
    DATE:'2023.10',
    TITLE: '위클리 와인',
    SRC: 'https://www.weeklywine.co.kr/',
    DESCRIPTION: `독일 프랑크푸르트에서 와인을 배송해주는 WeeklyWine 사이트 개발`,
  },
  GOBLINS: {
    ID:'goblins',
    DATE:'2023.02',
    TITLE: 'Raving Goblins',
    SRC: '#',
    DESCRIPTION: `고블린 사이트`,
  },
} as const;

export { projects };