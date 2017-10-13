import merge from 'lodash/merge'
import { RECEIVE_USERS } from '../actions/user_actions'

const initialState = {}

const UserReducer = (state = initialState, action) => {
  Object.freeze(state)

  switch (action.type) {
    case RECEIVE_USERS:
      return merge({}, action.users)

    default:
      return state
  }
}

export default UserReducer
