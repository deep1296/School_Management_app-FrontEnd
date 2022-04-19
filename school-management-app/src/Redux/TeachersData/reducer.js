import { FETCH_TEACHERS_DATA, FETCH_TEACHERS_DATA_FAILURE,LOAD_TEACHERS_DATA } from "./action";

const initialState = {
    loading: false,
    teachers: [],
    error: false,
    success: false,
    errorMsg: ''
}

export const teachersDataReducer = (store = initialState, {type,payload}) => {
    switch (type) {
        case FETCH_TEACHERS_DATA:
            return {
                ...store,
                teachers: [...payload],
                success: true,
            }
        case FETCH_TEACHERS_DATA_FAILURE:
            return {
                ...store,
                loading: false,
                error: true,
                errorMsg: payload,
                success: false,
            }
        case LOAD_TEACHERS_DATA:
            return {
                ...store,
                loading: true,
                error: false,
                success: false,
            }
        default:
            return store;
    }
}
