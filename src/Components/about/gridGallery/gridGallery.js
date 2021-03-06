import React from "react";

import classes from "./gridGallery.module.css";
import img1 from "../../../image/aboutGallery/3.jpg";
import img2 from "../../../image/aboutGallery/6.jpg";
import img3 from "../../../image/aboutGallery/7.jpg";
import img4 from "../../../image/aboutGallery/10.jpg";
import img5 from "../../../image/aboutGallery/8.jpg";
import classNames from "classnames";

const gridGallery = (props) => {
  return (
    <div className={classes.row}>
      <div className={classNames({
          [classes.block_img]: true,
          [classes.img1Animation]: props.ifPlayAnimationAbout,
          [classes.AnimationAbout]: props.ifPlayAnimationAbout,
        })}>
        <img src={img5} />{" "}
      </div>
      <div className={classNames({
          [classes.block_img]: true,
          [classes.img2Animation]: props.ifPlayAnimationAbout,
          [classes.AnimationAbout]: props.ifPlayAnimationAbout,
        })}>
        <img src={img4} />{" "}
      </div>
      <div className={classNames({
          [classes.block_img]: true,
          [classes.big_img_block1]: true,
          [classes.img3Animation]: props.ifPlayAnimationAbout,
          [classes.AnimationAbout]: props.ifPlayAnimationAbout,
        })}>
        <img src={img3} />{" "}
      </div>
      <div
        className={classNames({
          [classes.block_img]: true,
          [classes.big_img_block2]: true,
          [classes.img4Animation]: props.ifPlayAnimationAbout,
          [classes.AnimationAbout]: props.ifPlayAnimationAbout,
        })}
      >
        <img  src={img2} />{" "}
      </div>
    </div>
  );
};

export default gridGallery;
