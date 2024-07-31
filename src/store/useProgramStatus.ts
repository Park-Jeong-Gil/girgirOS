import { atom } from 'recoil'

interface Program {
  program: string | null;
  name: string;
  initialSize:{
    width: number,
    height: number,
  }
}

export const programStatus = atom<Program[]>({
  key:'programArr',
  default: []
});

export const currentProgram = atom<string>({
  key:'activeProgram',
  default: ''
});