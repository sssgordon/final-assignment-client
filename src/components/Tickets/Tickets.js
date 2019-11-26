import React, { Fragment } from "react";

export default function Tickets(props) {
  if (!props.tickets) {
    return <p>There is no ticket for this event so far!</p>;
  }
  return (
    <Fragment>
      {/* <h1>{props.event.name}</h1> */}
      <ul>
        {props.tickets.map((ticket, index) => {
          return <li key={index}>{ticket.description}</li>;
        })}
      </ul>
    </Fragment>
  );
}
