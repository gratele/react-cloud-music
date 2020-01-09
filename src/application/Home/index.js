import React, { useState, useRef, useEffect } from 'react';
import { renderRoutes } from "react-router-config";
import {
  NavContainer,
  Wrapper
} from './style';
import Player from '../Player/index';
import { homeIcons, homeList } from '../../api/config';
import Scroll from '../../baseUI/scroll/index';

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

  const handleClick = (name) => {
    switch(name) {
      case '本地音乐': props.history.push('local'); break;
      case '最近播放': props.history.push('recently'); break;
      case '下载管理': props.history.push('download'); break;
      case '我的电台': props.history.push('dj_sublist'); break;
      case '我的收藏': props.history.push('favorite'); break;
      default: break;
    }
  }

  return (
    <div>
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
      <Wrapper>
        <div className="container">
          <ul>
              {
                homeList.map((item, index) => {
                  return (
                    <li key={item.text + "" + index} className="list-item">
                      <i className={item.icon +" "+"home"}></i>
                      <div className="wrapper" onClick={() => {handleClick(item.text)}}>
                        <span className="list-content">{item.text}</span>
                        <span className="num">({item.num})</span>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
        </div>
      </Wrapper>
      {renderRoutes(route.routes)}
      <Player></Player>
    </div>
  );
}

export default React.memo(Home);