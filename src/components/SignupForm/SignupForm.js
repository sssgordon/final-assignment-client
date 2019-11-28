import React, { Fragment } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SignupForm.css";

export default function SignupForm(props) {
  const success = props.user && (
    <Alert variant="success" style={{ width: "700px", margin: "20px auto" }}>
      You are logged in! Click <Link to="/events">here</Link> to TicketExchange!
    </Alert>
  );

  return (
    <Fragment>
      <div className="signup-form-wrapper">
        <Form onSubmit={props.onSubmit}>
          <Form.Group controlId="formGroupUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              className="signup-input"
              type="username"
              name="username"
              placeholder="Enter username"
              onChange={props.onChange}
              value={props.values.username}
            />
          </Form.Group>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              className="signup-input"
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
              className="signup-input"
              type="password"
              name="password"
              placeholder="Password"
              onChange={props.onChange}
              value={props.values.password}
            />
          </Form.Group>
          <Button variant="dark" type="submit" className="signup-form-btn">
            Sign up &amp; login
          </Button>
        </Form>
      </div>
      {success}
    </Fragment>
  );
}
