
import { combineReducers } from 'redux';
import alertReducer from "./alertReducer"
import authenticationReducer from "./authenticationReducer"
import userReducer from "./userReducer"
import registrationReducer from "./registrationReducer"
import equityReducer from "./equityReducer"
import currencyReducer from "./currencyReducer"
import metadataReducer from "./metadataReducer"

export default combineReducers({
    alert:alertReducer,
    auth:authenticationReducer,
    user:userReducer,
    registration:registrationReducer,
    equity:equityReducer,
    currency:currencyReducer,
    metadata: metadataReducer
});