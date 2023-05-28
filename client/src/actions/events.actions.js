import axios from "axios";

export const GET_ALL_EVENT = "GET_ALL_EVENT";

export const getAllEvent = () => {
  return (dispatch) => {
    return axios
      .get("http://localhost:5000/api/event")
      .then((res) => {
        dispatch({ type: GET_ALL_EVENT, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};
