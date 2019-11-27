import React, { Fragment } from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import CreateCommentFormContainer from "../CreateCommentForm";

export default function Details(props) {
  // console.log("users test", props.users);
  const comments = props.comments.length ? (
    props.comments.map(comment => {
      // console.log("comment test", comment);
      const author =
        props.users.length &&
        props.users.find(user => user.id == comment.userId);
      // console.log("author test", author);
      return (
        <p key={comment.id}>
          {comment.content} by {author.username}
        </p>
      );
    })
  ) : (
    <p>There is no comment at the moment.</p>
  );

  return (
    <Fragment>
      <h1>
        Ticket from {props.username} for {props.event.name}
      </h1>
      <h3>Risk: X%</h3>
      <h2>EUR {props.price}</h2>
      <p>description: {props.description}</p>
      <h2>Comments</h2>
      {comments}
      <CreateCommentFormContainer ticketId={props.ticketId} />
    </Fragment>
  );
}
