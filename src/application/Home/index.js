import React from 'react';
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

function Home(props) {
  const { route } = props;
  console.log(homeIcons)
  return (
    <div>
      <Top>
        <span className="iconfont menu" onClick={() => alert('用户中心正在开发中，敬请期待:)')}>&#xe65c;</span>
        <span className="title">我的</span>
        <span className="title" onClick={() => props.history.push('/recommend')}>发现</span>
        <span className="iconfont search" onClick={() => props.history.push('/search')}>&#xe62b;</span>
      </Top>
      {/* <Tab>
          <NavLink to="/recommend" activeClassName="selected"><TabItem><span>推荐</span></TabItem></NavLink>
          <NavLink to="/singers" activeClassName="selected"><TabItem><span>歌手</span></TabItem></NavLink>
          <NavLink to="/rank" activeClassName="selected"><TabItem><span>排行榜</span></TabItem></NavLink>
        </Tab> */}
      <NavContainer>
        {/* <Horizen title={"分类(默认热门):"} list={categoryTypes} handleClick={(v) => handleUpdateCategory(v)} oldVal={category}></Horizen> */}
        <ul className="icons-group">
          {
            homeIcons.map((item, index) => {
              return (
                <li key={item.text + "" + index}
                  // onClick={() => enterDetail(item.text)}
                >
                  <div className={item.icon}>
                    {/* <LazyLoad placeholder={<img width="100%" height="100%" src={require('./singer.png')} alt="music" />}> */}
                    {/* <img src={`${item.picUrl}?param=300x300`} width="100%" height="100%" alt="music" /> */}
                    {/* </LazyLoad> */}
                  </div>
                  <span className="name">{item.text}</span>
                </li>
              )
            })
          }
        </ul>
      </NavContainer>
      {renderRoutes(route.routes)}
      <Player></Player>
    </div>
  );
}

export default React.memo(Home);