import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  position: relative;
  background: #fff;
  color: #2e3030;
`;

export const Container = styled.div`
  color: #fff;
  position: fixed;
  top: 45px;
  left: 0;
  right: 0;
  bottom: ${props => (props.play > 0 ? "60px" : 0)};
  width: 100%;
  z-index: 100;
  overflow: hidden;
  transform-origin: right bottom;
  &.fly-enter,
  &.fly-appear {
    transform: rotateZ(30deg) translate3d(100%, 0, 0);
  }
  &.fly-enter-active,
  &.fly-appear-active {
    transition: transform 0.3s;
    transform: rotateZ(0deg) translate3d(0, 0, 0);
  }
  &.fly-exit {
    transform: rotateZ(0deg) translate3d(0, 0, 0);
  }
  &.fly-exit-active {
    transition: transform 0.3s;
    transform: rotateZ(30deg) translate3d(100%, 0, 0);
  }
`;

export const Nav = styled.div`
  padding: 50px 15px 20px;
  box-sizing: border-box;
  background-color: #ee5253;
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

export const ListInfo = styled.div`
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 40px 36px;
  background-color: #fff;
  -webkit-transform: translate3d(0, -0.5rem, 0);
  transform: translate3d(0, -0.5rem, 0);
  z-index: 101;
  color: #2e3030;
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

export const SongListWrapper = styled.div`
  position: absolute;
  z-index: 50;
  top: 0;
  left: 0;
  bottom: ${props => (props.play ? "60px" : 0)};
  right: 0;
  color: #2e3030;
  > div {
    position: absolute;
    left: 0;
    width: 100%;
    overflow: visible;
  }
`;

export const BgLayer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  background: white;
  border-radius: 10px;
  z-index: 50;
`;
