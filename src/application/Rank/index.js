import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { getRankList } from "./store/actionCreators";
import Loading from "../../baseUI/loading-v2";
import { List, ListItem, SongList, Container } from "./style";
import Scroll from "../../baseUI/scroll/index";
import { EnterLoading } from "./../Singers/style";
import { filterIndex, filterIdx } from "../../api/utils";
import { renderRoutes } from "react-router-config";
import Header from "./../../baseUI/header2/index";

function Rank(props) {
  const { rankList: list, loading, songsCount } = props;

  const { getRankListDataDispatch } = props;

  let rankList = list ? list.toJS() : [];
  const headerEl = useRef();

  useEffect(() => {
    if (!rankList.length) {
      getRankListDataDispatch();
    }
    // eslint-disable-next-line
  }, []);

  const handleBack = () => {
    // setShowStatus(false);
    props.history.goBack();
  };

  const enterDetail = detail => {
    const idx = filterIdx(detail.name);
    if (idx === null) {
      alert("暂无相关数据");
      return;
    }

    props.history.push(`/rank/${detail.id}`);
  };

  const renderSongList = list => {
    return list.length ? (
      <SongList>
        {list.map((item, index) => {
          return (
            <li key={index}>
              {index + 1}. {item.first} - {item.second}
            </li>
          );
        })}
      </SongList>
    ) : null;
  };

  const renderRankList = (list, global) => {
    return (
      <List globalRank={global}>
        {list.map(item => {
          return (
            <ListItem
              key={item.coverImgId}
              tracks={item.tracks}
              onClick={() => enterDetail(item)}
            >
              <div className="img_wrapper">
                <img src={item.coverImgUrl} alt="" />
                <div className="decorate"></div>
                <span className="update_frequecy">{item.updateFrequency}</span>
              </div>
              {renderSongList(item.tracks)}
            </ListItem>
          );
        })}
      </List>
    );
  };

  //榜单数据未加载出来之前都给隐藏
  let globalStartIndex = filterIndex(rankList);
  let officialList = rankList.slice(0, globalStartIndex);
  let globalList = rankList.slice(globalStartIndex);

  let displayStyle = loading ? { display: "none" } : { display: "" };

  return (
    <Container play={songsCount}>
      <Header
        ref={headerEl}
        title="排行榜"
        isMarquee={false}
        handleClick={handleBack}
      >
        {" "}
      </Header>
      <Scroll>
        <div>
          <h1 className="offical" style={displayStyle}>
            官方榜
          </h1>
          {renderRankList(officialList)}
          <h1 className="global" style={displayStyle}>
            全球榜
          </h1>
          {renderRankList(globalList, true)}
          {loading ? (
            <EnterLoading>
              <Loading></Loading>
            </EnterLoading>
          ) : null}
        </div>
      </Scroll>
      {renderRoutes(props.route.routes)}
    </Container>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    rankList: state.getIn(["rank", "rankList"]),
    loading: state.getIn(["rank", "loading"])
    // songsCount: state.getIn(['player', 'playList']).size
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getRankListDataDispatch: () => {
      dispatch(getRankList());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Rank));
