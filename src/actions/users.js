import request from "superagent";

const baseUrl = "http://localhost:4000";

// create user
export const LOGIN = "LOGIN";
function doLogin(payload) {
  return {
    type: LOGIN,
    payload
  };
}

export const signUp = data => dispatch => {
  request
    .post(`${baseUrl}/users`)
    .send(data)
    .then(response => {
      const action = doLogin(response.text);

      dispatch(action);
    })
    .catch(console.error);
};
