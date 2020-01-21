import styled from "styled-components";
import style from "../../assets/global-style";

export const Data = styled.div`
  position: absolute;
  left: 1rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  padding-right: 0.8rem;
  margin-top: -65px;
  z-index: 50;
  .name {
    color: #fff;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    -webkit-box-orient: vertical;
    font-size: 1rem;
    line-height: 2;
  }
  .num {
    font-size: 0.8rem;
    color: #999;
  }
  .subscription {
    font-size:0.9rem
    box-sizing: border-box;
    position: absolute;
    right: 2rem;
    bottom: 0;
    display: flex;
    padding: 0 1rem;
    height: 2rem;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-color: #dd001b;
    border-radius: 1rem;
    .icon {
      margin-right: 0.5rem;
    }
  }
  .subscription1 {
    font-size: 0.9rem;
    box-sizing: border-box;
    position: absolute;
    right: 2rem;
    bottom: 0;
    display: flex;
    padding: 0 1rem;
    height: 2rem;
    align-items: center;
    justify-content: center;
    color: #fff;
    border-radius: 1rem;
    border: 1px solid #fff;
    .icon {
      margin-right: 0.5rem;
    }
  }
`;

export const Title = styled.div`
  height: 2.8rem;
  line-height: 2.8rem;
  background-color: #fff;
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
  display: flex;
  transform: translateY(-0.7rem);
  .content {
    flex: 1;
    text-align: center;
  }
  .num {
    font-size: 0.24rem;
    color: #999;
  }
  .under-line {
    position: relative;
    padding-bottom: 0.25rem;
  }

  .under-line::before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: #fc2f70;
    transform-origin: center;
    transform: translate(-50%, 0) scaleX(0);
    transition: transform 0.3s ease-in-out;
  }
  .under-line.active::before {
    transform: translate(-50%, 0) scaleX(1);
  }
`;

export const Detail = styled.div`
  padding: 0 1.23rem;
  .anchor,
  .dj-content {
    font-weight: 700;
    line-height: 1.5;
    margin: 0.5rem 0;
  }
  .content {
    display: flex;
    align-items: center;
    .img-info {
      width: 3rem;
      height: 3rem;
      padding-bottom: 1rem;
      margin-right: 0.5rem;
      img {
        border-radius: 50%;
        width: 3rem;
        height: 3rem;
      }
    }
    .artist {
      display: flex;
      flex-direction: column;
      line-height: 1.5;
      .dec {
        font-size: 0.23rem;
        color: #999;
      }
    }
  }
  .class {
    font-size: 0.23rem;
    line-height: 1.5;
    span {
      line-height: 1.5rem;
      font-size: 0.23rem;
      padding-right: 0.3rem;
    }
    .tag {
      color: #dd001b;
      box-sizing: border-box;
      padding: 2px;
      border-radius: 4px;
      border: 1px solid #dd001b;
    }
  }
  .text {
    font-size: 0.23rem;
    color: #999;
    margin-top: 0.13rem;
    line-height: 1.5;
  }
`;

export const TopDesc = styled.div`
  background-size: 100%;
  padding: 5px 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 375px;
  position: relative;
  .background {
    z-index: -1;
    background: url(${props => props.background}) left top no-repeat;
    background: contain;
    background-position: 0 0;
    background-size: 100% 100%;
    position: absolute;
    width: 100%;
    height: 100%;
    .filter {
      position: absolute;
      z-index: 10;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(7, 17, 27, 0.2);
    }
  }
`;
