import { getDjSublistRequest } from "../../../api/request";
import { DJ_SUBLIST, CHANGE_ENTER_LOADING } from "./constants";
import { fromJS } from "immutable";

export const changeDjSublist = data => ({
  type: DJ_SUBLIST,
  data: fromJS(data)
});

export const changeEnterLoading = data => ({
  type: CHANGE_ENTER_LOADING,
  data
});

export const getDjSublist = () => {
  return dispatch => {
    getDjSublistRequest()
      .then(res => {
        dispatch(changeDjSublist(res));
        dispatch(changeEnterLoading(false));
      })
      .catch(err => {
        console.log(err);
        console.log("获取电台的订阅列表失败");
        dispatch(errorAction("获取电台的订阅列表失败"));
      });
  };
};
