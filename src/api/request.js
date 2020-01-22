import { axiosInstance } from "./config";

export const getBannerRequest = () => {
  return axiosInstance.get("/banner");
};

export const getRecommendListRequest = () => {
  return axiosInstance.get("/personalized");
};

export const getHotSingerListRequest = count => {
  return axiosInstance.get(`/top/artists?offset=${count}`);
};

export const getSingerListRequest = (category, alpha, count) => {
  return axiosInstance.get(
    `/artist/list?cat=${category}&initial=${alpha.toLowerCase()}&offset=${count}`
  );
};

export const getRankListRequest = () => {
  return axiosInstance.get(`/toplist/detail`);
};

export const getRecommendListDetailRequest = id => {
  return axiosInstance.get(`/playlist/detail?id=${id}`);
};

export const getSingerInfoRequest = id => {
  return axiosInstance.get(`/artists?id=${id}`);
};

export const getRankListDetailRequest = id => {
  // return axiosInstance.get(`/top/list/?idx=${id}`);
  return axiosInstance.get(`/playlist/detail?id=${id}`);
};

export const getHotKeyWordsRequest = () => {
  return axiosInstance.get(`/search/hot`);
};

export const getSuggestListRequest = query => {
  return axiosInstance.get(`/search/suggest?keywords=${query}`);
};

export const getResultSongsListRequest = query => {
  return axiosInstance.get(`/search?keywords=${query}`);
};

export const getSongDetailRequest = id => {
  return axiosInstance.get(`/song/detail?ids=${id}`);
};

export const getLyricRequest = id => {
  return axiosInstance.get(`/lyric?id=${id}`);
};

export const getSongUrlRequest = id => {
  return axiosInstance.get(`/song/url?id=${id}`);
};

export const loginByPhoneRequest = (phone, password) => {
  return axiosInstance.get(
    `/login/cellphone?phone=${phone}&password=${password}`
  );
};

export const sentVcodeRequest = phone => {
  return axiosInstance.get(`/captcha/sent?phone=${phone}`);
};

export const loginByVcodeRequest = (phone, vcode) => {
  return axiosInstance.get(`/captcha/verify?phone=${phone}&captcha=${vcode}`);
};

export const sentCheckRequest = phone => {
  return axiosInstance.get(`/cellphone/existence/check?phone=${phone}`);
};

export const loginByPasswordRequest = (phone, password) => {
  return axiosInstance.get(
    `/login/cellphone?phone=${phone}&password=${password}`
  );
};

export const getLoginStatusRequest = () => {
  return axiosInstance.get(`/login/status`);
};

export const getRecordListRequest = (uid = 0, type = 0) => {
  return axiosInstance.get(`/user/record?uid=${uid}&type=${type}`);
};

export const getDateRecommendRequest = () => {
  return axiosInstance.get(`/recommend/songs`);
};
// 电台的订阅列表
export const getDjSublistRequest = () => {
  return axiosInstance.get(`/dj/sublist`);
};
// 电台 - 详情
export const getDjDetailRequest = id => {
  return axiosInstance.get(`dj/detail?rid=${id}`);
};
// 电台 - 节目详情
export const getDjProgramRequest = (id, limit = 30) => {
  return axiosInstance.get(`/dj/program?rid=${id}&limit=${limit}`);
};
// 电台banner
export const getDjBannerRequest = () => {
  return axiosInstance.get("/dj/banner");
};
// 电台 - 分类
export const getDjCatelistRequest = () => {
  return axiosInstance.get("/dj/catelist");
};
// 电台 - 今日优选
export const getDjTodayPerferedRequest = () => {
  return axiosInstance.get("/dj/today/perfered");
};
// 电台 - 分类推荐
export const djClassificationInfoRequest = type => {
  return axiosInstance.get(`/dj/recommend/type?type=${type}`);
};
