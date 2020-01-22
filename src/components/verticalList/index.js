import React from "react";
import { ListWrapper, List, ListItem } from "./style";
import { filterSetPlayCount } from "../../api/utils";
import LazyLoad from "react-lazyload";
import { withRouter } from "react-router-dom";

export const VerticalList = props => {
  const { path, recommendList } = props;
  const enterDetail = id => {
    if (path === "recommend") {
      props.history.push(`/recommend/${id}`);
    } else if (path === "dj") {
      props.history.push(`/DjDetail/${id}`);
    }
  };

  return (
    <ListWrapper>
      <h1 className="title">{props.title}</h1>
      <List>
        {recommendList.map((item, index) => {
          return (
            <ListItem
              key={item.id + "" + index}
              onClick={() => enterDetail(item.id)}
            >
              <div className="img_wrapper">
                <LazyLoad
                  placeholder={
                    <img
                      width="100%"
                      height="100%"
                      src={require("./music.png")}
                      alt="music"
                    />
                  }
                >
                  <img
                    src={`${item.picUrl}?param=300x300`}
                    width="100%"
                    height="100%"
                    alt="music"
                  />
                </LazyLoad>
              </div>
              <div className="content">
                <p className="name">
                  {item.name ? item.name : item.program.name}
                </p>
                <div className="dec">
                  <div className="name">
                    <div className="img-info">
                      <img
                        src={
                          item.dj
                            ? item.dj.avatarUrl + "?param=50y50"
                            : item.program
                            ? item.program.coverUrl + "?param=50y50"
                            : ""
                        }
                        alt="music"
                      />
                    </div>
                    <span className="name-con">
                      {item.dj ? item.dj.nickname : item.program.dj.nickname}
                    </span>
                  </div>
                  <div className="hot-num">
                    <span className="num">
                      <i className="dj-public publichuo"></i>
                      {filterSetPlayCount(item.subCount)}
                    </span>
                  </div>
                </div>
              </div>
              <span className="icon">
                <i className="dj-public publicbofang1"></i>
              </span>
            </ListItem>
          );
        })}
      </List>
    </ListWrapper>
  );
};

export default React.memo(withRouter(VerticalList));
