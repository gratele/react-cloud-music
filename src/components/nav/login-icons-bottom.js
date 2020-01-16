import React from "react";
import { List, ListItem } from "./style";
import { loginIconsBottom } from "../../api/config";

export const LoginIconsBottom = props => (
  <List style={{ paddingBottom: "3.2rem" }}>
    {loginIconsBottom.map((item, index) => {
      return (
        <ListItem className="list" key={item.text + "" + index}>
          <i className={`login ${item.icon}`}></i>
          <span>{item.text}</span>
        </ListItem>
      );
    })}
  </List>
);

export default LoginIconsBottom;
