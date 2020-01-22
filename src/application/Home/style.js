import styled from "styled-components";
import style from "../../assets/global-style";

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 10px;
  background: ${style["theme-color"]};
  & > span {
    line-height: 40px;
    color: #f1f1f1;
    font-size: 14px;
    &.iconfont {
      font-size: 25px;
    }
  }
`;
export const Tab = styled.div`
  height: 44px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: ${style["theme-color"]};
  a {
    flex: 1;
    padding: 2px 0;
    font-size: 14px;
    color: #e4e4e4;
    &.selected {
      span {
        padding: 3px 0;
        font-weight: 700;
        color: #f1f1f1;
        border-bottom: 2px solid #f1f1f1;
      }
    }
  }
`;
export const TabItem = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const NavContainer = styled.div`
  box-sizing: border-box;
  margin-top: 10px;
  width: 100%;
  padding: 0 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const ListIcon = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  white-space: nowrap;
  width: auto;
  min-width: 100%;
  .icon-list {
    min-width: 4rem;
    height: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    overflow: hidden;
    .icon {
      .home {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        background: linear-gradient(90deg,#ff5a4c,#ff1d11);
        display: table-cell;
        vertical-align: middle;
        text-align: center;
        color: #ffffff;
        font-size: 25px;
      }
    }

    .icon-text {
      font-size: ${style["icon-text"]};
      margin: 0 auto;
      color: gray;
      margin: 10px 0px;
    }
  }
  .icon-list:last-of-type {
    .icon {
      .home {
        background: #ccc;
        color: gray;
      }
    }
  }
}
`;

export const List = styled.div`
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  padding-left: 0.5rem;
  list-style: none;
`;

export const ListItem = styled.div`
  box-sizing: border-box;
  padding: 0.2rem 0;
  font-size: 1.1rem;
  height: 2.87rem;
  line-height: 2.87rem;
  display: flex;
  .home {
    font-size: 27px;
    margin: 0 20px;
  }
  .wrapper {
    border-bottom: 1px solid #eaeaea;
    flex: 1;
    .list-content {
      font-size: 17px;
      padding-right: 2px;
    }
    .num {
      font-size: ${style["icon-text"]};
      margin: 0 auto;
      color: #999;
    }
  }
`;
