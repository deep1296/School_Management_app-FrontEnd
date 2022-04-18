import axios from "axios";
export const LOGIN_LOADING = 'LOGIN_LOADING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

export const loginLoading = () => {
    return {
        type: LOGIN_LOADING,
    };
}

export const loginSuccess = (payload) => {
    return {
        type: LOGIN_SUCCESS,
        payload: payload
    };
}
export const loginFailure = (payload) => {
    return {
        type: LOGIN_FAILURE,
        payload: payload
    };
}

export const logout = () => {
    return {
        type: LOGOUT,
    };
}

export const login = (payload) => (dispatch) => {
    dispatch(loginLoading())
    axios
    .post("https://my-app-deep.herokuapp.com/login", payload)
    .then((res) => {
      dispatch(loginSuccess({ token: res.data.token, name:payload.name }));
    })
    .catch((err) => {
      dispatch(loginFailure(err.message));
    });
}