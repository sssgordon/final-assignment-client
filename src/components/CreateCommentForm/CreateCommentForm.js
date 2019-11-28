import React, { Fragment } from "react";
import { Form, Button } from "react-bootstrap";
import "./CreateCommentForm.css";

export default function CreateCommentForm(props) {
  return (
    <Fragment>
      <div className="create-comment-form-wrapper">
        <Form onSubmit={props.onSubmit} className="create-comment-form">
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control
              className="create-comment-form-input"
              as="textarea"
              rows="3"
              name="content"
              placeholder="Tell us what you think about this ticket"
              onChange={props.onChange}
              value={props.values.content}
            />
          </Form.Group>
          <Button
            variant="dark"
            type="submit"
            className="create-comment-form-btn"
          >
            Comment
          </Button>
        </Form>
      </div>
    </Fragment>
  );
}
