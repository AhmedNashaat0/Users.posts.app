import { Fragment } from "react";

import classes from "./HomePage.module.css";
import Users from "../Users/Users";
import MenuBar from "../../Layout/MenuBar/MenuBar";
import Footer from "../../Layout/Footer/Footer";

import { useQuery } from "react-query";

import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import { fetchHandler } from "../../fetchApi";
import ErrorMsg from "../Error/ErrorMsg";

const HomePage = () => {
  const { data, error, isError, isLoading } = useQuery("users", () =>
    fetchHandler("users")
  );

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <ErrorMsg>{error.message}</ErrorMsg>;
  }

  return (
    <>
      <MenuBar />
      <div className={classes.homePageContainer}>
        <div className={classes.usersList}>
          <ul className={classes.list}>
            {data.map((user) => {
              return (
                <Users
                  key={user.id}
                  id={user.id}
                  name={user.name}
                  username={user.username}
                  phone={user.phone}
                  address={user.address.city + " , " + user.address.street}
                  company={user.company.name}
                  email={user.email}
                  website={user.website}
                />
              );
            })}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
