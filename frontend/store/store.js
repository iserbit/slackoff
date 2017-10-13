import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'

import rootReducer from '../reducers/root_reducer'

const middlewares = [thunk]

if (process.env.NODE_ENV !== 'production') {
  const logger = createLogger({
    diff: true,
    collapsed: true,
  })

  middlewares.push(logger)
}

const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middlewares),
  )
)

export default configureStore
