import { getRecordListRequest } from "../../../api/request";
import { RECORD_LIST, CHANGE_ENTER_LOADING, ERROR } from "./constants";
import { fromJS } from "immutable";

export const changeRecordList = data => ({
  type: RECORD_LIST,
  data: fromJS(data)
});

//进场loading
export const changeEnterLoading = data => ({
  type: CHANGE_ENTER_LOADING,
  data
});

export const getRecordList = () => {
  return dispatch => {
    const accountUid = localStorage.getItem("accountUid");
    getRecordListRequest(accountUid, 0)
      .then(res => {
        dispatch(changeRecordList(res));
        dispatch(changeEnterLoading(false));
      })
      .catch(err => {
        console.log(err);
        console.log("获取用户播放记录失败");
        dispatch(errorAction("获取用户播放记录失败"));
      });
  };
};
