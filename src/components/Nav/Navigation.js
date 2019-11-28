import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navigation.css";

function NavButton(props) {
  if (props.jwt) {
    return (
      <Button variant="light" className="welcome">
        Welcome
      </Button>
    ); // need link and display username (pass as props below)?
  }

  return (
    <Link to="/login">
      <Button variant="dark" className="login-btn">
        Login
      </Button>
    </Link>
  );
}

export default function Navigation(props) {
  return (
    <Navbar bg="light" expand="lg" className="bar">
      <Link to="/events">
        <Navbar.Brand className="brand">TicketExchange</Navbar.Brand>
      </Link>
      <Nav className="mr-auto"></Nav>
      <NavButton jwt={props.jwt} />
    </Navbar>
  );
}
