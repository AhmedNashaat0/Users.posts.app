import "./App.css";
import { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import UsersPage from "./Components/UsersPage/UsersPage";
import HomePage from "./Components/HomePage/HomePage";
import PostsPage from "./Components/PostsPage/PostsPage";
import AboutUs from "./Components/About/AboutUs";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/usersPage" exact>
          <UsersPage />
        </Route>
        <Route path="/usersPage/:userId/:name">
          <PostsPage />
        </Route>
        <Route path="/about">
          <AboutUs />
        </Route>
      </Switch>
    </>
  );
}

export default App;
