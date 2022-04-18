import { createStore,combineReducers, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';

import {loginReducer} from './Login/reducers';
import {registrationReducer} from "./Registration/reducers";
import {teachersDataReducer} from "./TeachersData/reducer";


const rootReducer = combineReducers({
    login: loginReducer,
    registration: registrationReducer,
    teachersData: teachersDataReducer
});


const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const middleware = [thunk]

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);
export const store = createStore(rootReducer, enhancer);