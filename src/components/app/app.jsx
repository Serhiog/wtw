import React from "react"
import MainPage from "../mainPage/main-page";
import MoviePage from "../moviePage/movie-page";
import MyList from "../myList/myList";
import SignIn from "../sign-in/sign-in";
import { Router, Switch, Route } from "react-router-dom";
import history from "../../browser-history";
import Context from "../../context"
import AddReview from "../add-review/add-review"
import PrivateRoute from "../../private-route";

function App() {
  return (
    <Context.Provider>
      <Router history={history}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <MainPage />} />
          <PrivateRoute
            exact
            path="/mylist"
            render={() => <MyList />} />
          <Route
            exact
            path={"/films/:id"}
            render={() => <MoviePage />} />
          <Route
            exact
            path={"/login"}
            render={() => <SignIn history={history} />} />
          <Route
            exact
            path={"/films/:id/review"}
            render={() => <AddReview />} />
        </Switch>
      </Router>
    </Context.Provider >
  )
}

export default App
