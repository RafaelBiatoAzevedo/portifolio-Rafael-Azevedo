export type TColors = {
  primary: string;
  onPrimary: string;

  secondary: string;
  onSecondary: string;

  tertiary: string;
  onTertiary: string;

  backgroundTopMenu: string;
  onBackgroundTopMenu: string;

  backgroundPrimary: string;
  onBackgroundPrimary: string;

  backgroundSecondary: string;
  onBackgroundSecondary: string;

  html: string;
  css: string;
  js: string;
  ts: string;
  react: string;
  redux: string;
  node: string;
  styled: string;

  moon: string;
  sun: string;
};

export type TFontWeight = {
  regular: string;
  medium: string;
  bold: string;
};

type TResolutions = {
  '4k': string;
  fullHd: string;
  medium: string;
  small: string;
  tablet: string;
  celphone: string;
};

type TSpacing = {
  xxs: string;
  xs: string;
  sm: string;
  md: string;
  lm: string;
  lg: string;
  xl: string;
  xxl: string;
};

export interface ITheme {
  colors: TColors;
  resolutions: TResolutions;
  fontWeight: TFontWeight;
  spacing: TSpacing;
}
