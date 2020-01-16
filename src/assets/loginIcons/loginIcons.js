import { createGlobalStyle } from "styled-components";

export const IconLoginStyle = createGlobalStyle`
@font-face {font-family: "login";
  src: url('//at.alicdn.com/t/font_1322263_rqiqhmq0u9o.eot?t=1571885905570'); /* IE9 */
  src: url('//at.alicdn.com/t/font_1322263_rqiqhmq0u9o.eot?t=1571885905570#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('//at.alicdn.com/t/font_1322263_rqiqhmq0u9o.woff?t=1571885905570') format('woff'),
  url('//at.alicdn.com/t/font_1322263_rqiqhmq0u9o.ttf?t=1571885905570') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('//at.alicdn.com/t/font_1322263_rqiqhmq0u9o.svg?t=1571885905570#login') format('svg'); /* iOS 4.1- */
}

.login {
  font-family: "login" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.iconhuopiaotongxing:before {
  content: "\\e600";
}

.iconsaoyisao:before {
  content: "\\e618";
}

.iconhezi501:before {
  content: "\\e694";
}

.icongouwuche:before {
  content: "\\e656";
}

.icontinggeshiqu40x40:before {
  content: "\\e6e8";
}

.icondibiao:before {
  content: "\\e605";
}

.icondianyuan:before {
  content: "\\e731";
}

.iconpifu:before {
  content: "\\e635";
}

.iconicon--:before {
  content: "\\e70a";
}

.iconicon--1:before {
  content: "\\e72e";
}

.iconicon--2:before {
  content: "\\e730";
}

.icontaiyang:before {
  content: "\\e636";
}

.iconyueliang1:before {
  content: "\\e63e";
}

.icondingdan:before {
  content: "\\e601";
}

.iconCoupon:before {
  content: "\\e60f";
}

.iconwodexiaoxi:before {
  content: "\\e89f";
}

.iconmaikefeng:before {
  content: "\\e63d";
}

.icontubiaozhizuo-:before {
  content: "\\e606";
}

.iconyonghu:before {
  content: "\\e602";
}

.iconshezhi:before {
  content: "\\e691";
}

.iconyoujiantou:before {
  content: "\\e726";
}

.iconyouxi:before {
  content: "\\e60b";
}
`;
