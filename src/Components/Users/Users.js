import classes from "./Users.module.css";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaHouseUser,
  FaBriefcase,
  FaGlobe,
} from "react-icons/fa";

const Users = (props) => {
  return (
    <li key={props.id} className={classes.card}>
      <h2>{props.name}</h2>
      <ul>
        <li>
          <FaUser className={classes.infoIcons} />
          {props.username}
        </li>
        <li>
          <FaPhone className={classes.infoIcons} />
          {props.phone}
        </li>
        <li>
          <FaEnvelope className={classes.infoIcons} />

          {props.email}
        </li>
        <li>
          <FaHouseUser className={classes.infoIcons} /> {props.address}
        </li>
        <li>
          <FaBriefcase className={classes.infoIcons} />
          {props.company}
        </li>
        <li>
          <FaGlobe className={classes.infoIcons} />
          <a href={`//${props.website}`} rel="noreferrer" target="_blank">
            {props.website}
          </a>
        </li>
      </ul>
      <div className={classes.btn}>
        <Link to={{ pathname: `/homePage/${props.id}`, props: props.name }}>
          <button className={classes.showPosts}>Show Posts</button>
        </Link>
      </div>
    </li>
  );
};

export default Users;
