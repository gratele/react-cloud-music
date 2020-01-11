import React, { useRef, useEffect } from "react";
import Header from "./../../baseUI/header2/index";
import { connect } from "react-redux";
import { getRecordList, changeEnterLoading } from "./store/actionCreators";
import SongsList from "../../application/SongList/";
import MusicNote from "../../baseUI/music-note/index";
import { EnterLoading } from "./../Singers/style";
import Loading from "./../../baseUI/loading-v2/index";

function RecentlyPlayed(props) {
  const { getRecordListDispatch, recordList, enterLoading } = props;
  const headerEl = useRef();
  const musicNoteRef = useRef();

  const recordListJS = recordList ? recordList.toJS() : [];

  useEffect(() => {
    if (!recordListJS.length) {
      getRecordListDispatch();
    }
  }, []);

  let songsList = [];

  if (recordListJS && recordListJS.allData) {
    recordListJS.allData.map(recently => {
      songsList.push(recently.song);
    });
  }

  const musicAnimation = (x, y) => {
    musicNoteRef.current.startAnimation({ x, y });
  };

  const renderSongList = () => {
    return (
      <SongsList
        songs={songsList}
        musicAnimation={musicAnimation}
        showBackground={true}
      ></SongsList>
    );
  };

  return (
    <div>
      <Header
        ref={headerEl}
        title="最近播放"
        isMarquee={false}
        handleClick={() => {
          props.history.goBack();
        }}
      >
        {" "}
      </Header>
      {renderSongList()}
      <MusicNote ref={musicNoteRef}></MusicNote>
      {enterLoading ? (
        <EnterLoading>
          <Loading></Loading>
        </EnterLoading>
      ) : null}
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    recordList: state.getIn(["recently", "recordList"]),
    enterLoading: state.getIn(["recently", "enterLoading"])
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getRecordListDispatch: () => {
      dispatch(changeEnterLoading(true));
      dispatch(getRecordList());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecentlyPlayed);
