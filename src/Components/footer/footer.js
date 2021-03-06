import React from "react";

import classes from "./footer.module.css";
import { GrServices } from "react-icons/gr";
import { AiOutlineClear } from "react-icons/ai";
import { FaHandsHelping, FaTruckMoving } from "react-icons/fa";
import Links from "./links/links";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillMail,
  AiFillPhone,
} from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import classNames from "classnames";

const footer = () => (
  <footer className={classes.footer__container}>
    <div className={classes.icons__row}>
      <div>
        <a href="https://www.facebook.com/profile.php?id=100004933061558">
          <AiFillFacebook />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/yam1event/">
          <AiFillInstagram />
        </a>
      </div>
      <div>
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHxGzXhpGHGnRqTsjtjscxGQXnqZRdGNjgvJBqgGzXJRlhpRfFBKCBRwGDdNrxwNlRgKSnG">
          <AiFillMail />
        </a>
      </div>
      <div>
        <a href="tel:0523757040">
          <AiFillPhone />
        </a>
      </div>
      <div>
        <a href="https://api.whatsapp.com/send?phone=0523757040">
          <RiWhatsappFill />
        </a>
      </div>
    </div>
    <div className={classes.zigzag}></div>
    <div className={classes.bottom}>
      <div className={classes.Links_container}>
        <Links />
      </div>
      <div className={classes.credit_container}>
        <div className={classes.credit}>
          {" "}
          <p>@כל הזכויות שמורות לים אירועים</p>
          <p>
            האתר נבנה על ידי : צח פוני tzachpony11@gmail.com, אסף שהרבני
            assaf1928@gmail.com
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default footer;
