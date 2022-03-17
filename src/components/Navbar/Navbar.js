import React from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={classes["navbar"]}>
      <div className={classes["navbar-size"]}>
        <div className={classes["left-elements"]}>
          <span className={classes["logo-name"]}> Not a real store </span>
        </div>

        <div className={classes["right-elements"]}>
          <Link to="/" className={classes["navbar-link"]}  >
             Home 
          </Link>
          <Link to="/products" className={classes["navbar-link"]}>
            Our Products
          </Link>
          <Link to="/contact" className={  classes["navbar-link"]  }>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
