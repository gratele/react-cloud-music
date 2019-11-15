import { createGlobalStyle } from 'styled-components';

export const IconFindStyle = createGlobalStyle`
@font-face {font-family: "find";
    src: url('//at.alicdn.com/t/font_1295705_yfxum6q2gip.eot?t=1567740486119'); /* IE9 */
    src: url('//at.alicdn.com/t/font_1295705_yfxum6q2gip.eot?t=1567740486119#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
    url('//at.alicdn.com/t/font_1295705_yfxum6q2gip.woff?t=1567740486119') format('woff'),
    url('//at.alicdn.com/t/font_1295705_yfxum6q2gip.ttf?t=1567740486119') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('//at.alicdn.com/t/font_1295705_yfxum6q2gip.svg?t=1567740486119#find') format('svg'); /* iOS 4.1- */
  }
  
  .find {
    font-family: "find" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  .shouyin:before {
    content: "\\e600";
  }
  
  .diantai:before {
    content: "\\e6f4";
  }
  
  .paixingbang:before {
    content: "\\e608";
  }
  
  .bofang:before {
    content: "\\e622";
  }
  
  .zhibo:before {
    content: "\\e64a";
  }
  
  .gedan:before {
    content: "\\e78a";
  }
  
  .rili:before {
    content: "\\e648";
  }  `