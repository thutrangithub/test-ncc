import classNames from "classnames/bind";
import styles from "./Detail.module.scss";

const cx = classNames.bind(styles);

function Detail() {
  return (
    <div className={cx("details")}>
      <span>Lorem ipsum dolor sit amet?</span>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique
        consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat
        hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in
        mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut
        mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo.
        Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus
        vestibulum. Phasellus congue mollis orci, sit amet luctus augue
        tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque
        a.
      </span>
    </div>
  );
}

export default Detail;
