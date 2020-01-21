import * as actionTypes from "./constants";
import { fromJS } from "immutable";

const defaultState = fromJS({
  djSublist: [],
  enterLoading: true
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.DJ_SUBLIST:
      return state.set("djSublist", action.data);
    case actionTypes.CHANGE_ENTER_LOADING:
      return state.set("enterLoading", action.data);
    default:
      return state;
  }
};
