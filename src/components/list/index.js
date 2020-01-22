import React from "react";
import { ListWrapper, ListItem, List } from "./style";
import { getCount } from "../../api/utils";
import LazyLoad from "react-lazyload";
import { withRouter } from "react-router-dom";

export const RecommendList = props => {
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
              key={item.id + index}
              onClick={() => enterDetail(item.id)}
            >
              <div className="img_wrapper">
                <div className="decorate"></div>
                {/* 加此参数可以减小请求的图片资源大小 */}
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
                    src={item.picUrl + "?param=300x300"}
                    width="100%"
                    height="100%"
                    alt="music"
                  />
                  {/* <span className="dj-name">{item.name}</span> */}
                </LazyLoad>
                {item.playCount && (
                  <div className="play_count">
                    <i className="iconfont play">&#xe885;</i>
                    <span className="count">{getCount(item.playCount)}</span>
                  </div>
                )}
              </div>
              <div className="desc">{item.name}</div>
            </ListItem>
          );
        })}
      </List>
    </ListWrapper>
  );
};

export default React.memo(withRouter(RecommendList));
