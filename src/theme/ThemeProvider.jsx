import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { theme } from "./theme";

function ThemeProvider({ children }) {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
}

export default ThemeProvider;
