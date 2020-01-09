import * as actionTypes from "./constants";
import { fromJS } from "immutable";

const defaultState = fromJS({
  dateRecommendList: [],
  enterLoading: true
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.DATERECOMMEND_LIST: {
      return state.set("dateRecommendList", action.data);
    }
    case actionTypes.CHANGE_ENTER_LOADING:
      return state.set("enterLoading", action.data);
    default:
      return state;
  }
};
