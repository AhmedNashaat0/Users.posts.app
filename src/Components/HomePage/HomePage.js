import classes from "./HomePage.module.css";
import a from "../../assets/photo.jpg";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className={classes.homePageContainer}>
      <div className={classes.homePage}>
        <div className={classes.welcomeMsg}>
          <h1>WELCOME TO OUR WEBSITE</h1>
          <p>
            Hello,
            <br />
            This website was made to introduce our list of users and their
            contributions. Every user has his own description such as username,
            phone number, email, company and address. Every user can contribute
            with as many posts as he needs. I hope you enjoy the experiment.
          </p>
        </div>
        <div className={classes.image}>
          <img src={a} alt="welcome" />
        </div>
      </div>
      <Link to="/usersPage">
        <button className={classes.start}>Get Started</button>
      </Link>
    </div>
  );
};

export default HomePage;
