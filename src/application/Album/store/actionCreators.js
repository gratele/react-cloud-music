import { CHANGE_CURRENT_ALBUM, CHANGE_ENTER_LOADING } from './constants'
import { fromJS } from 'immutable'
import { getRecommendListDetailRequest } from '../../../api/request';

export const changeCurrentAlbum = (data) => ({
    type: CHANGE_CURRENT_ALBUM,
    data: fromJS(data),
})
export const changeEnterLoading = (data) => ({
    type: CHANGE_ENTER_LOADING,
    data: fromJS(data),
})

export const getAlbumList = (id) => {
    return (dispatch) => {
        getRecommendListDetailRequest(id).then(res => {
            let data = res.playlist;
            dispatch(changeCurrentAlbum(data));
            dispatch(changeEnterLoading(false));
        }).catch(() => {
            console.log("获取album数据失败!")
        });
    }
}