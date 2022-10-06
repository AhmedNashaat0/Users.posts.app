import classes from "./Headers.module.css";

const Headers = (props) => {
  return <h2 className={classes.headers}>{props.children}</h2>;
};

export default Headers;
