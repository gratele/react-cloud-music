import { createGlobalStyle } from "styled-components";

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
  }  `;

export const IconDjStyle = createGlobalStyle`
  @font-face {font-family: "dj";
  src: url('//at.alicdn.com/t/font_1452410_k59z7sgowgp.eot?t=1570858006383'); /* IE9 */
  src: url('//at.alicdn.com/t/font_1452410_k59z7sgowgp.eot?t=1570858006383#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('//at.alicdn.com/t/font_1452410_k59z7sgowgp.woff?t=1570858006383') format('woff'),
  url('//at.alicdn.com/t/font_1452410_k59z7sgowgp.ttf?t=1570858006383') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('//at.alicdn.com/t/font_1452410_k59z7sgowgp.svg?t=1570858006383#dj') format('svg'); /* iOS 4.1- */
}

.dj {
  font-family: "dj" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.dj-paixing:before {
  content: "\\e632";
}

.dj-bofang:before {
  content: "\\e771";
}

.dj-gerenzhongxin_wodeguizu:before {
  content: "\\e61f";
}

.dj-bofang1:before {
  content: "\\e603";
}

.dj-caidan1:before {
  content: "\\e600";
}

.dj-huo:before {
  content: "\\e660";
}

.dj-arrow-right:before {
  content: "\\e601";
}

.dj-refresh:before {
  content: "\\e602";
}

.dj-shucopy:before {
  content: "\\e610";
}
`;

export const IconDjPublicStyle = createGlobalStyle`
@font-face {font-family: "dj-public";
  src: url('//at.alicdn.com/t/font_1463228_6ejm47f2r6h.eot?t=1575349419189'); /* IE9 */
  src: url('//at.alicdn.com/t/font_1463228_6ejm47f2r6h.eot?t=1575349419189#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAV4AAsAAAAACqAAAAUsAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDTgqHdIY6ATYCJAMcCxAABCAFhHkHXxsNCREVpEWRfSTGMZT/yxRLLG6Chz6n+b6+TFKIlxxAXoRg0VkglFuOWzYsER2B7JTYxVunx27uW/t9XCuTaN+0Yl37yqzfzb29WSSEQEiETMj8zzHjpQ947wP4Olpo4AOJaNuugY8KCE/Iz0I8c+mEgIV/xnEIQGMweYihw8e2YUVFsARi5s+Z1YO1IEbtwAmsPHPDUhXxCSasyvvKA+Bj//vib0qEFRRMEnHSxJnDptMUJOiQRr/BK/JNjP0pgdEqkEAeoIJY2ahejIzuPCTaYneVoYCGFQUlSNAUzAw6+vthiZX0K3JqaITJdDAjMaEs/3gIM4IdAkyXxwxBNDnjSLDwHBVCTKBCiAJOJoQIcBygvk1si10SBoSDKAWxFcHPO5ZaoD6LTyciIhLibaEpISHxMjdbTVkXcf7JQGXH0/LIS8+HyJ3PujdfT4s4eDNJbruVGXngRuJi4dx6UOs9vBk0oRN/Sncd2LIF2nsLjgrnc931FI0tJ3TXofhhm9P2d/QeBj3OebSno03r0Ns7laNt3UxvXLKj1hsz3W3E1ntc8bPMhkfXXT5hmVGY2uhzrvP/2hb4rf2L3zv7gqs5syMQ84Sau8z19sa43SiGJ9blcfnip/l8wumNc8ienr6+ji++6DyUec308B2KPRBoD7QdGxBvDgTw+9vccY/6CvYEYj0J7v1r/f6q/WkP/G2BQPvJPqLhgCfWPSdu6XD2NRx+0hyQ4d0a/0XHIOHlSCI6Z3hiBVM/P6PPGddw6F7TLU6vpvW6Mc8srKhzGzVL48c32WWOtDf5EQM3aq2nx59u1XLYR3/DgvR3x4VFnd2R6SgJ5OcdP5cX/c+/3YnvfKjW7Hslv9yVV7y+YatZ/zEh4vXxliPjNmVcj3+cZJ5tGvhd/qXc3bJr6TB/YdHe3L0lOXuLGCF3G1V37V1dKcVNTcUha9raZ8bMjFoZvVLXJ2jfacV6m4khISujZ6bMjMEujS9NdrvpSy602w09Swj9/OF91WpVwbg/JIKebD9469DwoUadabmpzlDLbcWljVda19nMG4f6/wPKQrbwf+Mp+cc36j6mjPA0V9YXnnRML5gxZtW5Lzd0prcntupj0++uu3eopXKEu431n9/bkPPrpaUjO0dXZg598OLNGk3IlcWOaTNO5IctqFnHMGXV9hNr42eHOYd0VCdNepEUX7ete2hP5rJdYlp9waLrcZOGj9RXlVSXLEzuKhjeSuMOo85g2Q/XLVmI6KmiJEC/Id3S4INvyb3yTQB5R+xsIkrqP3cY8w/9cu318Lr/rPqH1PZ1SOgxb+43VLbzWFGATPmfUogN6pImJBZ1Xl6TiXgLMzB/QQE0NOAfqo/i+/1xY8nRILARm4GChcEgsZGOUDEFYEKnEszYaAGNXMas1olmJRKh2oAc3mcgiOIcKISZ+YENzvlFbGL+YItr/mGbc3EE+7yLmy0PuBVl/y6jYNQgv8Erqo26gPd16DZFJq+e0ZYkcpEeJr1jbj3VMOwNqr4nrDHvZ0b7YUfMBkymCh53eBqmRNBkCqi455ibVb9vmp6pp6jq7HNHBhEwiAaQfAN4FESNsYuZfTSBLg0FSer6vWcQSyEhyKxMJfgdJNMuSHvsDBjSY0BBPLFrWslzSm75wDKCpdIAOjtDVACPZ6lEElcSsCQ1KwMIN9PDbeFsWNGXrQyV3btabvVqM0EFYrZFKEIKVZiEWViEla2Hd9NwvhO8qJnKjiQjajvccIV2Hdb2q4m726Iadjo=') format('woff2'),
  url('//at.alicdn.com/t/font_1463228_6ejm47f2r6h.woff?t=1575349419189') format('woff'),
  url('//at.alicdn.com/t/font_1463228_6ejm47f2r6h.ttf?t=1575349419189') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('//at.alicdn.com/t/font_1463228_6ejm47f2r6h.svg?t=1575349419189#dj-public') format('svg'); /* iOS 4.1- */
}

.dj-public {
  font-family: "dj-public" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.publicico17:before {
  content: "\\e627";
}

.publicjiantou:before {
  content: "\\e605";
}

.publicbofang1:before {
  content: "\\e603";
}

.publichuo:before {
  content: "\\e660";
}

.publichengxian:before {
  content: "\\e604";
}

.publicjiantou1:before {
  content: "\\e600";
}`;
