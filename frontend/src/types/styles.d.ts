import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary300: string;
      primary500: string;
      primary500Op: string;
      primary800: string;
      background100: string;
      background200: string;
      background300: string;
      error: string;
      success: string;
      yellow: string;
      shadow: string;
    };
    size: {
      none: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
      full: string;
    };
    spacing: {
      none: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      full: string;
    };
    weight: {
      sxxx: number,
      sxx: number,
      sx: number,
      sm: number,
      md: number,
      lg: number,
      xl: number,
      xxl: number,
      xxxl: number,
    },
  }
}
