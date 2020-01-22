import * as actionTypes from "./constants";
import { fromJS } from "immutable";
import {
  getDjBannerRequest,
  getDjCatelistRequest,
  djClassificationInfoRequest
} from "../../../api/request";

export const changeBannerList = data => ({
  type: actionTypes.CHANGE_DJ_BANNER,
  data: fromJS(data)
});

export const changeDjCatelist = data => ({
  type: actionTypes.CHANGE_DJ_CATELIST,
  data: fromJS(data)
});

export const errorAction = data => ({
  type: actionTypes.CHANGE_RECOMMEND_LIST_ERROR,
  data
});

export const changeEnterLoading = data => ({
  type: actionTypes.CHANGE_ENTER_LOADING,
  data
});

export const changeAllClassInfo = data => ({
  type: actionTypes.CHANGE_ALL_CLASS_INFO,
  data: fromJS(data)
});

export const getDjBannerList = () => {
  return dispatch => {
    getDjBannerRequest()
      .then(data => {
        const action = changeBannerList(data.data);
        dispatch(action);
        dispatch(changeEnterLoading(false));
      })
      .catch(() => {
        console.log("轮播图数据传输错误");
      });
  };
};

const getJsonData = data => {
  let jsonTarget = [];
  data.map(item => {
    jsonTarget.push({
      id: item.id,
      name: item.name,
      imgUrl: item.pic56x56Url
    });
  });
  return jsonTarget;
};

export const getDjCatelist = () => {
  return dispatch => {
    getDjCatelistRequest()
      .then(data => {
        const categories = data.categories;
        dispatch(changeDjCatelist(getJsonData(categories)));
      })
      .catch(() => {
        console.log("获取电台分类错误");
      });
  };
};
