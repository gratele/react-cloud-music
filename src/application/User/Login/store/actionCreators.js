import {
  loginByPhoneRequest,
  sentVcodeRequest,
  loginByVcodeRequest,
  getLoginStatusRequest,
  sentCheckRequest,
  loginByPasswordRequest
} from "../../../../api/request";
import {
  CHANGE_USER_INFO,
  CHANGE_SENT_STATUS,
  CHANGE_LOGIN_STATUS,
  CHANGE_CHECK_EXIT,
  ERROR_MESSAGE
} from "./constants";

export const saveUserInfo = data => ({
  type: CHANGE_USER_INFO,
  data
});

export const saveSentStatus = data => ({
  type: CHANGE_SENT_STATUS,
  data
});

export const saveCHECKEXIT = data => ({
  type: CHANGE_CHECK_EXIT,
  data
});

export const saveLoginStatus = data => ({
  type: CHANGE_LOGIN_STATUS,
  data
});

export const errorMessage = data => ({
  type: ERROR_MESSAGE,
  data
});

export const loginByPhone = (phone, password) => {
  return dispatch => {
    loginByPhoneRequest(phone, password)
      .then(res => {
        console.log(res);
        dispatch(saveUserInfo(res));
      })
      .catch(() => {
        console.log("登录失败！");
      });
  };
};

export const loginByVcode = (phone, vcode) => {
  return dispatch => {
    loginByVcodeRequest(phone, vcode)
      .then(res => {
        console.log(res);
        if (res.code === 200) {
          dispatch(saveUserInfo(res));
          dispatch(saveLoginStatus(true));
        }
      })
      .catch(() => {
        console.log("登录失败！");
      });
  };
};

export const sentVcode = phone => {
  return dispatch => {
    sentVcodeRequest(phone)
      .then(res => {
        if (res.code === 200) {
          dispatch(saveSentStatus(true));
          // getLoginStatus();
        }
      })
      .catch(() => {
        console.log("请求失败！");
      });
  };
};

export const sentCheck = phone => {
  return dispatch => {
    sentCheckRequest(phone)
      .then(res => {
        if (res.code === 200) {
          console.log(res);
          dispatch(saveCHECKEXIT(res.exist));
        }
      })
      .catch(() => {
        console.log("请求失败！");
      });
  };
};

export const loginByPassword = (phone, vcode) => {
  return dispatch => {
    loginByPasswordRequest(phone, vcode)
      .then(res => {
        if (res && res.code === 200) {
          let userId = res.profile.userId;
          let accountInfo = res.profile;
          // 我们设置一个名为loginState
          localStorage.setItem("loginState", 1);
          // 存入用户头像 昵称
          localStorage.setItem("avatarUrl", accountInfo.avatarUrl);
          localStorage.setItem("nickname", accountInfo.nickname);
          // 存取用户 uid信息
          localStorage.setItem("accountUid", userId);

          dispatch(saveUserInfo(res));
          dispatch(saveLoginStatus(true));
        } else {
          dispatch(errorMessage(res));
        }
      })
      .catch(error => {
        dispatch(errorMessage(error));
      });
  };
};

export const getLoginStatus = () => {
  getLoginStatusRequest()
    .then(status => {
      console.log(status);
      const userId = localStorage.setItem(status.userId);
    })
    .catch(() => {
      console.log("请求失败！");
    });
};
