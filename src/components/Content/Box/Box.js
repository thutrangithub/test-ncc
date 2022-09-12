import classNames from "classnames/bind";
import styles from "./Box.module.scss";
import Img1 from "./img/img1.jpg";
import Img2 from "./img/img2.jpg";
import Img3 from "./img/img3.jpg";

const cx = classNames.bind(styles);

function Box() {
  const listContent = [
    {
      image: Img1,
      heading: "Lorem ipsum dolor sit amet",
      detail_1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at",
      detail_2:
        " ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
    },
    {
      image: Img2,
      heading: "Lorem ipsum dolor sit amet",
      detail_1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at",
      detail_2:
        " ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
    },
    {
      image: Img3,
      heading: "Lorem ipsum dolor sit amet",
      detail_1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at",
      detail_2:
        " ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
    },
  ];
  return (
    <div className={cx("content")}>
      {listContent.map((item, index) => (
        <div key={index} className={cx("secContent")}>
          <span>{item.heading}</span>
          <div className={cx("wrapper")}>
            <img src={item.image} alt="" />
            <span>{item.detail_1}</span>
          </div>
          <span>{item.detail_2}</span>
        </div>
      ))}
    </div>

   
  );
}

export default Box;
