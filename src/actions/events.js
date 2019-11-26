import request from "superagent";

const baseUrl = "http://localhost:4000";

// login
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
        console.log("response test", response);
        const action = setEvents(response.body);
        dispatch(action);
      })
      .catch(console.error);
  }
};
