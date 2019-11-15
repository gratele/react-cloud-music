import React from 'react'
import {
    NavContainer,
    List,
    ListItem
} from './style';
import { getCount } from "../../api/utils";
import LazyLoad from 'react-lazyload';
import { withRouter } from 'react-router-dom';
import { findIcons } from "../../api/config";

export const findIconsList = (props) => {
    const enterDetail = (linkTo) => {
        props.history.push(linkTo)
    }
    
    return (
        <NavContainer>
            {
                findIcons.map((item, index) => {
                return (
                    <ListItem key={item.text + "" + index}
                    onClick={() => enterDetail(item.linkTo)}
                    >
                    <div className="icon">
                        <i className={item.icon}>
                        {/* <img /> */}
                        </i>
                    </div>
                    <span className="icon-text">{item.text}</span>
                    </ListItem>
                )
                })
            }
      </NavContainer>
    );
}

export default React.memo(withRouter(findIconsList))