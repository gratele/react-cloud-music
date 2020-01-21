import { createGlobalStyle } from "styled-components";

export const IconDateSongStyle = createGlobalStyle`
@font-face {font-family: "date-song";
  src: url('//at.alicdn.com/t/font_1394963_t6jt71rtm9.eot?t=1569216780894'); /* IE9 */
  src: url('//at.alicdn.com/t/font_1394963_t6jt71rtm9.eot?t=1569216780894#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('//at.alicdn.com/t/font_1394963_t6jt71rtm9.woff?t=1569216780894') format('woff'),
  url('//at.alicdn.com/t/font_1394963_t6jt71rtm9.ttf?t=1569216780894') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('//at.alicdn.com/t/font_1394963_t6jt71rtm9.svg?t=1569216780894#date-song') format('svg'); /* iOS 4.1- */
}

.date-song {
  font-family: "date-song" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.iconfontjiantou5:before {
  content: "\\e635";
}

.pinglun:before {
  content: "\e607";
}

.diandiandian:before {
  content: "\\e662";
}

.wenjianjia:before {
  content: "\\e6ea";
}

.fenxiang:before {
  content: "\\e64e";
}

.caidan:before {
  content: "\\e61b";
}

.bofang:before {
  content: "\\e622";
}

.cbofang:before {
  content: "\\e710";
}

.duoxuankuang:before {
  content: "\\e62e";
}

.xiazai:before {
  content: "\\e631";
}
`;

export const IconDjSublistStyle = createGlobalStyle`@font-face {font-family: "dj_sublist";
src: url('//at.alicdn.com/t/font_1443044_ba7y88tq60o.eot?t=1570167138419'); /* IE9 */
src: url('//at.alicdn.com/t/font_1443044_ba7y88tq60o.eot?t=1570167138419#iefix') format('embedded-opentype'), /* IE6-IE8 */
url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAMIAAsAAAAABxQAAAK6AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDBgqBYIFIATYCJAMMCwgABCAFhQUHPBssBsguIScb6ggCOsXypHQYgB9wLU6FxgPfWvpnZ4/2LimQAwRHrPqiyqyqAqpljUK1jlARkCS4XMsHNmqFenL/issKFR5sMrnwZq+kRCtMpa8x3IAAQttzYWWsH+AcO+WF6X8hYChwOO0CBfQGIr1/7B4OMLCA/sUokgcSeAlZw9hNBA7hMgGZ1noKow/OLhsDKTArICxXMmsMch6p1IoXBfmajamwQ1cx2Zhc1rCdvz98Mg9FErkILJy+cF82Vm+9bR9r/3NDCbjzmWBtI6InUsLM2kiNtmDRokzSaU/PSwXJXP7/wzmhKA//8EgEQh7IrYCuWjThbSvMSaXtVd5d50WQ9xpZIzARUDQf64yxeUX9SWbF8PqxT692f3lzq895v++q29ny9W3ZNwYdvtVm783BB67XpHc8fXHYxMWkTsNk/9XqL+emNPJww8t7D1o/uNf3xtl7zLHK8TNnjldob6Q/9EED/8UzEY89WbvTz/2MJWu+msXIr6TgwYlfc1X3f6n+WYoSLO6v5PZsS0M+0MbU52BObIs63lY4QRba/Q84mno6XtHidk1BluNaSBS0QZTpTEypfZFTNhx5mTHI9DBte1kzG7SFtITutioImjuMRLVLiJp7QEypX5DTMgTkNQ+tkJkRehxY1jnUZaMIM8YS5r7AksI7gT7Bo/nVfapzoxKfo6xNRoUy+cg1UlLeQb/efSvih+iQ5lqy7lHO17OAheQtjJ30OjTGw2ryFRY8Xswcln36LKy703iet42RUQjKMFQCc70ASxQ8R9DvzEbmq9xLajlDSdg5JNWMDLXWLNOvIZKoeQcH/fTWtxfxUOJ6Vt3bLes8kubWYwJYiHgWGLvbccgwPLC6flwFFdjY4hGhYKkP7Lawr2R8apn91n2QAYfEkIQYUoW5XmROzorzFWNjdaMBAAA=') format('woff2'),
url('//at.alicdn.com/t/font_1443044_ba7y88tq60o.woff?t=1570167138419') format('woff'),
url('//at.alicdn.com/t/font_1443044_ba7y88tq60o.ttf?t=1570167138419') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
url('//at.alicdn.com/t/font_1443044_ba7y88tq60o.svg?t=1570167138419#dj_sublist') format('svg'); /* iOS 4.1- */
}

.dj_sublist {
font-family: "dj_sublist" !important;
font-size: 16px;
font-style: normal;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}

.dj_sublist_bofang1:before {
content: "\\e622";
}

.dj_sublist_diandian:before {
content: "\\e617";
}`;
