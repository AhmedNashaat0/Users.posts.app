import "./App.css";
import { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import LandingPage from "./Components/LandingPage/LandingPage";
import PostsPage from "./Components/PostsPage/PostsPage";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/homePage" exact>
          <HomePage />
        </Route>
        <Route path="/homePage/:postId">
          <PostsPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
