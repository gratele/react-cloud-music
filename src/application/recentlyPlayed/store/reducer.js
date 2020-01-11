import * as actionTypes from "./constants";
import { fromJS } from "immutable";

const defaultState = fromJS({
  recordList: [],
  enterLoading: true
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.RECORD_LIST:
      return state.set("recordList", action.data);
    case actionTypes.CHANGE_ENTER_LOADING:
      return state.set("enterLoading", action.data);
    default:
      return state;
  }
};
