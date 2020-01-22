import React, { useEffect, useRef, useState, useCallback } from "react";
import { connect } from "react-redux";
import Header from "./../../baseUI/header/index";
import {
  getDjDetailList,
  changeEnterLoading,
  getProgramList
} from "./store/actionCreators";
import { Container } from "./style";
import style from "../../assets/global-style";

import { CSSTransition } from "react-transition-group";
import MusicNote from "../../baseUI/music-note/index";
import Scroll from "../../baseUI/scroll/index";
import { HEADER_HEIGHT } from "./../../api/config";
import DJDetail from "../../components/dj-detail/index";
import { isEmptyObject } from "../../api/utils";

function DjDetail(props) {
  const headerEl = useRef();
  const musicNoteRef = useRef();

  const [showStatus, setShowStatus] = useState(true);
  const [active, setActive] = useState("second");

  const {
    djDetailListDispatch,
    djProgramDispatch,
    djDetailList,
    djProgramList,
    enterLoading
  } = props;

  const limit = 30;

  useEffect(() => {
    // if (enterLoading) {
    const id = props.match.params.id;
    djDetailListDispatch(id);
    djProgramDispatch(id, limit);
    // }
  }, []);

  const djDetailListJS = djDetailList ? djDetailList.toJS() : {};
  const djRadio = djDetailListJS ? djDetailListJS.djRadio : {};

  const djProgramListJS = djProgramList ? djProgramList.toJS() : {};

  const setShowStatusFalse = () => {
    setShowStatus(false);
  };

  const musicAnimation = (x, y) => {
    musicNoteRef.current.startAnimation({ x, y });
  };

  const changeToFirst = useCallback(() => {
    setActive("first");
  }, []);

  const changeToSecond = () => {
    setActive("second");
  };

  const handleScroll = pos => {
    let minScrollY = -HEADER_HEIGHT;
    let percent = Math.abs(pos.y / minScrollY);
    let headerDom = headerEl.current;
    if (pos.y < minScrollY) {
      headerDom.style.backgroundColor = style["theme-color"];
      headerDom.style.opacity = Math.min(1, (percent - 1) / 2);
    } else {
      headerDom.style.backgroundColor = "";
      headerDom.style.opacity = 1;
    }
  };

  return (
    <CSSTransition
      in={showStatus}
      timeout={300}
      classNames="fly"
      appear={true}
      unmountOnExit
      onExited={() => props.history.goBack()}
    >
      <Container>
        <Header
          handleClick={setShowStatusFalse}
          title={djRadio ? djRadio.name : ""}
          ref={headerEl}
        ></Header>
        {!isEmptyObject(djProgramListJS) ? (
          <Scroll onScroll={handleScroll} bounceTop={false}>
            <DJDetail
              djProgramListJS={djProgramListJS}
              djRadio={djRadio}
              changeToSecond={changeToSecond}
              changeToFirst={changeToFirst}
              active={active}
              limit={limit}
              musicAnimation={musicAnimation}
              loading={enterLoading}
            ></DJDetail>
          </Scroll>
        ) : null}
        <MusicNote ref={musicNoteRef}></MusicNote>
      </Container>
    </CSSTransition>
  );
}

const mapStateToProps = state => {
  return {
    djDetailList: state.getIn(["djDetail", "djDetailList"]),
    djProgramList: state.getIn(["djDetail", "djProgramList"]),
    enterLoading: state.getIn(["djDetail", "enterLoading"])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    djDetailListDispatch: id => {
      dispatch(changeEnterLoading(true));
      dispatch(getDjDetailList(id));
    },
    djProgramDispatch: (id, limit) => {
      dispatch(getProgramList(id, limit));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(DjDetail));
