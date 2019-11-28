import React, { Fragment } from "react";
import { Card, Button, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import CreateEventFormContainer from "../CreateEventForm";

export default function Events({ events, loading }) {
  // const createEvent = props.user && (
  //   <Accordion>
  //     <Card>
  //       <Card.Header>
  //         <Accordion.Toggle as={Button} variant="link" eventKey="0">
  //           Create Event
  //         </Accordion.Toggle>
  //       </Card.Header>
  //       <Accordion.Collapse eventKey="0">
  //         <Card.Body>
  //           <CreateEventFormContainer />
  //         </Card.Body>
  //       </Accordion.Collapse>
  //     </Card>
  //   </Accordion>
  // );

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className="list-group mb-4">
      {events.map(event => (
        <li key={event.id} className="list-group-item">
          {event.name}
        </li>
      ))}
    </ul>
  );
  // return (
  //   // need flexbox
  //   <Fragment>
  //     {createEvent}
  //     {props.events.map(event => {
  //       return (
  //         <Card
  //           className="bg-dark text-white"
  //           key={event.id}
  //           style={{ width: "80%", margin: "30px auto" }}
  //         >
  //           <Link
  //             to={`/events/${event.id}`}
  //             style={{ textDecoration: "none", color: "white" }}
  //           >
  //             <Card.Img src={event.imageUrl} alt="Card image" />
  //             <Card.ImgOverlay>
  //               <Card.Title>{event.name}</Card.Title>
  //               <Card.Text>{event.description}</Card.Text>
  //               <Card.Text>{event.date.slice(0, 10)}</Card.Text>
  //             </Card.ImgOverlay>
  //           </Link>
  //         </Card>
  //       );
  //     })}
  //   </Fragment>
  // );
}

{
  /* <Card key={event.id} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={event.imageUrl} />
            <Card.Body>
              <Card.Title>{event.name}</Card.Title>
              <Card.Text>{event.description}</Card.Text>
              <Link to={`/events/${event.id}/tickets`}>
                <Button variant="primary">Tickets</Button>
              </Link>
            </Card.Body>
          </Card> */
}
