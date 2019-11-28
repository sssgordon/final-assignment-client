import React from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function LoginForm(props) {
  const success = props.user && (
    <Alert variant="success">
      You are logged in! Click <Link to="/events">here</Link> to TicketExchange!
    </Alert>
  );

  return (
    <Form onSubmit={props.onSubmit}>
      <Form.Group controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={props.onChange}
          value={props.values.email}
        />
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Enter password"
          onChange={props.onChange}
          value={props.values.password}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Login
      </Button>
      <Link to="/signup">
        <p>Create account</p>
      </Link>
      {success}
    </Form>
  );
}
