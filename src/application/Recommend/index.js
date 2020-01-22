import React, { useEffect } from "react";
import Slider from "../../components/slider/";
import { connect } from "react-redux";
import * as actionTypes from "./store/actionCreators";
import RecommendList from "../../components/list/";
import Scroll from "../../baseUI/scroll/index";
import { Content } from "./style";
import { forceCheck } from "react-lazyload";
import { renderRoutes } from "react-router-config";
import { EnterLoading, Error } from "./../Singers/style";
import Loading from "../../baseUI/loading-v2/index";
import FindIconsList from "../../components/findIconsList";
import { findIcons } from "../../api/config";

function Recommend(props) {
  const {
    bannerList,
    recommendList,
    songsCount,
    enterLoading,
    recommendListErrorMessage
  } = props;

  const {
    getBannerDataDispatch,
    getRecommendListDataDispatch,
    getErrorDispatch
  } = props;

  useEffect(() => {
    if (!bannerList.size) {
      getBannerDataDispatch();
    }
    if (!recommendList.size) {
      getRecommendListDataDispatch();
    }
  }, []);

  const bannerListJS = bannerList ? bannerList.toJS() : [];
  const recommendListJS = recommendList ? recommendList.toJS() : [];

  return (
    <Content play={songsCount}>
      <Scroll className="list" onScroll={forceCheck}>
        <div>
          <Slider bannerList={bannerListJS}></Slider>
          <FindIconsList iconsList={findIcons}></FindIconsList>
          <RecommendList
            title="推荐歌单"
            recommendList={recommendListJS}
            path="recommend"
          ></RecommendList>
        </div>
      </Scroll>
      {enterLoading && !recommendListErrorMessage ? (
        <EnterLoading>
          <Loading></Loading>
        </EnterLoading>
      ) : null}
      {recommendListErrorMessage ? (
        <EnterLoading>
          <Error>
            <span
              onClick={() => {
                getErrorDispatch();
                if (!bannerList.size) {
                  getBannerDataDispatch();
                }
                if (!recommendList.size) {
                  getRecommendListDataDispatch();
                }
              }}
            >
              请连接网络后点击屏幕重试
            </span>
          </Error>
        </EnterLoading>
      ) : null}
      {renderRoutes(props.route.routes)}
    </Content>
  );
}

const mapStateToProps = state => ({
  bannerList: state.getIn(["recommend", "bannerList"]),
  recommendList: state.getIn(["recommend", "recommendList"]),
  songsCount: state.getIn(["player", "playList"]).size,
  enterLoading: state.getIn(["recommend", "enterLoading"]),
  recommendListErrorMessage: state.getIn([
    "recommend",
    "recommendListErrorMessage"
  ])
});

const mapDispatchToProps = dispatch => {
  return {
    getBannerDataDispatch() {
      dispatch(actionTypes.getBannerList());
    },
    getRecommendListDataDispatch() {
      dispatch(actionTypes.getRecommendList());
    },
    getErrorDispatch() {
      dispatch(actionTypes.errorAction(false));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Recommend));
