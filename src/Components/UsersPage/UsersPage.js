import { Fragment } from "react";

import classes from "./UsersPage.module.css";
import Users from "../Users/Users";
import MenuBar from "../../Layout/MenuBar/MenuBar";
import Footer from "../../Layout/Footer/Footer";

import { useQuery } from "react-query";

import LoadingIcon from "../LoadingIcon/LoadingIcon";
import { fetchHandler } from "../../fetchApi";
import ErrorMsg from "../Error/ErrorMsg";

const UsersPage = () => {
  const { data, error, isError, isLoading } = useQuery("users", () =>
    fetchHandler("users")
  );

  if (isLoading) {
    return <LoadingIcon />;
  }

  if (isError) {
    return <ErrorMsg>{error.message}</ErrorMsg>;
  }

  return (
    <>
      <MenuBar />
      <div className={classes.usersPageContainer}>
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

export default UsersPage;
