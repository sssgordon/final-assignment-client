import React, { Fragment } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import NavigationContainer from "./components/Nav";
import SignupFormContainer from "./components/SignupForm";
import LoginFormContainer from "./components/LoginForm";
import EventsContainer from "./components/Events";

function App() {
  return (
    <Fragment>
      <NavigationContainer />
      <Route path="/login" component={LoginFormContainer} exact />
      <Route path="/signup" component={SignupFormContainer} exact />
      <Route path="/" component={EventsContainer} exact />
    </Fragment>
  );
}

export default App;
