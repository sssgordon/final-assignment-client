import React, { Fragment } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./LoginForm.css";

export default function LoginForm(props) {
  const success = props.user && (
    <Alert variant="success">
      You are logged in! Click <Link to="/events">here</Link> to TicketExchange!
    </Alert>
  );

  return (
    <Fragment>
      <div className="login-form-wrapper">
        <Form onSubmit={props.onSubmit}>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              className="login-input"
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
              className="login-input"
              type="password"
              name="password"
              placeholder="Enter password"
              onChange={props.onChange}
              value={props.values.password}
            />
          </Form.Group>

          <Button variant="dark" type="submit" className="login-form-btn">
            Login
          </Button>
          <Link to="/signup" className="create-account-link">
            <p>Create account</p>
          </Link>
          {success}
        </Form>
      </div>
    </Fragment>
  );
}
