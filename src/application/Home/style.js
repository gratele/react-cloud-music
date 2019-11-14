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
  top: 95px;
  width: 100%;
  padding: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .icons-group {
    // flex布局 溢出不换行
    height: 1.5rem;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    white-space: nowrap;
    width: auto;
    min-width: 100%;
    .icon-list {
        // 每项 icon 样式
        min-width: 1.6rem;
        height: 100%;
        .flex-around();
        flex-direction: column;
        align-items: center;
        .icon {
          width: @iconWidth * 0.72;
          height: @iconWidth * 0.72;
          line-height: @iconWidth * 0.72;
          .icons();
          .home {
            font-size: 0.4rem;
          }
        }
        .exit-icon {
          background: #ccc;
        }
        .icon-text {
          font-size: @iconText;
        }
      }
  }
`;