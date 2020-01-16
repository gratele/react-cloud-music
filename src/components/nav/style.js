import styled from "styled-components";
import style from "../../assets/global-style";
export const Mask = styled.div`
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  .mask-enter {
    opacity: 0;
    transform: scale(0.9);
  }
  .mask-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 300ms, transform 300ms;
  }
  .mask-exit {
    opacity: 1;
  }
  .mask-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 300ms, transform 300ms;
  }
`;
export const LoginMenu = styled.div`
  // 左侧侧边栏 宽度设置为6rem
  position: absolute;
  z-index: 99;
  height: 100vh;
  overflow-y: auto;
  top: 0;
  left: 0;
  width: 90%;
  background: #fff;
  color: #333;
  .login-show-enter {
    opacity: 0;
    transform: scale(0.9);
  }
  .login-show-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 300ms, transform 300ms;
  }
  .login-show-exit {
    opacity: 1;
  }
  .login-show-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 300ms, transform 300ms;
  }
`;

export const loginBg = styled.div`
  // 如果没有登陆，背景是灰色
  background-color: rgba(204, 204, 204, 0.3);
`;

export const LoginTopWrapper = styled.div`
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  padding: 1.6rem 0.23rem 0.9rem;
  width: 100%;
  height: 11rem;
  background-color: rgba(204, 204, 204, 0.3);
  .login-ed {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    .nickname {
      position: absolute;
      bottom: 0;
      .level {
        box-sizing: border-box;
        padding: 0.04rem 0.1rem;
        background-color: #ccc;
        border-radius: 0.4rem;
        font-size: 0.2rem;
      }
    }
    .img-info {
      // 用户信息 包括头像和昵称
      text-align: center;
      width: 1.3rem;
      height: 1.3rem;
      .account-bg {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .daily_sign-in {
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      padding: 0.07rem;
      font-size: 0.2rem;
      margin-top: auto;
      color: #fff;
      .sign {
        color: #7b7c7d;
      }
      .iconyoujiantou {
        font-size: 0.24rem;
      }
    }
  }
  .no-login {
    width: 100%;
    height: 100%;
    .flex-around();
    flex-direction: column;
    align-items: center;
    .content {
      text-align: center;
      padding: 25px
      p {
        // 两句话
        font-size: 0.2rem;
        line-height: 0.2rem * 1.5;
        color: rgba(0, 0, 0, 0.4);
        padding: 0.2rem 0;
      }
    }
    .link {
      text-align: center
        .to-login {
        // 立即登录按钮
        background-color: transparent;
        box-sizing: border-box;
        padding: 0.1rem 0.5rem;
        border: 1px solid rgba(0, 0, 0, 0.4);
        border-radius: 0.5rem;
        font-size: 1rem;
        color: rgba(0, 0, 0, 0.4);
      }
    }
  }
`;

export const Hr = styled.div`
  display: block;
  unicode-bidi: isolate;
  -webkit-margin-before: 0.5em;
  -webkit-margin-after: 0.5em;
  -webkit-margin-start: auto;
  -webkit-margin-end: auto;
  overflow: hidden;
  border-style: inset;
  border-width: 0.5px;
`;

export const LoginIconsList = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 3rem 0.13rem 1rem;
  display: flex;
  justify-content: space-around;
  list-style: none;
`;

export const LoginIconsListItem = styled.div`
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    .icon {
      width: 3.72rem;
      height: 3.72rem;
      line-height: 3.72rem;
      .login {
        font-size: 1.3rem;
        color: #dd001b;
      }
`;

export const IconText = styled.div`
  font-size: 0.6rem;
  line-height: 3.72rem;
`;

export const List = styled.div`
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  padding-left: 0.5rem;
  list-style: none;
`;
export const ListItem = styled.div`
  box-sizing: border-box;
  padding: 0.2rem 0;
  font-size: 1.1rem;
  height: 2.87rem;
  line-height: 2.87rem;
  .login {
    font-size: 1.3rem;
    margin-right: 0.6rem;
  }
`;

export const LoginBottomWrapper = styled.div`
  width: 23rem;
  height: 0.9rem;
  background-color: #fff;
  box-sizing: border-box;
  padding: 1.2rem 0.23rem;
  position: fixed;
  bottom: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  .login {
    font-size: 1.3rem;
    vertical-align: -2px;
    margin-right: 0.08rem;
  }
`;
