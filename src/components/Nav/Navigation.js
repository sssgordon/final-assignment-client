import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavButton(props) {
  if (props.jwt) {
    return <Button variant="dark">User</Button>; // need link
  }
  return (
    <Link to="/login">
      <Button variant="primary">Login</Button>
    </Link>
  );
}

export default function Navigation(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">TicketExchange</Navbar.Brand>
      <Nav className="mr-auto"></Nav>
      <NavButton jwt={props.jwt} />
    </Navbar>
  );
}
