import React, { useEffect, useRef, useState } from "react";
import Slider from "../../components/slider/";
import { connect } from "react-redux";
import * as actionTypes from "./store/actionCreators";
import HorizontalList from "../../components/list/";
import VerticalList from "../../components/verticalList";
import Scroll from "../../baseUI/scroll/index";
import { Content } from "./style";
import { forceCheck } from "react-lazyload";
import { renderRoutes } from "react-router-config";
import { EnterLoading, Error } from "./../Singers/style";
import Loading from "../../baseUI/loading-v2/index";
import FindIconsList from "../../components/findIconsList";
import { djIcons } from "../../api/config";
import Header from "./../../baseUI/header2/index";
import { djClassificationInfoRequest } from "./../../api/request";

function Dj(props) {
  const {
    bannerList,
    songsCount,
    enterLoading,
    errorMessage,
    categoriesList
  } = props;
  const {
    getBannerDataDispatch,
    getDjCatelistDispatch,
    getErrorDispatch
  } = props;

  const headerEl = useRef();
  const [allClassInfo, setAllClassInfo] = useState([]);

  useEffect(() => {
    if (!bannerList.size) {
      getBannerDataDispatch();
    }

    if (!categoriesList.size) {
      getDjCatelistDispatch();
    }
  }, []);

  const bannerListJS = bannerList ? bannerList.toJS() : [];
  const categoriesListJS = categoriesList ? categoriesList.toJS() : [];

  const ruleData = (arr, name) => {
    if (arr.length === 0) return [];
    const ruleArr = arr.filter(item => {
      if (item.name === name) {
        return true;
      }
    });
    return ruleArr[0].data;
  };

  const getAllClassInfo = data => {
    let item = [];
    const length = data.length;

    data.forEach(element => {
      djClassificationInfoRequest(element.id).then(res => {
        if (res.code === 200) {
          const { djRadios } = res;

          item.push({
            name: element.name,
            data: djRadios
          });
          if (item.length === length) {
            setAllClassInfo(item);
          }
        }
      });
    });
  };

  if (categoriesList.size && allClassInfo.length === 0) {
    getAllClassInfo(categoriesListJS);
  }

  const createData = ruleData(allClassInfo, "创作|翻唱");
  const soundBookData = ruleData(allClassInfo, "有声书");
  const emotionData = ruleData(allClassInfo, "情感调频");
  const broadcastingData = ruleData(allClassInfo, "广播剧");
  const musicData = ruleData(allClassInfo, "音乐故事");
  const entertainmentData = ruleData(allClassInfo, "娱乐|影视");
  const electronicData = ruleData(allClassInfo, "3D|电子");
  const mevinData = ruleData(allClassInfo, "美文读物");
  const secondaryData = ruleData(allClassInfo, "二次元");
  const talkData = ruleData(allClassInfo, "脱口秀");
  const knowledgeData = ruleData(allClassInfo, "知识技能");
  const businessData = ruleData(allClassInfo, "商业财经");
  const historyData = ruleData(allClassInfo, "人文历史");
  const englishData = ruleData(allClassInfo, "外语世界");
  const babyData = ruleData(allClassInfo, "亲子宝贝");
  const crosstalkData = ruleData(allClassInfo, "相声曲艺");
  const journeyData = ruleData(allClassInfo, "旅途|城市");

  return (
    <Content play={songsCount}>
      <Header
        ref={headerEl}
        title="电台"
        isMarquee={false}
        handleClick={() => {
          props.history.goBack();
        }}
      ></Header>
      <Scroll className="list" onScroll={forceCheck}>
        <div>
          <Slider bannerList={bannerListJS}></Slider>
          <FindIconsList iconsList={djIcons}></FindIconsList>
          <VerticalList
            title="创作|翻唱"
            recommendList={createData.slice(0, 4)}
            path="dj"
          ></VerticalList>
          <HorizontalList
            title="有声书"
            recommendList={soundBookData.slice(0, 3)}
            path="dj"
          ></HorizontalList>
          <VerticalList
            title="情感调频"
            recommendList={emotionData.slice(0, 4)}
            path="dj"
          ></VerticalList>
        </div>
      </Scroll>
      {enterLoading && !errorMessage ? (
        <EnterLoading>
          <Loading></Loading>
        </EnterLoading>
      ) : null}
      {errorMessage ? (
        <EnterLoading>
          <Error>
            <span
              onClick={() => {
                getErrorDispatch();
                if (!bannerList.size) {
                  getBannerDataDispatch();
                }
                if (!categoriesList.size) {
                  getDjCatelistDispatch();
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
  bannerList: state.getIn(["dj", "bannerList"]),
  categoriesList: state.getIn(["dj", "categoriesList"]),
  songsCount: state.getIn(["player", "playList"]).size,
  enterLoading: state.getIn(["dj", "enterLoading"]),
  errorMessage: state.getIn(["dj", "errorMessage"])
});

const mapDispatchToProps = dispatch => {
  return {
    getBannerDataDispatch() {
      dispatch(actionTypes.changeEnterLoading(true));
      dispatch(actionTypes.getDjBannerList());
    },
    getDjCatelistDispatch() {
      dispatch(actionTypes.getDjCatelist());
    },
    getErrorDispatch() {
      dispatch(actionTypes.errorAction(false));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Dj));
