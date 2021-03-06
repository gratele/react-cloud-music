import styled from "styled-components";
import style from "../../assets/global-style";

export const SliderContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin: auto;
  padding-bottom: 10px;
  .before {
    position: absolute;
    top: -300px;
    height: 300px;
    width: 100%;
    // background: ${style["theme-color"]};
    z-index: 1;
  }
  .slider-container {
    position: relative;
    height: 160px;
    overflow: hidden;
    margin: 0 10px;
    border-radius: 6px;
    .slider-nav {
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
    }
    .swiper-pagination-bullet-active {
      background: ${style["theme-color"]};
    }
  }
`;
