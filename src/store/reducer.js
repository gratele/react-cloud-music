import { combineReducers } from "redux-immutable";
import { reducer as recommendReducer } from "../application/Recommend/store/index";
import { reducer as singersReducer } from "../application/Singers/store/index";
import { reducer as rankReducer } from "../application/Rank/store/index";
import { reducer as albumReducer } from "../application/Album/store/index";
import { reducer as singerInfoReducer } from "../application/Singer/store/index";
import { reducer as playerReducer } from "../application/Player/store/index";
import { reducer as searchReducer } from "../application/Search/store/index";
import { reducer as userReducer } from "../application/User/Login/store/index";
import { reducer as dateRecommendReducer } from "../application/DateRecommend/store/index";
import { reducer as recentlyPlayedReducer } from "../application/recentlyPlayed/store/index";
import { reducer as djSublistReducer } from "../application/DjSublist/store/index";
import { reducer as djDetailListReducer } from "../application/djDetail/store/index";
import { reducer as djReducer } from "../application/Dj/store/index";

export default combineReducers({
  recommend: recommendReducer,
  singers: singersReducer,
  rank: rankReducer,
  album: albumReducer,
  singerInfo: singerInfoReducer,
  player: playerReducer,
  search: searchReducer,
  user: userReducer,
  dateRecommend: dateRecommendReducer,
  recently: recentlyPlayedReducer,
  dj_sublist: djSublistReducer,
  djDetail: djDetailListReducer,
  dj: djReducer
});
