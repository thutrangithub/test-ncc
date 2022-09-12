import classNames from "classnames/bind";
import styles from "./Logo.module.scss";
import LogoNCC from "./img/img.jpg";

const cx = classNames.bind(styles);

function Logo() {
  return (
    <div className={cx("logo")}>
      <img src={LogoNCC} alt="logo" />
    </div>
  );
}

export default Logo;
