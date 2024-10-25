import { IElementProps } from "props";
import { createTheme, ThemeProvider as MUITheProvider } from "@mui/material";
import defaultTheme from "../styles/themes/default";
import { ThemeProvider } from "styled-components";

export const Providers = ({ children }: IElementProps) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: defaultTheme.colors.primary300,
      },
      background: {
        default: defaultTheme.colors.background100,
      },
      error: {
        main: defaultTheme.colors.error,
      },
      secondary: {
        main: defaultTheme.colors.background100,
      },
      success: {
        main: defaultTheme.colors.success,
      },
    },
  });
  return (
    <MUITheProvider theme={theme}>
      <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
    </MUITheProvider>
  );
};
