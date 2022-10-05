import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <div className={classes.load}>
      <div className={classes.one}></div>
      <div className={classes.two}></div>
      <div className={classes.three}></div>
    </div>
  );
};

export default LoadingSpinner;
