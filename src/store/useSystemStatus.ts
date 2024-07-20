import { atom } from 'recoil'

export const systemState = atom<string>({
  key: 'systemState', 
  default: 'booting',
});

export const soundState = atom<boolean>({
  key: 'soundActive', 
  default: false,
});

