import request from "superagent";

const baseUrl = "http://localhost:4000";

// set events
export const SET_EVENTS = "SET_EVENTS";
function setEvents(payload) {
  return {
    type: SET_EVENTS,
    payload
  };
}

export const getEvents = () => (dispatch, getState) => {
  const state = getState();
  const { events } = state;

  if (!events.length) {
    request(`${baseUrl}/events`)
      .then(response => {
        console.log("response test", response.body);
        const action = setEvents(response.body.events);
        dispatch(action);
      })
      .catch(console.error);
  }
};

// create events
export const NEW_EVENT = "NEW_EVENT";
function newEvent(payload) {
  return {
    type: NEW_EVENT,
    payload
  };
}

export const createEvent = data => dispatch => {
  request
    .post(`${baseUrl}/events`)
    .send(data)
    .then(response => {
      const action = newEvent(response.body);

      dispatch(action);
    })
    .catch(console.error);
};

// set tickets

export const SET_TICKETS = "SET_TICKETS";
function setTickets(payload) {
  return {
    type: SET_TICKETS,
    payload
  };
}

export const getTickets = eventId => (dispatch, getState) => {
  const state = getState();
  const { tickets } = state;

  if (!tickets.length) {
    request(`${baseUrl}/events/${eventId}/tickets`)
      .then(response => {
        // console.log("response test", response);
        const action = setTickets(response.body);
        dispatch(action);
      })
      .catch(console.error);
  }
};
