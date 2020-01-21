import * as actionTypes from "./constants";
import { fromJS } from "immutable";

const defaultState = fromJS({
  djDetailList: {},
  djProgramList: {},
  enterLoading: true
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.DJ_DETAIL_LIST:
      return state.set("djDetailList", action.data);
    case actionTypes.DJ_PROGRAM_LIST:
      return state.set("djProgramList", action.data);
    case actionTypes.CHANGE_ENTER_LOADING:
      return state.set("enterLoading", action.data);
    default:
      return state;
  }
};
