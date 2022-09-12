import React from "react";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);
function Menu() {
  const listMenu = ["Home", "Services", "News", "Blog", "Contact"];

  return (
    <div className={cx("c-left")}>
      <ul>
        {listMenu.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
