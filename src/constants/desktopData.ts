
const programs = {
  CONTACT: {
    ID: 'myPc',
    NANE:'연락처',
    TYPE: 'folder',
    SIZE:{
      width: 840,
      height: 600
    },
    DESCRIPTION: 'girgir\'s 연락처를 확인 할 수 있습니다.',
  },
  PROJECTS: {
    ID: 'myDoc',
    NANE:'프로젝트',
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
      width: 1024,
      height: 700
    },
    DESCRIPTION: '프로젝트를 볼 수 있는 브라우저 입니다.',
  },
  ABOUT_ME: {
    ID: 'about',
    NANE:'About Me',
    TYPE: 'application',
    SIZE:{
      width: 840,
      height: 600
    },
    DESCRIPTION: '간단한 자기 소개 입니다.',
  },
} as const;

const contact = {
  PHONE_NUMBER: {
    ID: 'phone',
    NANE:'연락처',
    TYPE: 'alert',
    DESCRIPTION: '010-4468-7412 입니다.',
  },
  EMAIL: {
    ID: 'email',
    NANE:'이메일',
    TYPE: 'alert',
    DESCRIPTION: 'wjdrlf5986@naver.com 으로 메일 주세요.',
  },
} as const;

export {programs, contact, };