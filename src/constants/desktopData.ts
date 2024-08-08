
const programs = {
  CONTACT: {
    ID: 'myPc',
    NANE:'About Me',
    TYPE: 'folder',
    SIZE:{
      width: 840,
      height: 600
    },
    DESCRIPTION: 'girgir\'s 프로필과 이력서 등 정보를 확인 할 수 있습니다.',
  },
  PROJECTS: {
    ID: 'myDoc',
    NANE:'My projects',
    TYPE: 'folder',
    SIZE:{
      width: 840,
      height: 600
    },
    DESCRIPTION: '참여 및 진행했던 프로젝트 입니다.',
  },
  TRASHCAN: {
    ID: 'trashCan',
    NANE:'휴지통',
    TYPE: 'folder',
    SIZE:{
      width: 840,
      height: 600
    },
    DESCRIPTION: '휴지통 입니다.',
  },
  INTERNET: {
    ID: 'ie',
    NANE:'Internet\n Explorer',
    TYPE: 'internet',
    SIZE:{
      width: 1440,
      height: 780
    },
    DESCRIPTION: '프로젝트를 볼 수 있는 브라우저 입니다.',
  },
  ABOUT_ME: {
    ID: 'about',
    NANE:'help',
    TYPE: 'application',
    SIZE:{
      width: 820,
      height: 550
    },
    DESCRIPTION: '간단한 자기 소개 입니다.',
  },

} as const;

const contact = {
  PROFILE: {
    ID: 'profile',
    NANE:'프로필',
    TYPE: 'application',
    SIZE:{
      width: 920,
      height: 800
    },
    DESCRIPTION: '간단한 자기 소개 입니다.',
  },
    WANTED: {
    ID: 'wanted',
    NANE:'원티드',
    TYPE: 'link',
    LINK: 'https://www.wanted.co.kr/',
    DESCRIPTION: 'https://www.wanted.co.kr/',
  },

} as const;

export {programs, contact, };