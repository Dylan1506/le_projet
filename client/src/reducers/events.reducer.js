import { GET_ALL_EVENT } from "../actions/events.actions";

const initialState = {};

export default function allEventReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_EVENT:
      return action.payload
    default: 
      return state;
  }
}