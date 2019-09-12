import React, { useEffect } from 'react';
import Slider from '../../components/slider';
import RecommendList from '../../components/list';
import { Content } from './style';
import Scroll from '../../baseUI/scroll/index'

import { connect } from "react-redux";
import * as actionTypes from './store/actionCreators';

function Recommend(props) {
  const { bannerList, recommendList } = props;
  const { getBannerDataDispatch, getRecommendListDataDispatch } = props;

  useEffect(() => {
    getBannerDataDispatch();
    getRecommendListDataDispatch();
  });

  const bannerListJS = bannerList ? bannerList.toJS() : [];
  const recommendListJS = recommendList ? recommendList.toJS() : [];

  // mock数据
  // const bannerList = [
  //   { src: 'http://p1.music.126.net/siPOzjhyr7wG3Yp-xvF24Q==/109951164354560801.jpg' },
  //   { src: "http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg" },
  //   { src: "http://p1.music.126.net/4zkXvqFWVR2qESBrAy4n7A==/109951164354020522.jpg" },
  //   { src: "http://p1.music.126.net/K6upw1k99SlJk2YRJO03wg==/109951164354563813.jpg" },
  // ]

  // const recommendList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => {
  //   return {
  //     picUrl: "https://p1.music.126.net/fhmefjUfMD-8qtj3JKeHbA==/18999560928537533.jpg",
  //     playCount: 17171122,
  //     name: "朴树、许巍、李健、郑钧、老狼、赵雷"
  //   }
  // });

  return (
    <Content>
      <Scroll className="list">
        <div>
          <Slider bannerList={bannerListJS}></Slider>
          <RecommendList recommendList={recommendListJS}></RecommendList>
        </div>
      </Scroll>
    </Content>
  )
}

const mapStateToProps = (state, ) => {
  return {
    bannerList: state.getIn(['recommend', 'bannerList']),
    recommendList: state.getIn(['recommend', 'recommendList'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBannerDataDispatch: () => {
      dispatch(actionTypes.getBannerList())
    },
    getRecommendListDataDispatch: () => {
      dispatch(actionTypes.getRecommendList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Recommend));