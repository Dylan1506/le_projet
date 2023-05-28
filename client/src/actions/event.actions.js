import axios from 'axios';

export const GET_EVENT = "GET_EVENT";
export const UPDATE_TITRE="UPDATE_TITRE";
export const UPDATE_DESCRIPTION="UPDATE_DESCRIPTION";
export const UPDATE_DATEDEBUT="UPDATE_DATEDEBUT";
export const UPDATE_DATEFIN="UPDATE_DATEFIN";

export const UPDATE_LIEU="UPDATE_LIEU";
export const UPDATE_PRIX="UPDATE_PRIX";


export const getEvent=(uid)=>{
    return (dispatch)=>{
        return axios
        .get(`http://localhost:5000/api/event/${uid}`)
        .then((res) => {
            dispatch({ type: GET_EVENT, payload: res.data });
          })
          .catch((err) => console.log(err));
    };
};

// update titre
export const updateTitre = (userId, titre) => {
	return (dispatch) => {
		return axios({
			method: "put",
			url: `http://localhost:5000/api/event/${userId}`,
			data: { titre }

		}).then((res) => {
			dispatch({ type: UPDATE_TITRE, payload: titre })
		})
			.catch((err) => console.log(err))
	}
}


// update description

export const updateDescription = (userId, description) => {
	return (dispatch) => {
		return axios({
			method: "put",
			url: `http://localhost:5000/api/event/${userId}`,
			data: { description }

		}).then((res) => {
			dispatch({ type: UPDATE_DESCRIPTION, payload: description })
		})
			.catch((err) => console.log(err))
	}
}

// update date debut

export const updateDateDebut = (userId, date_debut) => {
	return (dispatch) => {
		return axios({
			method: "put",
			url: `http://localhost:5000/api/event/${userId}`,
			data: { date_debut }

		}).then((res) => {
			dispatch({ type: UPDATE_DATEDEBUT, payload: date_debut })
		})
			.catch((err) => console.log(err))
	}
}

// update date de fin


export const updateDateFin = (userId, date_fin) => {
	return (dispatch) => {
		return axios({
			method: "put",
			url: `http://localhost:5000/api/event/${userId}`,
			data: { date_fin }

		}).then((res) => {
			dispatch({ type: UPDATE_DATEFIN, payload: date_fin })
		})
			.catch((err) => console.log(err))
	}
}


// update lieu


export const updateLieu = (userId, lieu) => {
	return (dispatch) => {
		return axios({
			method: "put",
			url: `http://localhost:5000/api/event/${userId}`,
			data: { lieu }

		}).then((res) => {
			dispatch({ type: UPDATE_LIEU, payload: lieu })
		})
			.catch((err) => console.log(err))
	}
}

// update prix 

export const updatePrix = (userId, prix) => {
	return (dispatch) => {
		return axios({
			method: "put",
			url: `http://localhost:5000/api/event/${userId}`,
			data: { prix }

		}).then((res) => {
			dispatch({ type: UPDATE_PRIX, payload: prix })
		})
			.catch((err) => console.log(err))
	}
}

