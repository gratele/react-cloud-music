import styled from "styled-components";
import style from "../../assets/global-style";

export const ListWrapper = styled.div`
  max-width: 100%;
  .title {
    font-weight: 700;
    padding-left: 6px;
    font-size: 15px;
    line-height: 60px;
    color: ${style["font-color"]};
  }
`;
export const List = styled.div`
  width: 100%;
  //   display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const ListItem = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  margin: 0 5px;
  padding: 5px 0;
  align-items: center;
  border-bottom: 1px solid ${style["border-color"]};
  .img_wrapper {
    margin-right: 20px;
    img {
      border-radius: 10px;
      width: 70px;
      height: 70px;
    }
  }
  .content {
    min-width: 3rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .name {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 1.5;
    }
    .dec {
      display: flex;
      align-items: center;
      color: #aaa;
      &.hotRank {
        flex-direction: column;
        align-items: baseline;
        justify-content: center;
        line-height: 1.5;
        .name {
          &::after {
            content: "";
          }
        }
      }
      .name {
        display: flex;
        align-items: center;
        .img-info {
          width: 2rem;
          height: 0;
          padding-bottom: 2rem;
          padding-right: 0.5rem;
          img {
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
          }
        }
        &::after {
          content: "|";
        }
      }
    }
  }
  .icon {
    .publicbofang1 {
      color: #aaa;
      font-size: 2rem;
    }
  }
  .name {
    font-size: ${style["font-size-m"]};
    color: ${style["font-color-desc"]};
    font-weight: 500;
  }
`;
