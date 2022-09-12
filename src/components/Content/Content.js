import classNames from "classnames/bind";
import Box from "./Box/Box";
import styles from "./Content.module.scss";
import Detail from "./Details/Detail";
import Footer from "./Footer/Footer";
import Logo from "./Logo/Logo";
const cx = classNames.bind(styles);

function Content() {
  return (
    <div className={cx("c-right")}>
      <Logo />
      <Detail />
      <Box />
      <Footer />
    </div>
  );
}

export default Content;
