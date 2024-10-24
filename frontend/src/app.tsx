import { Providers } from "./context";
import { Router } from "./router";
import { GlobalStyle } from "./styles/GlobalStyles";

export const App = () => {
  return (
    <Providers>
      <Router />
      <GlobalStyle />
    </Providers>
  );
};
