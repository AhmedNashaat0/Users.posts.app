import classes from "./ErrorMsg.module.css";

const ErrorMsg = (props) => {
  return (
    <div className={classes.error}>
      <div className={classes.errorMsg}>
        <p className={classes.something}>Something went wrong!</p>
        <p>{props.children}</p>
      </div>
    </div>
  );
};

export default ErrorMsg;
