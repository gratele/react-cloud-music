import React from 'react';
import './App.css';
import { GlobalStyle } from './style';
import { IconStyle } from './assets/iconfont/iconfont'
import { renderRoutes } from 'react-router-config';//renderRoutes读取路由配置转化为Route标签
import routes from './routes/index.js';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      {renderRoutes(routes)}
    </HashRouter>
  );
}

export default App;
