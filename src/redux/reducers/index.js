import { combineReducers } from 'redux'
import { userReducer } from './user.reducer'
import { commentsReducer } from './comments.reducer'
import { reducer as reduxFormReducer } from 'redux-form'

export default combineReducers({
    form: reduxFormReducer,
    userReducer,
    commentsReducer,
})
