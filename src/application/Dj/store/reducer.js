import * as actionTypes from "./constants";
import { fromJS } from "immutable";

const defaultState = fromJS({
  bannerList: [],
  enterLoading: true,
  errorMessage: false,
  categoriesList: [],
  allClassInfo: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_DJ_BANNER:
      return state.set("bannerList", action.data);
    case actionTypes.CHANGE_DJ_CATELIST: {
      return state.set("categoriesList", action.data);
    }
    case actionTypes.CHANGE_RECOMMEND_LIST_ERROR: {
      return state.set("errorMessage", action.data);
    }
    case actionTypes.CHANGE_ALL_CLASS_INFO: {
      return state.set("allClassInfo", action.data);
    }
    case actionTypes.CHANGE_ENTER_LOADING: {
      return state.set("enterLoading", action.data);
    }
    default:
      return state;
  }
};
