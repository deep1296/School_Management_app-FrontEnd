export const REGISTRATION_LOADING = 'REGISTRATION_LOADING';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_FAILURE = 'REGISTRATION_FAILURE';
import axios from "axios";

export const registrationLoading = () => {
    return {
        type: REGISTRATION_LOADING,
    };
}

export const registrationSuccess = (payload) => {
    return {
        type: REGISTRATION_SUCCESS,
        payload: payload
    };
}
export const registrationFailure = (payload) => {
    return {
        type: REGISTRATION_FAILURE,
        payload: payload
    };
}

export const register = (payload) => (dispatch) => {
    dispatch(registrationLoading())
    axios.post('https://my-app-deep.herokuapp.com/register', payload).
    then((res) => {
        dispatch(registrationSuccess( {token: res.data.token, name:payload.name}))

    }).catch((err) => {
        dispatch(registrationFailure(err.message));
    });
}