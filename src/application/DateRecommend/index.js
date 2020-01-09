import React, { useRef, useState, useEffect } from "react";
import { connect } from "react-redux";
import Header from "../../baseUI/header/index";
import {
  Wrapper,
  Container,
  Nav,
  Title,
  ListInfo,
  SongList,
  SongItem
} from "./style";
import { getDateRecommendList } from "./store/actionCreators";
import { getName } from "../../api/utils";

function DateRecommend(props) {
  const headerEl = useRef();

  const [isMarquee, setIsMarquee] = useState(false);

  const month =
    new Date().getMonth() + 1 < 10
      ? "0" + (new Date().getMonth() + 1)
      : new Date().getMonth() + 1;
  const day =
    new Date().getDate() < 10
      ? "0" + new Date().getDate()
      : new Date().getDate();

  const loginState = localStorage.getItem("loginState");

  const { getDateRecommendListDataDispatch, dateRecommendList } = props;

  const dateRecommendListJS = dateRecommendList ? dateRecommendList.toJS() : [];
  const dailySongs = dateRecommendListJS.data
    ? dateRecommendListJS.data.dailySongs
    : [];

  useEffect(() => {
    if (!dateRecommendList.length) {
      getDateRecommendListDataDispatch();
    }
    // eslint-disable-next-line
  }, []);

  let songList = list => {
    let res = [];
    // 判断页数是否超过总数
    // let end = usePageSplit ? startIndex + ONE_PAGE_COUNT : list.length;
    for (let i = 0; i < list.length; i++) {
      if (i >= list.length) break;
      let item = list[i];
      res.push(
        <li key={item.id}>
          <span className="index">{i + 1}</span>
          <div className="info">
            <span>{item.name}</span>
            <span>
              {item.ar ? getName(item.ar) : getName(item.artists)} -{" "}
              {item.al ? item.al.name : item.album.name}
            </span>
          </div>
        </li>
      );
    }
    return res;
  };

  return (
    <Wrapper>
      <Container>
        <Header
          handleClick={() => {
            props.history.goBack();
          }}
          title="每日推荐"
          ref={headerEl}
          isMarquee={isMarquee}
          style={{ background: "#ee5253" }}
        ></Header>
        <Nav>
          <div className="date">
            <span className="day">{day}</span>
            <span className="month">{month}</span>
          </div>
          <div className="info">查收属于您的今日推荐</div>
        </Nav>
      </Container>
      <Title>
        <span>
          <span>
            <i className="iconfont">&#xe6e3;</i>
            <i className="date-song">播放全部</i>
          </span>
        </span>
        <span>
          <i className="icon-suiji">多选</i>
        </span>
      </Title>
      {!loginState && (
        <ListInfo>
          <div className="center">
            <p>当前未登录，请您跳转登陆页面进行登陆</p>
            <a href="#/user/login">点我去登陆</a>
          </div>
        </ListInfo>
      )}
      {loginState && (
        <SongList>
          <SongItem>{songList(dailySongs)}</SongItem>
        </SongList>
      )}
    </Wrapper>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    dateRecommendList: state.getIn(["dateRecommend", "dateRecommendList"])
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getDateRecommendListDataDispatch: () => {
      dispatch(getDateRecommendList());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DateRecommend);
