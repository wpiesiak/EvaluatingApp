import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './redux/reducers'
import thunkMiddleware from 'redux-thunk'

const store = createStore(
  reducer,
  compose(applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
)

export default store
