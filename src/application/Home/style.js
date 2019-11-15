import styled from 'styled-components';
import style from '../../assets/global-style';

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 10px;
  background: ${style["theme-color"]};
  &>span {
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
  a{
    flex: 1;
    padding: 2px 0;
    font-size: 14px;
    color: #e4e4e4;
    &.selected{
      span{
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
  position: fixed;
  top: 75px;
  width: 100%;
  padding: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .icons-group {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    white-space: nowrap;
    width: auto;
    min-width: 100%;
    .icon-list {
        min-width: 3rem;
        height: 100%;
        .flex-around();
        flex-direction: column;
        align-items: center;
        padding:0 10px;
        overflow: hidden;
        .home {
          width:2.6rem;
          height:2.6rem;
          border-radius:50%;
          background: #FF3333;
          display: table-cell; 
          vertical-align:middle; 
          text-align:center; 
          color: #ffffff;
          font-size: 25px;
        }
        .icon-text {
          font-size: ${style["icon-text"]};
          margin: 0 auto;
          color: gray
        }
      }
      .icon-list:last-of-type{
        .home {
          background: #ccc;
          color: gray;
        }
        .icon-text {
          padding: 10px;
        }
      }
  }
`;

