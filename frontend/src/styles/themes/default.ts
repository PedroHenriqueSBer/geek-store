import { DefaultTheme } from "styled-components";

const defaultTheme: DefaultTheme = {
  title: "default",
  colors: {
    primary300: "#FDBA74",
    primary500: "#FB923C",
    primary500Op: "#fb923c8f",
    primary800: "#EA580C",
    background100: "#F8FAFC",
    background200: "#F1F5F9",
    background300: "#D4D4D8",
    error: "#EF4444",
    success: "#4ADE80",
    yellow: "#FCD34D",
    shadow: "#00000044",
  },
  size: {
    none: "0",
    xs: "0.75rem",
    sm: "1rem",
    md: "2rem",
    lg: "6rem",
    xl: "12rem",
    xxl: "18rem",
    xxxl: "24rem",
    full: "100%",
  },
  spacing: {
    none: "0",
    xs: "8px",
    sm: "12px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    full: "100%",
  },
  weight: {
    sxxx: 100,
    sxx: 200,
    sx: 300,
    sm: 400,
    md: 500,
    lg: 600,
    xl: 700,
    xxl: 800,
    xxxl: 900,
  },
};

export default defaultTheme;
