
import { LOGIN_LOADING,LOGIN_SUCCESS,LOGIN_FAILURE, LOGOUT } from "./action";

const initialState = {
    isLoading: false,
    isSuccess: false,
    isFailure: false,
    isAuthenticated: false,
    token : '',
    name : '',
    errorMsg : ''
}

export const loginReducer = (store = initialState, {type, payload}) => {

    switch(type) {
        case LOGIN_LOADING:
            return {
                ...store,
                isLoading: true,
                isSuccess: false,
                isFailure: false
            }
        case LOGIN_SUCCESS:
            return {
                ...store,
                isLoading: false,
                isSuccess: true,
                isFailure: false,
                isAuthenticated: true,
                token : payload.token,
                name : payload.name
            }
        case LOGIN_FAILURE:
            return {
                ...store,
                isLoading: false,
                isSuccess: false,
                isFailure: true,
                isAuthenticated: false,
                errorMsg : payload,
                token : "",
                name : ""
            }
        case LOGOUT:
            return {
                ...initialState
            }
        default:
            return store;
    }
}