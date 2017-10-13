import merge from 'lodash/merge'
import {
  RECEIVE_ERRORS,
  RECEIVE_CURRENT_USER,
  CLEAR_ERRORS,
  UPDATE_SUBSCRIPTION,
} from '../actions/session_actions'

const initialState = {
  currentUser: null,
  errors: [],
}

const SessionReducer = (state = initialState, action) => {
  Object.freeze(state)

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, initialState, {
        currentUser: action.user,
        errors: [],
      })

    case RECEIVE_ERRORS:
      return merge({}, initialState, {
        errors: action.errors,
        currentUser: null,
      })

    case UPDATE_SUBSCRIPTION:
      const newState = merge({}, state)
      newState.currentUser.subscriptions.push(action.channel)
      return newState

    case CLEAR_ERRORS:
      return merge({}, state, { errors: [] })

    default:
      return state
  }
}

export default SessionReducer
