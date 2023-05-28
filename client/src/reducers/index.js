import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import usersReducer from './users.reducer';
import eventReducer from './event.reducer';
import allEventReducer from './events.reducer';



export default combineReducers({
  userReducer,
  usersReducer,
  eventReducer,
  allEventReducer,

});