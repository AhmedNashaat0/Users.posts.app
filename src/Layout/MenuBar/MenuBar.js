import classes from "./MenuBar.module.css";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const MenuBar = () => {
  return (
    <>
      <div className={classes.menuBar}>
        <ul>
          <Link to="/">
            <li>Landing</li>
          </Link>
          <Link to="/homePage">
            <li>Home</li>
          </Link>
          <a href="#footer">
            <li>Contact</li>
          </a>
        </ul>
      </div>
    </>
  );
};

export default MenuBar;
