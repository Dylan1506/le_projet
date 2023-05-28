import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/globals.css";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from './reducers';
import { getUsers } from "./actions/users.actions";
import { getAllEvent } from "./actions/events.actions";
import { getEvent } from "./actions/event.actions";



const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk,logger))
)

store.dispatch(getUsers());
store.dispatch(getAllEvent());
// store.dispatch(getEvent(uid));


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>

    <App/>
  </Provider>
);
