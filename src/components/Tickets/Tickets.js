import React from "react";

export default function Tickets(props) {
  if (!props.tickets) {
    return <p>There is no ticket for this event so far!</p>;
  }
  return (
    <ul>
      {props.tickets.map((ticket, index) => {
        return (
          <li key={index}>
            {ticket.description} by {ticket.user.username}
          </li>
        );
      })}
    </ul>
  );
}
