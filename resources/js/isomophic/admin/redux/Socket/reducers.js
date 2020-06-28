import actions from "./actions";

const initState = {
  socketIO: null
};

export default function appReducer(state = initState, action) {
  switch (action.type) {
    case actions.SET_SOCKET:
      return {
        ...state,
        socketIO: action.data
      };
    
    default:
      return state;
  }
}
