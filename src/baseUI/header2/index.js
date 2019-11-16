import React from 'react';
import styled from 'styled-components';
import style from '../../assets/global-style';
import PropTypes from "prop-types";

const HeaderContainer = styled.div`
//   position: fixed;
  padding: 5px 10px;
  padding-top: 0;
  height: 40px;
  width: 100%;
  z-index: 100;
  display: flex;
  line-height: 40px;
  color: ${style["font-color-dark"]};
  .back{
    margin-right: 5px;
    font-size: 20px;
    width: 20px;
  }
  >h1{
    font-size: ${style["font-size-l"]};
    font-weight: 700;
  }
`

const Marquee = styled.div`
　white-space: nowrap;　　/* 文字不折行 */
　overflow:-webkit-marquee;　　/* 只有设置为marquee才有滚动效果 */
　width: 170px;　　/* 不是必须的 */
　-webkit-marquee-direction:left;　　/* 文字滚动方向 可选值为left | right | up | down */
　-webkit-marquee-speed:normal;　　/* 文字滚动速度 可选值为slow | normal | fast */
　-webkit-marquee-style:scroll;　　/* 文字滚动方式 可选值为scroll | slide | alternate */
　-webkit-marquee-repetition:1; 　　/* 文字滚动次数 number | infinite ， infinite即无限次循环滚动 */
`
const Header2 = React.forwardRef((props, ref) => {
    const { handleClick, title, isMarquee } = props;
    return (
        <HeaderContainer ref={ref}>
            <i className="iconfont back" onClick={handleClick}>&#xe655;</i>
            {
                isMarquee ? <Marquee><h1>{title}</h1></Marquee> :
                    <h1>{title}</h1>
            }
        </HeaderContainer>
    )
})

Header2.defaultProps = {
    handleClick: () => { },
    title: "标题",
    isMarquee: false
}

Header2.PropTypes = {
    handleClick: PropTypes.func,
    title: PropTypes.string,
    isMarquee: PropTypes.bool
}

export default React.memo(Header2);