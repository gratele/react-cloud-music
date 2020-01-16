import React from "react";
import { LoginTopWrapper } from "./style";
import { NavLink } from "react-router-dom";

export const LoginTop = props => {
  const loginState = false;
  const isSign = false;
  const nickname = localStorage.getItem("nickname");
  const level = localStorage.getItem("level");
  const avatarUrl = localStorage.getItem("avatarUrl");

  return (
    <LoginTopWrapper
    // onClick={loginBg:!loginState}
    >
      {/* 没有登录状态样式 */}
      {!loginState && (
        <div className="no-login">
          <div className="content">
            <p>登陆网易云音乐</p>
            <p>手机电脑多端同步，尽享海量高品质音乐</p>
          </div>
          <div className="link">
            <NavLink to="/user/login" className="to-login">
              立即登录
            </NavLink>
          </div>
          {/* 在一个组件的根元素上直接监听一个原生事件 使用native修饰 */}
        </div>
      )}
      {/* 已经登陆状态样式  */}
      {loginState && (
        <div className="login-ed" onClick="goUserInfo">
          <div className="img-info">
            <img
              className="account-bg"
              src="avatarUrl + '?param=200y200'"
              alt
            />
          </div>
          <div className="nickname">
            <span className="account-nickname">{{ nickname }}</span>
            <span className="level">Lv.{{ level }}</span>
          </div>
          <div className="daily_sign-in">
            {/* 这里添加stop 修饰符，防止冒泡跳转到个人信息页面  */}
            {!isSign && (
              <van-button
                type="primary"
                size="small"
                color="#dd001b"
                round
                // @click.stop="sign"
              >
                <i className="login icontubiaozhizuo-"></i>签到
              </van-button>
            )}
            {isSign && (
              <van-button size="small" className="sign">
                已签到
                <i className="login iconyoujiantou"></i>
              </van-button>
            )}
          </div>
        </div>
      )}
    </LoginTopWrapper>
  );
};

export default LoginTop;
