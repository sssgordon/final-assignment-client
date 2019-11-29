import React from "react";
import { Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navigation.css";

function NavButton(props) {
  if (props.jwt) {
    return null;
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
      <Link to="/">
        <Navbar.Brand className="brand">TicketExchange</Navbar.Brand>
      </Link>
      <NavButton jwt={props.jwt} />
    </Navbar>
  );
}
