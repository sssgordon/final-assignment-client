import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
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

  const editTicket =
    props.thisUsername === props.username ? (
      <div
        style={{ textAlign: "right", margin: "0 auto 20px", width: "900px" }}
      >
        <Link to={`/edit/tickets/${props.ticketId}`}>
          <Button
            variant="dark"
            style={{
              fontSize: "23px",
              width: "150px"
            }}
          >
            Edit Ticket
          </Button>
        </Link>
      </div>
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
            <img src={props.imageUrl} alt="ticket" />
          </div>
          <p className="details-description">{props.description}</p>
        </div>
        {editTicket}
        <h2 className="details-price">Comments</h2>
        {comments}
        {createCommentForm}
      </div>
    </Fragment>
  );
}
