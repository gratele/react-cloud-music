import * as actionTypes from './constantsType'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    bannerList: [],
    recommendList: []
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_BANNER:
            return state.get('bannerList', action.data);
        case actionTypes.CHANGE_RECOMMEND_LIST:
            return state.get('recommendList', action.data);
        default:
            return state
    }
}

