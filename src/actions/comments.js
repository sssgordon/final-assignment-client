import request from "superagent";

const baseUrl = "http://localhost:4000";

// set comments
export const SET_COMMENTS = "SET_COMMENTS";
function setComments(payload) {
  return {
    type: SET_COMMENTS,
    payload
  };
}

export const getComments = ticketId => dispatch => {
  request(`${baseUrl}/tickets/${ticketId}/comments`)
    .then(response => {
      // console.log("response test", response);
      const action = setComments(response.body);
      dispatch(action);
    })
    .catch(console.error);
};

// create comment
export const NEW_COMMENT = "NEW_COMMENT";
function newComment(payload) {
  return {
    type: NEW_COMMENT,
    payload
  };
}

export const createComment = (content, ticketId, jwt) => dispatch => {
  request
    .post(`${baseUrl}/comments`)
    .send({ content, ticketId, jwt })
    .then(response => {
      const action = newComment(response.body);
      console.log(response.body);
      dispatch(action);
    })
    .catch(console.error);
};
