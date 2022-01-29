export type Styles = {
  white: string;
  gray100: string;
  gray200: string;
  gray300: string;
  gray400: string;
  gray500: string;
  gray600: string;
  gray700: string;
  gray800: string;
  gray900: string;
  black: string;

  pink: string;
  orange: string;

  primary: string;
  secondary: string;
  success: string;
  info: string;
  warning: string;
  danger: string;
  light: string;
  dark: string;

  spacer: string;
  gridBreakpointXs: string;
  gridBreakpointSm: string;
  gridBreakpointMd: string;
  gridBreakpointLg: string;
  gridBreakpointXl: string;
  fontFamilySansSerif: string;
  fontFamilyDisplay: string;
  fontFamilySerif: string;
  fontFamilyBase: string;
  fontSizeLg: string;
  fontSizeSm: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
