import React from "react";
import { Provider } from "react-redux";
import { GlobalStyle } from "./style";
import { renderRoutes } from "react-router-config";
import { IconStyle } from "./assets/iconfont/iconfont";
import { IconHomeStyle } from "./assets/iconhome/iconhome"
import store from "./store/index";
import routes from "./routes/index.js";
import { HashRouter } from "react-router-dom";
import "./fix.css";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <GlobalStyle></GlobalStyle>
        <IconStyle></IconStyle>
        <IconHomeStyle></IconHomeStyle>
        {renderRoutes(routes)}
      </HashRouter>
    </Provider>
  );
}

export default App;
