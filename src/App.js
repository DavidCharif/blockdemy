import { BrowserRouter } from "react-router-dom";

import LocalRoutes from "./Helpers/Routes";
import { GoblalStyle } from "./Styled/GoblalStyle";

function App() {
  return (
    <>
      <GoblalStyle />
      <BrowserRouter>
        <LocalRoutes/>
      </BrowserRouter>
    </>
  );
}

export default App;
