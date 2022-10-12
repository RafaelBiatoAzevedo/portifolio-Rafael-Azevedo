/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';
import { ITheme, TColors } from '~/interfaces/ITheme';

declare module 'styled-components' {
  type ThemeColors = TColors;

  export type ColorScheme = keyof ThemeColors;

  export interface DefaultTheme extends ITheme {}
}
