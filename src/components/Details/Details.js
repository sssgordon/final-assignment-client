import React, { Fragment } from "react";
import { Accordion, Card, Button } from "react-bootstrap";

export default function Details(props) {
  // const comments = props.comments && props.comments.map

  return (
    <Fragment>
      <h1>Ticket from username</h1>
      <h3>Risk: X%</h3>
      <h2>EUR $$$</h2>
      <p>description: {props.description}</p>
      <h2>Comments</h2>
      {/* {comments} */}
    </Fragment>
  );
}
