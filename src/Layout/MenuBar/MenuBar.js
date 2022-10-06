import { Fragment } from "react";
import classes from "./MenuBar.module.css";
import { Link } from "react-router-dom";

const MenuBar = () => {
  return (
    <>
      <div className={classes.menuBar}>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/usersPage">
            <li>Users</li>
          </Link>
          <Link to="/about">
            <li>About</li>
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
