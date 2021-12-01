import { TLanguage } from '../types/TLanguage';

export interface IContextLanguage {
  language: string;
  changeLanguage: (type: TLanguage) => void;
}
