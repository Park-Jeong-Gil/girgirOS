const programs = {
  CONTACT: {
    ID: 'myPc',
    NANE:'My Profile',
    TYPE: 'folder',
    SIZE:{
      width: 840,
      height: 600
    },
    DESCRIPTION: 'girgir\'s 프로필과 정보를 확인 할 수 있습니다.',
  },
  PROJECTS: {
    ID: 'myDoc',
    NANE:'My Projects',
    TYPE: 'folder',
    SIZE:{
      width: 840,
      height: 600
    },
    DESCRIPTION: '참여 및 진행했던 프로젝트 입니다.',
  },
  TRASHCAN: {
    ID: 'trashCan',
    NANE:'Recycle Bin',
    TYPE: 'folder',
    SIZE:{
      width: 840,
      height: 600
    },
    DESCRIPTION: '휴지통 입니다.(?)',
  },
  INTERNET: {
    ID: 'ie',
    NANE:'Internet\n Explorer',
    TYPE: 'internet',
    SIZE:{
      width: 1440,
      height: 780
    },
    DESCRIPTION: '개발한 웹사이트를 볼 수 있습니다.',
  },
  ABOUT_ME: {
    ID: 'about',
    NANE:'help',
    TYPE: 'application',
    SIZE:{
      width: 820,
      height: 650
    },
    DESCRIPTION: '포트폴리오 가이드 입니다.',
  },
} as const;

interface itemData {
  ID: string;
  NANE: string;
  TYPE: string;
  DESCRIPTION: string;
  SIZE?: {
    width: number;
    height: number;
  };
  LINK? :string;
}

const contact: { [key: string]: itemData } = {
  PROFILE: {
    ID: 'profile',
    NANE:'(c:)프로필',
    TYPE: 'application',
    SIZE:{
      width: 664,
      height: 812
    },
    DESCRIPTION: '프로필을 확인 할 수 있습니다.',
  },
  SELF_INTRO: {
    ID: 'notepad',
    NANE:'자기소개.txt',
    TYPE: 'application',
    SIZE:{
      width: 550,
      height: 450
    },
    DESCRIPTION: '자기 소개 글 입니다.',
  },
    WANTED: {
    ID: 'wanted',
    NANE:'원티드',
    TYPE: 'link',
    LINK: 'https://www.wanted.co.kr/',
    DESCRIPTION: '새 탭으로 원티드 지원서를 엽니다.',
  },

} as const;

const works: { [key: string]: itemData } = {
  WEBSITE: {
    ID: 'website',
    NANE:'웹사이트',
    TYPE: 'application',
    SIZE:{
      width: 700,
      height: 868
    },
    DESCRIPTION: '개발한 웹사이트 목록을 볼 수 있습니다.',
  },
  DESIGN: {
    ID: 'design',
    NANE:'디자인',
    TYPE: 'application',
    SIZE:{
      width: 920,
      height: 800
    },
    DESCRIPTION: '디자인 작업을 볼 수 있습니다.',
  },
} as const;

const recycle = {
  trash: {
    ID: 'note1',
    NANE:'TMI (흑역사.ver)',
    TYPE: 'alert',
    DESCRIPTION: '친해지면 대방출 합니다.',
  },
  // trash2: {
  //   ID: 'note2',
  //   NANE:'부정적 에너지',
  //   TYPE: 'alert',
  //   DESCRIPTION: '부정적 마인드는 과감히 버립니다.',
  // },
} as const;

export {programs, contact, works, recycle};