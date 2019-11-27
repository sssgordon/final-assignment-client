import request from "superagent";

const baseUrl = "http://localhost:4000";

// set tickets
export const SET_TICKETS = "SET_TICKETS";
function setTickets(payload) {
  return {
    type: SET_TICKETS,
    payload
  };
}

export const getTickets = eventId => dispatch => {
  request(`${baseUrl}/events/${eventId}`)
    .then(response => {
      // console.log("response test", response);
      const action = setTickets(response.body);
      dispatch(action);
    })
    .catch(console.error);
};

export const getAllTickets = () => dispatch => {
  request(`${baseUrl}/tickets`)
    .then(response => {
      // console.log("response body test", response.body);
      const action = setTickets(response.body);
      dispatch(action);
    })
    .catch(console.error);
};

// create tickets
export const NEW_TICKET = "NEW_TICKET";
function newTicket(payload) {
  return {
    type: NEW_TICKET,
    payload
  };
}

export const createTicket = (
  description,
  imageUrl,
  price,
  eventId,
  jwt
) => dispatch => {
  request
    .post(`${baseUrl}/tickets`)
    .send({ description, imageUrl, price, eventId, jwt })
    .then(response => {
      const author = response.body.author;
      const ticket = response.body.ticket;
      ticket.author = author;
      const action = newTicket(ticket);

      dispatch(action);
    })
    .catch(console.error);
};

// edit ticket
export const editTicket = (data, ticketId) => dispatch => {
  request
    .put(`${baseUrl}/edit/tickets/${ticketId}`)
    .send(data)
    .catch(console.error);
};
