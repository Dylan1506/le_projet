import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

export const GET_USER = "GET_USER";
export const UPDATE_NOM = "UPLOAD_NOM";
export const UPDATE_PRENOM = "UPDATE_PRENOM";
export const UPDATE_ADRESSE = "UPDATE_ADRESSE";
export const UPDATE_VILLE = "UPDATE_VILLE";

export const UPDATE_CONTACT = "UPDATE_CONTACT";

export const getUser = (uid) => {
  return (dispatch) => {
    return axios
      .get(`http://localhost:5000/api/user/${uid}`)
      .then((res) => {
        dispatch({ type: GET_USER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const updateNom = (userId, nom) => {
	return (dispatch) => {
		return axios({
			method: "put",
			url: `${process.env.REACT_APP_API_URL}api/user/${userId}`,
			data: { nom }

		}).then((res) => {
			dispatch({ type: UPDATE_NOM, payload: nom })
		})
			.catch((err) => console.log(err))
	}
}

export const updatePrenom = (userId, prenom) => {
	return (dispatch) => {
		return axios({
			method: "put",
			url: `${process.env.REACT_APP_API_URL}api/user/${userId}`,
			data: { prenom }

		}).then((res) => {
			dispatch({ type: UPDATE_PRENOM, payload: prenom })
		})
			.catch((err) => console.log(err))
	}
}


export const updateAdresse = (userId, adresse) => {
	return (dispatch) => {
		return axios({
			method: "put",
			url: `${process.env.REACT_APP_API_URL}api/user/${userId}`,
			data: { adresse }

		}).then((res) => {
			dispatch({ type: UPDATE_ADRESSE, payload: adresse })
		})
			.catch((err) => console.log(err))
	}
}

export const updateVille = (userId, ville) => {
	return (dispatch) => {
		return axios({
			method: "put",
			url: `${process.env.REACT_APP_API_URL}api/user/${userId}`,
			data: { ville }

		}).then((res) => {
			dispatch({ type: UPDATE_VILLE, payload: ville })
		})
			.catch((err) => console.log(err))
	}
}

export const updateContact = (userId, contact) => {
	return (dispatch) => {
		return axios({
			method: "put",
			url: `${process.env.REACT_APP_API_URL}api/user/${userId}`,
			data: { contact }

		}).then((res) => {
			dispatch({ type: UPDATE_CONTACT, payload: contact })
		})
			.catch((err) => console.log(err))
	}
}