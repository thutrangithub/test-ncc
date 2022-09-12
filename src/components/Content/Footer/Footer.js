import classNames from "classnames/bind";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx("footer")}>
      <span>Copyright © 2021</span>
    </div>
  );
}

export default Footer;
