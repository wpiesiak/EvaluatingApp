import { combineReducers } from 'redux'
import { users } from './users.reducer'
import { comments } from './comments.reducer'
import { reducer as reduxFormReducer } from 'redux-form'

export default combineReducers({
  form: reduxFormReducer,
  users: users,
  comments,
})
