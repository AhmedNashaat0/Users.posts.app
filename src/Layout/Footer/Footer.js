import classes from "./Footer.module.css";
import { FaGithub, FaFacebook, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div id="footer" className={classes.footerContainer}>
      <h3>Contact Us</h3>
      <div className={classes.contactIcons}>
        <a
          href="https://github.com/AhmedNashaat0"
          rel="noreferrer"
          target="_blank"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/ahmed-nashaat-186823242/"
          rel="noreferrer"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.facebook.com/ahmed.shiko.1297"
          rel="noreferrer"
          target="_blank"
        >
          <FaFacebook />
        </a>
        <a
          href="mailto:ahmed.nashaat.hefny@gmail.com"
          rel="noreferrer"
          target="_blank"
        >
          <FaEnvelope />
        </a>
      </div>
      <div className={classes.copyRight}>
        <span>&copy; {year} Ahmed Nashaat</span>
      </div>
    </div>
  );
};

export default Footer;
