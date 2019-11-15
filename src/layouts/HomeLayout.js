import React from "react";
import { renderRoutes } from "react-router-config";
import { Top, Tab, TabItem } from "./HomeLayout.style";
import { NavLink } from "react-router-dom";
import Player from "../application/Player/index";

function Home(props) {
  const { route } = props;

  return (
    <div>
      <Top>
        <span
          className="iconfont menu"
          onClick={() => alert("用户中心正在开发中，敬请期待:)")}
        >
          &#xe65c;
        </span>
        <NavLink to="/home" activeClassName="selected">
          <TabItem>
            <span>我的</span>
          </TabItem>
        </NavLink>
        <NavLink to="/recommend" activeClassName="selected">
          <TabItem>
            <span>发现</span>
          </TabItem>
        </NavLink>
        <NavLink to="/friend" activeClassName="selected">
          <TabItem>
            <span>朋友</span>
          </TabItem>
        </NavLink>
        <NavLink to="/videoPage" activeClassName="selected">
          <TabItem>
            <span>视频</span>
          </TabItem>
        </NavLink>
        <NavLink to="/search" activeClassName="selected">
          <TabItem>
            <span className="iconfont search">
              &#xe62b;
            </span>
          </TabItem>
        </NavLink>
      </Top>
      {renderRoutes(route.routes)}
      <Player></Player>
    </div>
  );
}

export default React.memo(Home);
