import {REGISTRATION_LOADING, REGISTRATION_SUCCESS, REGISTRATION_FAILURE} from './action';

const initialState = {
    loading: false,
    success: false,
    failure: false,
    errorMsg: '',
    token: '',
}

export const registrationReducer = (store = initialState, {type, payload}) => {
    switch (type) {
        case REGISTRATION_LOADING:
            return {
                ...store,
                loading: true,
                success: false,
                failure: false
            }
        case REGISTRATION_SUCCESS:
            return {
                ...store,
                loading: false,
                success: true,
                failure: false,
                token : payload.token,
                name : payload.name
            }

        case REGISTRATION_FAILURE:
            return {
                ...store,
                loading: false,
                success: false,
                failure: true,
            }
        default:
            return store;
    }
}