import styled from "styled-components";
import style from "../../assets/global-style";

export const Wrapper = styled.div`
  height: 100vh;
  position: relative;
  overflow: scroll;
  background: #fff;
`;

export const Container = styled.div`
  //   height: 10.6rem;
  width: 100%;
  color: #fff;
  background-color: #ee5253;
`;

export const Nav = styled.div`
  padding: 50px 15px 20px;
  box-sizing: border-box;
  .date {
    padding-top: 1.5rem;
    .day {
      font-size: 2.7rem;
    }
    .month {
      font-size: 1.4rem;
      color: #c8d6e5;
      &:before {
        content: "/";
      }
    }
  }
  .info {
    margin-top: 2.7rem;
  }
`;

export const Title = styled.div`
  height: 3rem;
  line-height: 3rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  background-color: #fff;
  span {
    margin: 0 5px
    height: 3rem;
    line-height: 3rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    background-color: #fff;
    i {
        margin-left: 5px
    }
  }
  .date-song {
    font-family: "date-song" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
  }
  .icon-suiji:before {
    content: "\\e61b";
  }
`;

export const ListInfo = styled.div`
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 40px 50px;
  background-color: #fff;
  -webkit-transform: translate3d(0, -0.5rem, 0);
  transform: translate3d(0, -0.5rem, 0);
  .center {
    text-align: center;
  }
  p {
    margin: 10px 0;
  }
  a {
    color: #25a4bb;
  }
`;

export const SongList = styled.div`
  border-radius: 10px;
  opacity: 0.98;
  ${props =>
    props.showBackground
      ? `background: ${style["highlight-background-color"]}`
      : ""}
  .first_line {
    box-sizing: border-box;
    padding: 10px 0;
    margin-left: 10px;
    position: relative;
    justify-content: space-between;
    border-bottom: 1px solid ${style["border-color"]};
    .play_all {
      display: inline-block;
      line-height: 24px;
      color: ${style["font-color-desc"]};
      .iconfont {
        font-size: 24px;
        margin-right: 10px;
        vertical-align: top;
      }
      .sum {
        font-size: ${style["font-size-s"]};
        color: ${style["font-color-desc-v2"]};
      }
      > span {
        vertical-align: top;
      }
    }
    .add_list,
    .isCollected {
      display: flex;
      align-items: center;
      position: absolute;
      right: 0;
      top: 0px;
      bottom: 0;
      width: 130px;
      line-height: 34px;
      background: ${style["theme-color"]};
      color: ${style["font-color-light"]};
      font-size: 0;
      border-radius: 3px;
      vertical-align: top;
      .iconfont {
        vertical-align: top;
        font-size: 10px;
        margin: 0 5px 0 10px;
      }
      span {
        font-size: 14px;
        line-height: 34px;
      }
    }
    .isCollected {
      display: flex;
      background: ${style["background-color"]};
      color: ${style["font-color-desc"]};
    }
  }
`;

export const SongItem = styled.ul`
  > li {
    display: flex;
    height: 60px;
    align-items: center;
    .index {
      flex-basis: 60px;
      width: 60px;
      height: 60px;
      line-height: 60px;
      text-align: center;
    }
    .info {
      box-sizing: border-box;
      flex: 1;
      display: flex;
      height: 100%;
      padding: 5px 0;
      flex-direction: column;
      justify-content: space-around;
      border-bottom: 1px solid ${style["border-color"]};
      ${style.noWrap()}
      >span {
        ${style.noWrap()}
      }
      > span:first-child {
        color: ${style["font-color-desc"]};
      }
      > span:last-child {
        font-size: ${style["font-size-s"]};
        color: #bba8a8;
      }
    }
  }
`;
