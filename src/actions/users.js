import request from "superagent";

const baseUrl = "http://localhost:4000";

// login
export const LOGIN = "LOGIN";
function doLogin(payload) {
  return {
    type: LOGIN,
    payload
  };
}

export const login = data => dispatch => {
  //   console.log("dispatch test");

  request
    .post(`${baseUrl}/login`)
    .send(data)
    .then(response => {
      console.log("response text test", response.text);
      const action = doLogin(response.text);
      dispatch(action);
    })
    .catch(console.error);
};

// create user
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
