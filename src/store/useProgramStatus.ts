import { atom } from 'recoil'

interface Program {
  program: string | null;
  name: string;
  initialSize:{
    width: number,
    height: number,
  }
}

interface Alrert {
  id: string;
  name: string;
  description: string;
}

export const programStatus = atom<Program[]>({
  key:'programArr',
  default: []
});

export const currentProgram = atom<string>({
  key:'activeProgram',
  default: ''
});

export const currentAlert = atom<Alrert[]>({
  key: 'activeAlert',
  default: []
});