import { TTheme } from '../types/TTheme';

export interface IContextTheme {
  theme: string;
  changeTheme: (type: TTheme) => void;
}
