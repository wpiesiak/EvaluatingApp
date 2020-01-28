import { combineReducers } from 'redux'
import { loggedUserReducer } from './users/loggedUser.reducer'
import { userReducer } from './users/user.reducer.js'
import { usersReducer } from './users/users.reducer'
import { commentsReducer } from './comments.reducer'
import { reducer as reduxFormReducer } from 'redux-form'

export default combineReducers({
    form: reduxFormReducer,
    loggedUserReducer: loggedUserReducer,
    userReducer: userReducer,
    usersReducer: usersReducer,
    commentsReducer,
})
