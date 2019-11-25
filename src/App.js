import React, { Fragment } from "react";
import "./App.css";
import NavigationContainer from "./components/Nav";
import SignupFormContainer from "./components/SignupForm";

function App() {
  return (
    <Fragment>
      <NavigationContainer />
      <SignupFormContainer />
    </Fragment>
  );
}

export default App;
