import React, { useState, useCallback } from "react";
import { Header, Container } from "./style";
import { trimPhone } from "../../../../api/utils";
import StepOne from "./step-one";
import StepTwo from "./step-two";
import PhonePwd from "./phonePwd";

const PhoneForm = props => {
  const {
    onClickBack,
    sentVcode,
    sentStatus,
    loginByVcode,
    loginByPassword,
    sentCheck,
    errorMessage
  } = props;

  const [phone, setPhone] = useState("");
  const [isPasswordExistBack, setIsPasswordExistBack] = useState(false);

  // 检测手机号码是否已注册
  const checkCellphoneExistence = () => {
    sentCheck(trimPhone(phone));
    setIsPasswordExistBack(true);
  };
  // 手机登录
  const phoneLogin = password => {
    loginByPassword(trimPhone(phone), password);
  };

  //验证码触发登录操作
  const triggerLogin = useCallback(
    vcode => {
      loginByVcode(trimPhone(phone), vcode);
    },
    [phone, loginByVcode]
  );
  //切换手机号码和验证码表单
  const triggerSentVcode = () => {
    sentVcode(trimPhone(phone));
  };

  const onChangePhone = e => {
    let newValue = e.target.value;
    let oldValue = phone;
    const result =
      newValue.length > oldValue.length
        ? newValue
            .replace(/[^\d]/gi, "")
            .replace(/(\d{3})(\d{0,4})(\d{0,4})/, "$1 $2 $3")
        : phone.trim().slice(0, -1);
    if (result && trimPhone(result).length > 11) {
      return;
    }
    setPhone(result);
  };

  return (
    <Container>
      <Header>
        <img
          src={require("../../../../assets/back.svg")}
          alt=""
          onClick={onClickBack}
        />
        手机号登录
      </Header>
      {!isPasswordExistBack && !sentStatus && (
        <StepOne
          onChangePhone={onChangePhone}
          onClickNext={checkCellphoneExistence}
          phone={phone}
        />
      )}
      {isPasswordExistBack && !sentStatus && (
        <PhonePwd
          onClickNext={phoneLogin}
          onClickSentVcode={triggerSentVcode}
          errorMessage={errorMessage}
        ></PhonePwd>
      )}
      {sentStatus && (
        <StepTwo
          triggerLogin={triggerLogin}
          phone={phone}
          reSentVcode={triggerSentVcode}
        />
      )}
    </Container>
  );
};
export default PhoneForm;
