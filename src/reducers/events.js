export default (state = [], action = {}) => {
  switch (action.type) {
    case "SET_EVENTS":
      return action.payload.reverse();
    case "NEW_EVENT":
      return [action.payload, ...state];
    default:
      return state;
  }
};
