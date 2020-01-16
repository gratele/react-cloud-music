import React from "react";
import { List, ListItem } from "./style";
import { loginIconsTop } from "../../api/config";

export const LoginIconsTop = props => (
  <List>
    {loginIconsTop.map((item, index) => {
      return (
        <ListItem className="list" key={item.text + "" + index}>
          <i className={`login ${item.icon}`}></i>
          <span>{item.text}</span>
        </ListItem>
      );
    })}
  </List>
);

export default LoginIconsTop;
