import { fromJS } from "immutable";
import { getDateRecommendRequest } from "../../../api/request";
import { DATERECOMMEND_LIST, CHANGE_ENTER_LOADING, ERROR } from "./constants";

export const changeDateRecommend = data => ({
  type: DATERECOMMEND_LIST,
  data: fromJS(data)
});

//进场loading
export const changeEnterLoading = data => ({
  type: CHANGE_ENTER_LOADING,
  data
});

export const getDateRecommendList = () => {
  return dispatch => {
    getDateRecommendRequest()
      .then(res => {
        dispatch(changeDateRecommend(res));
        dispatch(changeEnterLoading(false));
      })
      .catch(err => {
        console.log("获取用户播放记录失败");
        dispatch(errorAction("获取用户播放记录失败"));
      });
  };
};
