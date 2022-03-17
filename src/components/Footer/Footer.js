import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes["footer"]}>
      <div className={classes["footer-size"]}>
        <div className={classes["left-elements"]}>
          <span className={classes["m-r"]}> Privacy Policy </span>
          <span className={classes["m-r"]}> Cookies </span>
          <span> GDPR </span>
        </div>
        <div className={classes["right-elements"]}>
          <span> Not a real store </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
