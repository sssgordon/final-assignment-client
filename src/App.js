import React, { Fragment } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import NavigationContainer from "./components/Nav";
import SignupFormContainer from "./components/SignupForm";
import LoginFormContainer from "./components/LoginForm";

function App() {
  return (
    <Fragment>
      <NavigationContainer />
      <Route path="/login" component={LoginFormContainer} exact />
    </Fragment>
  );
}

export default App;
