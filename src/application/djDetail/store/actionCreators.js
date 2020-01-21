import { getDjDetailRequest, getDjProgramRequest } from "../../../api/request";
import {
  DJ_DETAIL_LIST,
  CHANGE_ENTER_LOADING,
  DJ_PROGRAM_LIST
} from "./constants";
import { fromJS } from "immutable";

export const changeDjDetailList = data => ({
  type: DJ_DETAIL_LIST,
  data: fromJS(data)
});

export const changeDjProgramList = data => ({
  type: DJ_PROGRAM_LIST,
  data: fromJS(data)
});

export const changeEnterLoading = data => ({
  type: CHANGE_ENTER_LOADING,
  data
});

export const getDjDetailList = id => {
  return dispatch => {
    getDjDetailRequest(id)
      .then(res => {
        dispatch(changeDjDetailList(res));
        dispatch(changeEnterLoading(false));
      })
      .catch(err => {
        console.log(err);
        console.log("获取电台详情失败");
        dispatch(errorAction("获取电台详情失败"));
      });
  };
};

export const getProgramList = (id, limit) => {
  return dispatch => {
    getDjProgramRequest(id, limit)
      .then(res => {
        dispatch(changeDjProgramList(res));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
