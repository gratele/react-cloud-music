import React, { useRef, useState, useEffect } from "react";
import { connect } from "react-redux";
import Header from "../../baseUI/header/index";
import {
  Container,
  Nav,
  ListInfo,
  SongListWrapper,
  BgLayer,
  Wrapper
} from "./style";
import {
  getDateRecommendList,
  changeEnterLoading
} from "./store/actionCreators";
import SongsList from "../../application/SongList/";
import MusicNote from "../../baseUI/music-note/index";
import Scroll from "../../baseUI/scroll/index";
import { HEADER_HEIGHT } from "./../../api/config";
import style from "../../assets/global-style";
import { EnterLoading } from "./../Singers/style";
import Loading from "./../../baseUI/loading-v2/index";

function DateRecommend(props) {
  const headerEl = useRef();
  const musicNoteRef = useRef();
  const songScroll = useRef();
  const songScrollWrapper = useRef();
  const NavRef = useRef();
  const layer = useRef();
  const initialHeight = useRef(0);
  const OFFSET = 5;

  const month =
    new Date().getMonth() + 1 < 10
      ? "0" + (new Date().getMonth() + 1)
      : new Date().getMonth() + 1;
  const day =
    new Date().getDate() < 10
      ? "0" + new Date().getDate()
      : new Date().getDate();

  const loginState = localStorage.getItem("loginState");
  const {
    getDateRecommendListDataDispatch,
    dateRecommendList,
    enterLoading
  } = props;

  const dateRecommendListJS = dateRecommendList ? dateRecommendList.toJS() : [];

  const dailySongs = dateRecommendListJS.data
    ? dateRecommendListJS.data.dailySongs
    : [];

  useEffect(() => {
    if (!dateRecommendListJS.length) {
      getDateRecommendListDataDispatch();
    }
    let h = NavRef.current.offsetHeight;
    initialHeight.current = h;
    headerEl.current.style.backgroundColor = style["theme-color"];

    if (loginState) {
      layer.current.style.top = `${h - OFFSET}px`;
      songScrollWrapper.current.style.top = `${h - OFFSET}px`;
      songScroll.current.refresh();
    }
    // eslint-disable-next-line
  }, []);

  const musicAnimation = (x, y) => {
    musicNoteRef.current.startAnimation({ x, y });
  };

  const handleScroll = pos => {
    let minScrollY = -HEADER_HEIGHT;
    let percent = Math.abs(pos.y / minScrollY);

    let headerDom = headerEl.current;
    const layerDOM = layer.current;
    let height = initialHeight.current;

    const newY = pos.y;
    if (newY > 0) {
      //处理往下拉的情况
      layerDOM.style.top = `${height - OFFSET + newY}px`;
    } else if (newY >= minScrollY) {
      //往上滑动，但是还没超过Header部分
      layerDOM.style.top = `${height - OFFSET - Math.abs(newY)}px`;
      layerDOM.style.zIndex = 1;
    } else if (newY < minScrollY) {
      //往上滑动，但是超过Header部分
      // layerDOM.style.top = `${HEADER_HEIGHT - OFFSET}px`;
      // layerDOM.style.zIndex = 1;
      //防止溢出的歌单内容遮住Header
      headerDom.style.zIndex = 100;
    }
  };

  return (
    <Wrapper>
      <Header
        handleClick={() => {
          props.history.goBack();
        }}
        title="每日推荐"
        ref={headerEl}
        isMarquee={false}
      ></Header>
      <Container>
        <Nav ref={NavRef}>
          <div className="date">
            <span className="day">{day}</span>
            <span className="month">{month}</span>
          </div>
          <div className="info">查收属于您的今日推荐</div>
        </Nav>
        {!loginState && (
          <ListInfo>
            <div className="center">
              <p>当前未登录，请您跳转登陆页面进行登陆</p>
              <a href="#/user/login">点我去登陆</a>
            </div>
          </ListInfo>
        )}
        {loginState && (
          <div>
            <BgLayer ref={layer}></BgLayer>
            <SongListWrapper ref={songScrollWrapper}>
              <Scroll onScroll={handleScroll} ref={songScroll}>
                <SongsList
                  songs={dailySongs}
                  showMultiSelect={true}
                  musicAnimation={musicAnimation}
                  showBackground={true}
                ></SongsList>
              </Scroll>
              {enterLoading ? (
                <EnterLoading>
                  <Loading></Loading>
                </EnterLoading>
              ) : null}
              <MusicNote ref={musicNoteRef}></MusicNote>
            </SongListWrapper>
          </div>
        )}
      </Container>
    </Wrapper>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    dateRecommendList: state.getIn(["dateRecommend", "dateRecommendList"]),
    enterLoading: state.getIn(["dateRecommend", "enterLoading"])
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getDateRecommendListDataDispatch: () => {
      dispatch(changeEnterLoading(true));
      dispatch(getDateRecommendList());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DateRecommend);
