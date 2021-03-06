import axios from "axios";

export const baseUrl = "http://localhost:3300";
// http://localhost:3300/login/cellphone?phone=18200130980&password=lehaixia0912
// "token": "fea0ab0db2ff5ab5701dc15b5678ca0be75b4f872a930d2a9fedbc77dca09988392855b748b56c4bd27bca9db770b58a41049cea1c6bb9b6",
// uid: 2102205859 user: grate_yue (18200130980) password: lehaixia0912
// axios的实例及拦截器配置
const axiosInstance = axios.create({
  baseURL: baseUrl,
  withCredentials: true //关键
});

axiosInstance.interceptors.response.use(
  res => res.data,
  err => {
    console.log(err, "网络错误");
  }
);

export { axiosInstance };

export const categoryTypes = [
  {
    name: "华语男",
    key: "1001"
  },
  {
    name: "华语女",
    key: "1002"
  },
  {
    name: "华语组合",
    key: "1003"
  },
  {
    name: "欧美男",
    key: "2001"
  },
  {
    name: "欧美女",
    key: "2002"
  },
  {
    name: "欧美组合",
    key: "2003"
  },
  {
    name: "日本男",
    key: "6001"
  },
  {
    name: "日本女",
    key: "6002"
  },
  {
    name: "日本组合",
    key: "6003"
  },
  {
    name: "韩国男",
    key: "7001"
  },
  {
    name: "韩国女",
    key: "7002"
  },
  {
    name: "韩国组合",
    key: "7003"
  },
  {
    name: "其他男歌手",
    key: "4001"
  },
  {
    name: "其他女歌手",
    key: "4002"
  },
  {
    name: "其他组合",
    key: "4003"
  }
];

//歌手首字母
export const alphaTypes = [
  {
    key: "A",
    name: "A"
  },
  {
    key: "B",
    name: "B"
  },
  {
    key: "C",
    name: "C"
  },
  {
    key: "D",
    name: "D"
  },
  {
    key: "E",
    name: "E"
  },
  {
    key: "F",
    name: "F"
  },
  {
    key: "G",
    name: "G"
  },
  {
    key: "H",
    name: "H"
  },
  {
    key: "I",
    name: "I"
  },
  {
    key: "J",
    name: "J"
  },
  {
    key: "K",
    name: "K"
  },
  {
    key: "L",
    name: "L"
  },
  {
    key: "M",
    name: "M"
  },
  {
    key: "N",
    name: "N"
  },
  {
    key: "O",
    name: "O"
  },
  {
    key: "P",
    name: "P"
  },
  {
    key: "Q",
    name: "Q"
  },
  {
    key: "R",
    name: "R"
  },
  {
    key: "S",
    name: "S"
  },
  {
    key: "T",
    name: "T"
  },
  {
    key: "U",
    name: "U"
  },
  {
    key: "V",
    name: "V"
  },
  {
    key: "W",
    name: "W"
  },
  {
    key: "X",
    name: "X"
  },
  {
    key: "Y",
    name: "Y"
  },
  {
    key: "Z",
    name: "Z"
  }
];

//排行榜编号
export const RankTypes = {
  "0": "云音乐新歌榜",
  "1": "云音乐热歌榜",
  "2": "网易原创歌曲榜",
  "3": "云音乐飙升榜",
  "4": "云音乐国电榜",
  "5": "UK排行榜周榜",
  "6": "美国Billboard周榜",
  "7": "KTV唛榜",
  "8": "iTunes榜",
  "9": "Hit FM Top榜",
  "10": "日本Oricon周榜",
  "11": "韩国Melon排行榜周榜",
  "12": "韩国Mnet排行榜周榜",
  "13": "韩国Melon原声周榜",
  "14": "中国TOP排行榜（港台榜）",
  "15": "中国TOP排行榜（内地榜）",
  "16": "香港电台中文歌曲龙虎榜",
  "17": "华语金曲榜",
  "18": "中国嘻哈榜",
  "19": "法国 NRJ Vos Hits 周榜",
  "20": "台湾Hito排行榜",
  "21": "Beatport全球电子舞曲榜",
  "22": "云音乐ACG音乐榜",
  "23": "江小白YOLO云音乐说唱榜"
};

//歌单一页限定歌曲数量
export const ONE_PAGE_COUNT = 50;

//顶部的高度
export const HEADER_HEIGHT = 45;

//播放模式
export const playMode = {
  sequence: 0,
  loop: 1,
  random: 2
};
export const homeIcons = [
  {
    text: "私藏推荐",
    icon: "home iconxindian"
  },
  {
    text: "私人FM",
    icon: "home iconshouyinji"
  },
  {
    text: "Sati空间",
    icon: "home iconyueliang"
  },
  {
    text: "最新电音",
    icon: "home iconduodian"
  },
  {
    text: "因乐交友",
    icon: "home iconjiaoyou"
  },
  {
    text: "亲子频道",
    icon: "home iconertong"
  },
  {
    text: "古典专区",
    icon: "home icongangqin"
  },
  {
    text: "跑步FM",
    icon: "home iconorder-received"
  },
  {
    text: "小冰电台",
    icon: "home iconbingjiling"
  },
  {
    text: "爵士电台",
    icon: "home iconyandou"
  },
  {
    text: "驾驶模式",
    icon: "home iconqiche"
  },
  {
    text: "编辑",
    icon: "home icontoggle"
  }
];

export const homeList = [
  {
    icon: "iconyinyue",
    text: "本地音乐",
    num: 0
  },
  {
    icon: "iconzuijinbofang",
    text: "最近播放",
    num: 0
  },
  {
    icon: "iconxiazai",
    text: "下载管理",
    num: 0
  },
  {
    icon: "icondiantai",
    text: "我的电台",
    num: 0
  },
  {
    icon: "iconicon-31",
    text: "我的收藏",
    num: 0
  }
];

export const findIcons = [
  {
    text: "每日推荐",
    icon: "find rili",
    linkTo: "dateRecommend"
  },
  {
    text: "歌单",
    icon: "find gedan",
    linkTo: "singers"
  },
  {
    text: "排行榜",
    icon: "find paixingbang",
    linkTo: "rank"
  },
  {
    text: "电台",
    icon: "find diantai",
    linkTo: "dj"
  },
  {
    text: "私人FM",
    icon: "find shouyin",
    linkTo: "personalFm"
  }
];

export const djIcons = [
  {
    text: "电台分类",
    icon: "dj dj-caidan1",
    linkTo: "classification"
  },
  {
    text: "电台排行",
    icon: "dj dj-paixing",
    linkTo: "ranking"
  },
  {
    text: "付费精品",
    icon: "dj dj-gerenzhongxin_wodeguizu",
    linkTo: "pay_fine"
  },
  {
    text: "主播学院",
    icon: "dj dj-shucopy",
    linkTo: "anchor_college"
  }
];

export const loginIcons = [
  {
    icon: "login iconwodexiaoxi",
    text: "我的消息"
  },
  {
    icon: "login iconyonghu",
    text: "我的好友"
  },
  {
    icon: "login iconpifu",
    text: "个性皮肤"
  },
  {
    icon: "login icontinggeshiqu40x40",
    text: "听歌识曲"
  }
];

export const loginIconsTop = [
  {
    icon: "iconhuopiaotongxing",
    text: "演出"
  },
  {
    icon: "icongouwuche",
    text: "商城"
  },
  {
    icon: "icondibiao",
    text: "附近的人"
  },
  {
    icon: "iconicon--",
    text: "口袋铃声"
  },
  {
    icon: "icondingdan",
    text: "我的订单"
  }
];

export const loginIconsBottom = [
  {
    icon: "iconicon--2",
    text: "定时停止播放"
  },
  {
    icon: "iconsaoyisao",
    text: "扫一扫"
  },
  {
    icon: "iconicon--1",
    text: "音乐闹钟"
  },
  {
    icon: "iconhezi501",
    text: "在线听歌免流量"
  },
  {
    icon: "iconyouxi",
    text: "游戏推荐"
  },
  {
    icon: "iconCoupon",
    text: "优惠券"
  },
  {
    icon: "iconmaikefeng",
    text: "我要直播"
  }
];
