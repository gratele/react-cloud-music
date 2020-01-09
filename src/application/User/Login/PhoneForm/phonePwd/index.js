import React, { useRef, useEffect, useState } from "react";
import { trimPhone } from "../../../../../api/utils";

const PhonePwd = props => {
  const { onClickNext, onClickSentVcode, errorMessage } = props;
  const inputRef = useRef();
  const [password, setPassword] = useState("");

  useEffect(() => {
    inputRef.current.focus();
  });

  const onChangePassword = e => {
    // if (!e.target.value) return;

    const val = e.target.value;
    setPassword(val);
  };

  return (
    <>
      <p className="password">
        <input
          type="password"
          placeholder="请输入密码"
          onChange={onChangePassword}
          value={password}
          ref={inputRef}
        />
        <span
          onClick={() => {
            onClickSentVcode();
          }}
        >
          忘记密码
        </span>
      </p>
      <hr />
      {errorMessage && <p className="error">{errorMessage.message}</p>}
      <span
        className="LoginBtn"
        onClick={() => {
          onClickNext(password);
        }}
      >
        登录
      </span>
    </>
  );
};

export default PhonePwd;
