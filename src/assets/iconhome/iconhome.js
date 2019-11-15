import { createGlobalStyle } from 'styled-components';

export const IconHomeStyle = createGlobalStyle`
@font-face {font-family: "home";
    src: url('//at.alicdn.com/t/font_1322300_t3s39ptd6ao.eot?t=1569558939537'); /* IE9 */
    src: url('//at.alicdn.com/t/font_1322300_t3s39ptd6ao.eot?t=1569558939537#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
    url('//at.alicdn.com/t/font_1322300_t3s39ptd6ao.woff?t=1569558939537') format('woff'),
    url('//at.alicdn.com/t/font_1322300_t3s39ptd6ao.ttf?t=1569558939537') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('//at.alicdn.com/t/font_1322300_t3s39ptd6ao.svg?t=1569558939537#home') format('svg'); /* iOS 4.1- */
  }
  
  .home {
    font-family: "home" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .iconshouyinji:before {
    content: "\\e600";
  }
  
  .icondiandiandian:before {
    content: "\\e662";
  }
  
  .iconxindian:before {
    content: "\\e603";
  }
  
  .iconicon-31:before {
    content: "\\e620";
  }
  
  .iconduodian:before {
    content: "\\e68d";
  }
  
  .iconyinyue:before {
    content: "\\e680";
  }
  
  .iconxiazai:before {
    content: "\\e60c";
  }
  
  .icondiantai:before {
    content: "\\e65e";
  }
  
  .iconqiche:before {
    content: "\\e6c5";
  }
  
  .iconorder-received:before {
    content: "\\e601";
  }
  
  .iconyueliang:before {
    content: "\\e604";
  }
  
  .iconjiaoyou:before {
    content: "\\e9e8";
  }
  
  .icongangqin:before {
    content: "\\e61d";
  }
  
  .iconxin:before {
    content: "\\e84a";
  }
  
  .icontoggle:before {
    content: "\\e602";
  }
  
  .iconincrease:before {
    content: "\\e605";
  }
  
  .iconbingjiling:before {
    content: "\\e615";
  }
  
  .iconyandou:before {
    content: "\\e606";
  }
  
  .iconarrow:before {
    content: "\\e621";
  }
  
  .iconzuijinbofang:before {
    content: "\\e607";
  }
  
  .iconertong:before {
    content: "\\e60d";
  }
  
  .iconxintiao:before {
    content: "\\e610";
  }
  
  .iconsuo:before {
    content: "\\e608";
  }
`