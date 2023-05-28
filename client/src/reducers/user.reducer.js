import {
  GET_USER,
  UPDATE_NOM,
  UPDATE_PRENOM,
  UPDATE_ADRESSE,
  UPDATE_VILLE,
  UPDATE_CONTACT,
} from "../actions/user.actions";

const initialState = {};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    case UPDATE_NOM:
      return {
        ...state,
        nom: action.payload,
      };
    case UPDATE_PRENOM:
      return {
        ...state,
        prenom: action.payload,
      };
    case UPDATE_ADRESSE:
      return {
        ...state,
        adresse: action.payload,
      };
    case UPDATE_VILLE:
      return {
        ...state,
        ville: action.payload,
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contact: action.payload,
      };
    default:
      return state;
  }
}
