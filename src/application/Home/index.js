import React, { useState, useRef, useEffect } from "react";
import { renderRoutes } from "react-router-config";
import { NavContainer, ListIcon, ListItemIcon, List, ListItem } from "./style";
import Player from "../Player/index";
import { homeIcons, homeList } from "../../api/config";
import Scroll from "../../baseUI/scroll/index";

function Home(props) {
  const { route } = props;

  const [refreshCategoryScroll, setRefreshCategoryScroll] = useState(false);
  const Category = useRef(null);

  useEffect(() => {
    let categoryDOM = Category.current;
    let tagElems = categoryDOM.querySelectorAll(".icon-list");

    let totalWidth = 0;
    Array.from(tagElems).forEach(ele => {
      totalWidth += ele.offsetWidth;
    });
    categoryDOM.style.width = `${totalWidth}px`;
    setRefreshCategoryScroll(true);
  }, [refreshCategoryScroll]);

  const handleClick = name => {
    switch (name) {
      case "本地音乐":
        props.history.push("local");
        break;
      case "最近播放":
        props.history.push("recently");
        break;
      case "下载管理":
        props.history.push("download");
        break;
      case "我的电台":
        props.history.push("dj_sublist");
        break;
      case "我的收藏":
        props.history.push("favorite");
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <NavContainer>
        <Scroll direction={"horizental"} refresh={true}>
          <ListIcon ref={Category}>
            {homeIcons.map((item, index) => {
              return (
                <li
                  key={item.text + "" + index}
                  className="icon-list"
                  // onClick={() => enterDetail(item.text)}
                >
                  <div className="icon">
                    <i className={item.icon}></i>
                  </div>
                  <span className="icon-text">{item.text}</span>
                </li>
              );
            })}
          </ListIcon>
        </Scroll>
      </NavContainer>
      <hr />
      <List>
        {homeList.map((item, index) => {
          return (
            <ListItem key={item.text + "" + index}>
              <i className={`home ${item.icon}`}></i>
              <div className="wrapper">
                <span className="list-content">{item.text}</span>
                <span className="num">({item.num})</span>
              </div>
            </ListItem>
          );
        })}
      </List>
      {renderRoutes(route.routes)}
      <Player></Player>
    </div>
  );
}

export default React.memo(Home);
