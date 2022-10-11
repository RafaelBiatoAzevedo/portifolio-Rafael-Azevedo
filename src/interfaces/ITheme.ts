export type TColors = {
  primary: string;
  secondary: string;
  tertiary: string;

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
};

export interface ITheme {
  colors: TColors;
  resolutions: TResolutions;
  fontWeight: TFontWeight;
  spacing: TSpacing;
}
