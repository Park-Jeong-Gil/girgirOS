import { atom } from 'recoil'

export const systemState = atom<string>({
  key: 'systemState', 
  default: 'booting',
});