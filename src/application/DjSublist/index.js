import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { getDjSublist, changeEnterLoading } from "./store/actionCreators";
import Header from "./../../baseUI/header2/index";
import MusicNote from "../../baseUI/music-note/index";
import { EnterLoading } from "./../Singers/style";
import Loading from "./../../baseUI/loading-v2/index";
import { renderRoutes } from "react-router-config";
import { DjSublistCard } from "./../../baseUI/djSublistCard/index";

function DjSublist(props) {
  const headerEl = useRef();
  const musicNoteRef = useRef();

  const { djSublistDispatch, enterLoading, djSublist } = props;
  const djSublistJS = djSublist ? djSublist.toJS() : [];

  useEffect(() => {
    if (enterLoading) {
      djSublistDispatch();
    }
  }, []);

  const enterDetail = id => {
    props.history.push(`/DjDetail/${id}`);
    // props.history.push({ pathname: "DjDetail", state: { ridId: id } });
  };

  const musicAnimation = (x, y) => {
    musicNoteRef.current.startAnimation({ x, y });
  };

  const djRadios =
    djSublistJS && djSublistJS.djRadios ? djSublistJS.djRadios : [];

  const count = djSublistJS && !djSublistJS.length ? djSublistJS.count : 0;

  return (
    <div>
      <Header
        ref={headerEl}
        // title="电台订阅列表"
        title="我的电台"
        isMarquee={false}
        handleClick={() => {
          props.history.goBack();
        }}
      >
        {" "}
      </Header>
      <DjSublistCard
        djSublist={djRadios}
        count={count}
        type="dj"
        title="我订阅的电台"
        enterDetail={enterDetail}
      ></DjSublistCard>
      <MusicNote ref={musicNoteRef}></MusicNote>
      {enterLoading ? (
        <EnterLoading>
          <Loading></Loading>
        </EnterLoading>
      ) : null}
      {renderRoutes(props.route.routes)}
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    djSublist: state.getIn(["dj_sublist", "djSublist"]),
    enterLoading: state.getIn(["dj_sublist", "enterLoading"])
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    djSublistDispatch: () => {
      dispatch(changeEnterLoading(true));
      dispatch(getDjSublist());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DjSublist);
