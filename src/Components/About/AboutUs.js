import { Fragment } from "react";
import classes from "./AboutUs.module.css";
import MenuBar from "../../Layout/MenuBar/MenuBar";
import Footer from "../../Layout/Footer/Footer";
import Headers from "../../Layout/Headers/Headers";

const AboutUs = () => {
  return (
    <>
      <MenuBar />
      <div className={classes.aboutUsContainer}>
        <div className={classes.about}>
          <Headers>ABOUT</Headers>
          <p>
            This website was made to introduce our list of users and their
            contributions. Every user has his own description such as username,
            phone number, email, company and address. Every user can contribute
            with as many posts as he needs. I hope you enjoy the experiment.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
