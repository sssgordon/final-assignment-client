export default (state = [], action = {}) => {
  switch (action.type) {
    case "SET_COMMENTS":
      return action.payload;
    case "NEW_COMMENT":
      return [action.payload, ...state];
    default:
      return state;
  }
};
