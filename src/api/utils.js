import { RankTypes } from "../api/config";

export const getCount = count => {
  if (count < 0) return;
  if (count < 10000) {
    return count;
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 1000) / 10 + "万";
  } else {
    return Math.floor(count / 10000000) / 10 + "亿";
  }
};

export const debounce = (func, delay) => {
  let timer;
  return function(...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func.apply(this, args);
      clearTimeout(timer);
    }, delay);
  };
};
//处理歌手列表拼接歌手名字
export const getName = list => {
  let str = "";
  list.map((item, index) => {
    str += index === 0 ? item.name : "/" + item.name;
    return item;
  });
  return str;
};

//处理数据，找出第一个没有歌名的排行榜的索引
export const filterIndex = rankList => {
  for (let i = 0; i < rankList.length - 1; i++) {
    if (rankList[i].tracks.length && !rankList[i + 1].tracks.length) {
      return i + 1;
    }
  }
};

//找出排行榜的编号
export const filterIdx = name => {
  for (let key in RankTypes) {
    if (RankTypes[key] === name) return key;
  }
  return null;
};

// 给css3相关属性增加浏览器前缀，处理浏览器兼容性问题
let elementStyle = document.createElement("div").style;

let vendor = (() => {
  //首先通过transition属性判断是何种浏览器
  let transformNames = {
    webkit: "webkitTransform",
    Moz: "MozTransform",
    O: "OTransfrom",
    ms: "msTransform",
    standard: "Transform"
  };
  for (let key in transformNames) {
    if (elementStyle[transformNames[key]] !== undefined) {
      return key;
    }
  }
  return false;
})();

export function prefixStyle(style) {
  if (vendor === false) {
    return false;
  }
  if (vendor === "standard") {
    return style;
  }
  return vendor + style.charAt(0).toUpperCase() + style.substr(1);
}

//判断一个对象是否为空对象
export const isEmptyObject = obj => !obj || Object.keys(obj).length === 0;

//转换歌曲播放时间
export const formatPlayTime = interval => {
  interval = interval | 0;
  const minute = (interval / 60) | 0;
  const second = (interval % 60).toString().padStart(2, "0");
  return `${minute}:${second}`;
};

export const getTransitionEndName = dom => {
  let cssTransition = ["transition", "webkitTransition"];
  let transitionEnd = {
    transition: "transitionend",
    webkitTransition: "webkitTransitionEnd"
  };
  for (let i = 0; i < cssTransition.length; i++) {
    if (dom.style[cssTransition[i]] !== undefined) {
      return transitionEnd[cssTransition[i]];
    }
  }
  return undefined;
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// 随机算法
export function shuffle(arr) {
  let new_arr = [];
  arr.forEach(item => {
    new_arr.push(item);
  });
  for (let i = 0; i < new_arr.length; i++) {
    let j = getRandomInt(0, i);
    let t = new_arr[i];
    new_arr[i] = new_arr[j];
    new_arr[j] = t;
  }
  return new_arr;
}

// 找到当前的歌曲索引
export const findIndex = (song, list) => {
  return list.findIndex(item => {
    return song.id === item.id;
  });
};

//拼接出歌曲的url链接
export const getSongUrl = id => {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
};
//除去手机号码的空格符号

export const trimPhone = val => val.replace(/(^\s+)|(\s+$)|\s+/g, "");

export const filterSetPlayCount = value => {
  if (!value) return "";
  if (value > 10000) {
    value = parseInt(value / 10000) + "万";
  } else if (value > 100000000) {
    value = (value / 100000000).toFixed(1) + "亿";
  }
  return value;
};

/**
 * 将毫秒转换为 分钟：秒数 的形式
 */
export const filterSetTime = value => {
  if (!value) return "";
  let min = parseInt(value / (1000 * 60));
  if (min < 10) {
    min = "0" + min;
  }
  let sec = parseInt((value % (1000 * 60)) / 1000);
  if (sec < 10) {
    sec = "0" + sec;
  }
  value = `${min}:${sec}`;
  return value;
};

/**
 * 将毫秒转换为 年.月.日
 */
export const filterSetYear = (
  value,
  splitY = ".",
  splitM = ".",
  splitD = ""
) => {
  const oDate = new Date(value);
  const oYear = oDate.getFullYear();
  const oMonth = oDate.getMonth() + 1;
  const oDay = oDate.getDate();
  value = `${oYear}${splitY}${oMonth}${splitM}${oDay}${splitD}`;
  return value;
};

/**
 * 将毫秒设置为 月-日 格式
 */
export const filterSetMonth = (value, splitM = "-", splitD = "") => {
  const oDate = new Date(value);
  let oMonth = oDate.getMonth() + 1;
  let oDay = oDate.getDate();
  if (oMonth < 10) {
    oMonth = "0" + oMonth;
  }
  if (oDay < 10) {
    oDay = "0" + oDay;
  }
  value = `${oMonth}${splitM}${oDay}${splitD}`;
  return value;
};

export const filterAge = time => {
  if (!time) {
    // 这里是因为默认值为0的话会返回1970
    // 当传入默认值退出
    return;
  }
  let year = new Date(time).getFullYear();
  const nowYear = new Date().getFullYear();
  let age = "";
  // 存下从1950年到现在时间每5年一个间隔的数值
  let ages = [];
  for (let i = 1950; i < nowYear; i += 5) {
    ages.push(i);
  }
  // 这里不能使用 forEach 因为forEach无法跳出循环！！！
  for (let i = 0; i < ages.length; i++) {
    const ele = ages[i];
    if (year <= ele + 5) {
      // 找到第一个满足条件的年份，拆分成数组，截取最后两位，组合返回
      age = ele
        .toString()
        .split("")
        .splice(-2)
        .join("");
      break;
    }
  }
  return age;
};
