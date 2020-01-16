import React from "react";
import { LoginMenu } from "./style";
import LoginTop from "./login-top";
import LoginIcons from "./login-icons";
import LoginIconsTop from "./login-icons-top";
import LoginIconsBottom from "./login-icons-bottom";
import LoginBottom from "./login-bottom";
import { Hr, Mask } from "./style";
import { CSSTransition } from "react-transition-group";

function Login(props) {
  // 显式的将获取到的登陆标签设置为Number类型
  const loginState = localStorage.getItem("loginState");
  const { showStatus, hideLogin, showLogin } = props;
  return (
    <div>
      <CSSTransition
        in={showStatus}
        timeout={300}
        classNames="mask"
        unmountOnExit
        onEnter={showLogin}
        onExited={hideLogin}
      >
        <Mask onClick={hideLogin}></Mask>
      </CSSTransition>
      <CSSTransition
        in={showStatus}
        timeout={300}
        classNames="login-show"
        unmountOnExit
        onEnter={showLogin}
        onExited={hideLogin}
      >
        <LoginMenu>
          <LoginTop loginState={loginState}></LoginTop>
          <LoginIcons></LoginIcons>
          <Hr />
          <LoginIconsTop></LoginIconsTop>
          <Hr />
          <LoginIconsBottom></LoginIconsBottom>
          <LoginBottom logout="logout"></LoginBottom>
        </LoginMenu>
      </CSSTransition>
    </div>
  );
}

export default Login;
