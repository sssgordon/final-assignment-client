export default (state = {}, action = {}) => {
  switch (action.type) {
    case "SET_USER_TICKETS":
      return { userTickets: action.payload, ...state };
    default:
      return state;
  }
};
