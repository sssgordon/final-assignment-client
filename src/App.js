import React, { Fragment } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import NavigationContainer from "./components/Nav";
import SignupFormContainer from "./components/SignupForm";
import LoginFormContainer from "./components/LoginForm";
import EventsContainer from "./components/Events";
import CreateEventFormContainer from "./components/CreateEventForm";
import TicketsContainer from "./components/Tickets";
import DetailsContainer from "./components/Details";

function App() {
  return (
    <Fragment>
      <NavigationContainer />
      <Route path="/login" component={LoginFormContainer} exact />
      <Route path="/signup" component={SignupFormContainer} exact />
      <Route path="/" component={EventsContainer} exact />
      <Route path="/create-event" component={CreateEventFormContainer} exact />
      <Route path="/events/:eventId" component={TicketsContainer} />
      <Route path="/tickets/:ticketId" component={DetailsContainer} />
    </Fragment>
  );
}

export default App;
