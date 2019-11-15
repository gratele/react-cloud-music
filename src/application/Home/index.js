import React, { useState, useRef, useEffect, memo } from 'react';
import { renderRoutes } from "react-router-config";
import {
  Top,
  Tab,
  TabItem,
  NavContainer
} from './style';
import { NavLink } from 'react-router-dom';
import Player from '../Player/index';
import { homeIcons } from '../../api/config';
import LazyLoad, { forceCheck } from 'react-lazyload';
import Scroll from '../../baseUI/scroll/index';

function Home(props) {
  const { route } = props;
  console.log(homeIcons)
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

  return (
    <div>
      {/* <Top>
        <span className="iconfont menu" onClick={() => alert('用户中心正在开发中，敬请期待:)')}>&#xe65c;</span>
        <span className="title" >我的</span>
        <span className="title" onClick={() => props.history.push('/recommend')}>发现</span>
        <span className="iconfont search" onClick={() => props.history.push('/search')}>&#xe62b;</span>
      </Top> */}
      {/* <Tab>
          <NavLink to="/recommend" activeClassName="selected"><TabItem><span>推荐</span></TabItem></NavLink>
          <NavLink to="/singers" activeClassName="selected"><TabItem><span>歌手</span></TabItem></NavLink>
          <NavLink to="/rank" activeClassName="selected"><TabItem><span>排行榜</span></TabItem></NavLink>
        </Tab> */}
      <NavContainer>
        <Scroll direction={"horizental"} refresh={true}>
          <ul className="icons-group" ref={Category}>
            {
              homeIcons.map((item, index) => {
                return (
                  <li key={item.text + "" + index} className="icon-list"
                    // onClick={() => enterDetail(item.text)}
                  >
                      <div className={item.icon}></div>
                    <span className="icon-text">{item.text}</span>
                  </li>
                )
              })
            }
          </ul>
        </Scroll>
      </NavContainer>
      {renderRoutes(route.routes)}
      <Player></Player>
    </div>
  );
}

export default React.memo(Home);