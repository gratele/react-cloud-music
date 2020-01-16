import React from "react";
import { loginIcons } from "../../api/config";
import { LoginIconsList, LoginIconsListItem, IconText } from "./style";

export const LoginIcons = props => {
  return (
    <LoginIconsList>
      {loginIcons.map((item, index) => {
        return (
          <LoginIconsListItem
            className="icon-list"
            key={item.text + "" + index}
          >
            <div className="icon">
              <i className={item.icon}></i>
            </div>
            <IconText>{item.text}</IconText>
          </LoginIconsListItem>
        );
      })}
    </LoginIconsList>
  );
};

export default LoginIcons;
