import React, { Fragment } from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import CreateCommentFormContainer from "../CreateCommentForm";
import { Link } from "react-router-dom";
import "./Details.css";

export default function Details(props) {
  if (props.loading) {
    return <p>Loading...</p>;
  }

  const createCommentForm = props.thisUsername && (
    <CreateCommentFormContainer ticketId={props.ticketId} />
  );

  const eventName = props.event && props.event.name;

  const editTicket =
    props.thisUsername === props.username ? (
      <Link to={`/edit/tickets/${props.ticketId}`}>
        <Button variant="primary">Edit</Button>
      </Link>
    ) : null;

  const comments = props.comments.length ? (
    props.comments.map(comment => {
      const author = comment.user ? comment.user.username : comment.author;
      return (
        <p key={comment.id}>
          {comment.content} by {author}
        </p>
      );
    })
  ) : (
    <p>There is no comment at the moment.</p>
  );

  return (
    <Fragment>
      <h1>
        Ticket from {props.username} for {eventName}
      </h1>
      {editTicket}
      <h3
        className={
          props.risk > 75 ? "red" : props.risk > 25 ? "yellow" : "green"
        }
      >
        Risk: {props.risk}%
      </h3>
      <h2>EUR {props.price}</h2>
      <p>description: {props.description}</p>
      <h2>Comments</h2>
      {comments}
      {createCommentForm}
    </Fragment>
  );
}
