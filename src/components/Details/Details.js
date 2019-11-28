import React, { Fragment } from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import CreateCommentFormContainer from "../CreateCommentForm";
import { Link } from "react-router-dom";
import "./Details.css";

export default function Details(props) {
  if (props.loading) {
    return <p>Loading...</p>;
  }

  const createCommentForm = (
    // props.thisUsername &&
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
        <p className="details-comment" key={comment.id}>
          {author} says: {comment.content}
        </p>
      );
    })
  ) : (
    <p className="details-comment">There is no comment at the moment.</p>
  );

  return (
    <Fragment>
      <div className="details-page-wrapper">
        <h1 className="details-title">Ticket from {props.username}</h1>
        {editTicket}
        <h3
          className={
            props.risk > 75
              ? "details-risk red"
              : props.risk > 25
              ? "details-risk yellow"
              : "details-risk green"
          }
        >
          Fraud Risk: {props.risk}%
        </h3>

        <h2 className="details-price">EUR {props.price}</h2>
        <div className="details-wrapper">
          <div className="details-image-wrapper">
            <img src={props.imageUrl} alt="ticket image" />
          </div>
          <p className="details-description">
            description: {props.description}
          </p>
        </div>
        <h2 className="details-price">Comments</h2>
        {comments}
        {createCommentForm}
      </div>
    </Fragment>
  );
}
