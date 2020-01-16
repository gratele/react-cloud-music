import React, { useState } from "react";
import { LoginBottomWrapper } from "./style";

function LoginBottom(props) {
  const [modeText, setModeText] = useState("白");
  const [modeIcon, setModeIcon] = useState("icontaiyang");

  const TOGGLE_MODE = mode => {
    if (mode == "iconyueliang1") {
      setModeText("白");
      setModeIcon("icontaiyang");
    } else {
      setModeText("夜");
      setModeIcon("iconyueliang1");
    }
  };
  return (
    <LoginBottomWrapper>
      <span onClick={TOGGLE_MODE.bind(this, modeIcon)}>
        <i className={`login ${modeIcon}`}></i>
        <span>{modeText}间模式</span>
      </span>
      <span>
        <i className="login iconshezhi"></i>
        <span>设置</span>
      </span>
      <span
      //   onClick={login}
      >
        <i className="login icondianyuan"></i>
        <span>退出</span>
      </span>
    </LoginBottomWrapper>
  );
}

export default LoginBottom;
