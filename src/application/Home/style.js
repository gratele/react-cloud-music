import styled from 'styled-components';
import style from '../../assets/global-style';

export const Top = styled.div `
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
export const Tab = styled.div `
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
export const TabItem = styled.div `
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const NavContainer = styled.div `
  box-sizing: border-box;
  // position: fixed;
  // top: 75px;
  margin-top: 10px;
  width: 100%;
  padding: 0 5px;
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
      justify-content: space-around;
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

export const Wrapper = styled.div `
  box-sizing: border-box;
  padding: 0.2rem 0 0;
  margin-top: 10px;
  overflow: hidden;
  // height: 2.8rem;
  // 定义可左右滑动的图标组
  .container {
    box-sizing: border-box
      .list-item {
        display: flex;
        justify-content: space-between;
        margin: 0.1rem 0;
        line-height: 2.76rem;
        position: relative;
        overflow: hidden;
        user-select: none;
        &:after {
          position: absolute;
          content: '';
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          //设置径向渐变
          background-image: radial-gradient(circle, #666 10%, transparent 10.01%);
          background-repeat: no-repeat;
          background-position: 50%;
          transform: scale(10, 10);
          opacity: 0;
          transition: transform .5s, opacity .6s;
        }
    
        &:last-child .wrapper::before {
          border: none;
        }
        .list-content {
          font-size: 16px;
        }
        .wrapper {
          flex: 1;
          .num {
            font-size: 0.24rem;
            color: #999;
          }
        }
        .home {
          font-size: 25px;
          margin: 0 0.4rem;
        }
      }
    }
`