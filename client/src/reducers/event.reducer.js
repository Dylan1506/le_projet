import {
  GET_EVENT,
  UPDATE_TITRE,
  UPDATE_DESCRIPTION,
  UPDATE_DATEDEBUT,
  UPDATE_DATEFIN,
  UPDATE_LIEU,
  UPDATE_PRIX,
} from "../actions/event.actions";

const initialState = {};

export default function eventReducer(state = initialState, action) {
  switch (action.type) {
    case GET_EVENT:
      return action.payload;
    case UPDATE_TITRE:
      return {
        ...state,
        titre: action.payload,
      };
    case UPDATE_DESCRIPTION:
      return {
        ...state,
        description: action.payload,
      };
    case UPDATE_LIEU:
      return {
        ...state,
        lieu: action.payload,
      };
    case UPDATE_DATEDEBUT:
      return {
        ...state,
        date_debut: action.payload,
      };
    case UPDATE_DATEFIN:
      return {
        ...state,
        date_fin: action.payload,
      };
    case UPDATE_PRIX:
      return {
        ...state,
        prix: action.payload,
      };

    default:
      return state;
  }
}
