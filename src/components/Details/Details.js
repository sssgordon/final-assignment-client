import React, { Fragment } from "react";
import { Accordion, Card, Button } from "react-bootstrap";

export default function Details(props) {
  const comments = props.comments.length ? (
    props.comments.map(comment => {
      return (
        <p key={comment.id}>
          {comment.content} by {comment.user.username}
        </p>
      );
    })
  ) : (
    <p>There is no comment at the moment.</p>
  );

  return (
    <Fragment>
      <h1>Ticket from {props.username}</h1>
      <h3>Risk: X%</h3>
      <h2>EUR {props.price}</h2>
      <p>description: {props.description}</p>
      <h2>Comments</h2>
      {comments}
    </Fragment>
  );
}
