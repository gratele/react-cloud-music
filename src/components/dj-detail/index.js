import React from "react";
import { Detail, Data, Title, TopDesc } from "./style";
import { SongList, SongItem } from "../../application/SongList/style";
import {
  filterSetMonth,
  filterSetPlayCount,
  filterSetTime
} from "../../api/utils";

import { connect } from "react-redux";
import {
  changePlayList,
  changeCurrentIndex,
  changeSequecePlayList
} from "../../application/Player/store/actionCreators";

function DjDetail(props) {
  const {
    djRadio,
    active,
    djProgramListJS,
    changeToFirst,
    changeToSecond,
    musicAnimation,
    changePlayListDispatch,
    changeCurrentIndexDispatch,
    changeSequecePlayListDispatch
  } = props;

  const selectItem = (e, index) => {
    changePlayListDispatch(
      djProgramListJS && djProgramListJS.programs
        ? djProgramListJS.programs
        : []
    );
    changeSequecePlayListDispatch(
      djProgramListJS && djProgramListJS.programs
        ? djProgramListJS.programs
        : []
    );
    changeCurrentIndexDispatch(index);
    musicAnimation(e.nativeEvent.clientX, e.nativeEvent.clientY);
  };

  let songList = list => {
    let res = [];
    for (let i = 0; i < list.length; i++) {
      if (i >= list.length) break;
      let item = list[i].mainSong;

      res.push(
        <li key={item.id} onClick={e => selectItem(e, i)}>
          <span className="index">{list.length - i}</span>
          <div className="info">
            <span>{item.name}</span>
            <span>
              {filterSetMonth(list[i].createTime)} {"   "}
              {filterSetPlayCount(list[i].listenerCount)} {"    "}
              {filterSetTime(list[i].duration)}
            </span>
          </div>
        </li>
      );
    }
    return res;
  };

  const renderTopDesc = () => {
    return (
      <TopDesc background={djRadio ? djRadio.picUrl : ""}>
        <div className="background">
          <div className="filter"></div>
        </div>
      </TopDesc>
    );
  };

  const renderMenu = () => {
    return (
      <Data>
        <div>
          <div className="name">{djRadio ? djRadio.name : ""}</div>
          <div className="num">{djRadio ? djRadio.subCount : ""}人已订阅</div>
        </div>
        {djRadio && !djRadio.subed && (
          <div
            className="subscription"
            // onClick={addDj}
            onClick={() => {
              console.log(133);
            }}
          >
            <svg
              t="1571198266501"
              className="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1753"
              width="14"
              height="14"
            >
              <path
                d="M737.792 910.6944a57.2416 57.2416 0 0 1-26.7264-6.656l-197.5296-103.8336-197.5296 103.8336a57.2416 57.2416 0 0 1-83.0464-60.3648l37.6832-220.16L110.848 467.968a57.2928 57.2928 0 0 1 31.744-97.6896L363.52 338.2272 462.1824 138.24a56.832 56.832 0 0 1 51.2-31.8976 56.9344 56.9344 0 0 1 51.2 31.8976l98.7648 200.1408 220.8256 32.0512A57.2928 57.2928 0 0 1 916.48 467.968l-159.7952 155.7504 37.7344 220.16a57.3952 57.3952 0 0 1-56.32 67.0208zM159.8464 430.08l155.2896 151.3984a57.2416 57.2416 0 0 1 16.4352 50.688l-36.6592 213.5552 192-100.9152a57.088 57.088 0 0 1 53.2992 0L732.16 845.7216l-36.6592-213.76a57.344 57.344 0 0 1 16.4352-50.688L867.2768 430.08l-214.6304-31.1808a57.2928 57.2928 0 0 1-43.1104-31.3344l-96-194.56-96 194.56a57.2416 57.2416 0 0 1-43.1104 31.3344z m715.6736 1.024zM509.7984 165.2736z"
                fill="#ffffff"
                p-id="1754"
              />
            </svg>
            订阅
          </div>
        )}

        {djRadio && djRadio.subed && (
          <div
            className="subscription1"
            // onClick={deleteDj}
          >
            <svg
              t="1571203188806"
              className="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2523"
              width="14"
              height="14"
            >
              <path
                d="M926.037333 224.256c-22.016-22.016-57.685333-22.016-79.701333 0L384.853333 685.738667 179.370667 480.256c-22.016-22.016-57.685333-22.016-79.701334 0-22.016 22.016-22.016 57.685333 0 79.701333l239.786667 239.786667c12.458667 12.458667 29.184 17.749333 45.397333 16.213333 16.213333 1.536 32.938667-3.754667 45.397334-16.213333l495.786666-495.786667c22.016-22.016 22.016-57.685333 0-79.701333z"
                fill="#ffffff"
                p-id="2524"
              />
            </svg>
            已订阅
          </div>
        )}
      </Data>
    );
  };

  const renderSongList = () => {
    return (
      <div>
        <Title>
          <div
            className="content"
            onClick={() => {
              console.log(133);
              changeToFirst();
            }}
          >
            <span
              className={`under-line ${active === "first" ? "active" : ""}`}
            >
              详情
            </span>
          </div>
          <div
            className="content"
            onClick={() => {
              console.log(233);
              changeToSecond();
            }}
          >
            <span
              className={`under-line ${active === "second" ? "active" : ""}`}
            >
              节目
            </span>
            <span className="num">
              {djProgramListJS ? djProgramListJS.count : 0}
            </span>
          </div>
        </Title>
        {active === "second" && (
          <SongList>
            <h1 className="sum-num ">
              共{djProgramListJS ? djProgramListJS.count : 0}期
            </h1>
            <SongItem>
              {songList(
                djProgramListJS && djProgramListJS.programs
                  ? djProgramListJS.programs
                  : []
              )}
            </SongItem>
          </SongList>
        )}
        {active === "first" && (
          <Detail>
            <h1 className="anchor">主播</h1>
            <div className="content">
              <div className="img-info">
                <img src={djRadio ? djRadio.dj.avatarUrl : ""} />
              </div>
              <div className="artist">
                <p className="name">{djRadio ? djRadio.dj.nickname : ""}</p>
                <p className="dec">网易音乐人</p>
              </div>
            </div>
            <h1 className="dj-content">电台内容简介</h1>
            <div className="class">
              <span>分类:</span>
              <span className="tag">{djRadio ? djRadio.category : ""}</span>
            </div>
            <p className="text">{djRadio ? djRadio.desc : ""}</p>
          </Detail>
        )}
      </div>
    );
  };

  return (
    <div>
      {renderTopDesc()}
      {renderMenu()}
      {renderSongList()}
    </div>
  );
}

// 映射Redux全局的state到组件的props上
const mapStateToProps = state => ({
  fullScreen: state.getIn(["player", "fullScreen"]),
  playing: state.getIn(["player", "playing"]),
  currentSong: state.getIn(["player", "currentSong"]),
  scrollY: state.getIn(["album", "scrollY"])
});
// 映射dispatch到props上
const mapDispatchToProps = dispatch => {
  return {
    changePlayListDispatch(data) {
      dispatch(changePlayList(data));
    },
    changeCurrentIndexDispatch(data) {
      dispatch(changeCurrentIndex(data));
    },
    changeSequecePlayListDispatch(data) {
      dispatch(changeSequecePlayList(data));
    }
  };
};

// 将ui组件包装成容器组件
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(DjDetail));
