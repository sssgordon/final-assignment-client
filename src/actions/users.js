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

// get all users
export const SET_USERS = "SET_USERS";
function setUsers(payload) {
  return {
    type: SET_USERS,
    payload
  };
}

export const getAllUsers = () => dispatch => {
  request(`${baseUrl}/users`)
    .then(response => {
      // console.log("response body test", response.body);
      const action = setUsers(response.body);
      dispatch(action);
    })
    .catch(console.error);
};
