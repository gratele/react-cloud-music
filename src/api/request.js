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
