import { combineReducers } from 'redux'
import { userReducer } from './user.reducer'
import {reducer as reduxFormReducer} from "redux-form";

export default combineReducers({
    form: reduxFormReducer,
    userReducer
});
