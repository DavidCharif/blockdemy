import { BrowserRouter } from "react-router-dom";

import LocalRoutes from "./Helpers/Routes";
import { GoblalStyle } from "./Styled/GoblalStyle";
import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./Helpers/historySlice";
import { Provider } from "react-redux";

export const store = configureStore({
  reducer: {
    history: counterReducer,
  },
});
function App() {
  return (
    <>
      <GoblalStyle />
      <BrowserRouter>
      <Provider store={store}>
        <LocalRoutes />
      </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
