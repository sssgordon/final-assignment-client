export default (state = [], action = {}) => {
  switch (action.type) {
    case "SET_TICKETS":
      return action.payload;
    case "NEW_TICKET":
      return [action.payload, ...state];
    default:
      return state;
  }
};
