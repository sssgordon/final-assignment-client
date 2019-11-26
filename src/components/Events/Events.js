import React, { Fragment } from "react";

export default function Events(props) {
  return (
    <Fragment>
      <ul>
        {props.events.map(event => {
          return (
            <li key={event.id}>
              {/* <img src={event.imageUrl} alt="event" />
              <Link to={`/products/${product.id}`}> */}
              <h5>{event.name}</h5>
              {/* </Link> */}
              {/* <p>€ {product.price}</p> */}
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
}
