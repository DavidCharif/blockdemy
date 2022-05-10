import { BrowserRouter } from "react-router-dom";

import LocalRoutes from "./Helpers/Routes";
import { GoblalStyle } from "./Styled/GoblalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./Styled/Theme";
import { useSelector } from "react-redux";

function App() {
  const localTheme = useSelector((state) => state.theme);

  return (
    <>
      <BrowserRouter>
        <ThemeProvider
          theme={localTheme === "light" ? theme.light : theme.dark}
        >
          <GoblalStyle />
          <LocalRoutes />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
