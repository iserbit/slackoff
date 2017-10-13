import merge from 'lodash/merge'

import {
  SWITCH_CHANNEL,
  SET_CHANNEL,
} from '../actions/channel_actions'

const initialState = {}

const MessageReducer = (state = initialState, action) => {
  Object.freeze(state)

  switch (action.type) {
    case SWITCH_CHANNEL:
      return merge({}, initialState, {
        id: action.id,
        name: action.name,
        description: action.description,
      })

    case SET_CHANNEL:
      return merge({}, initialState, {
        id: action.id,
        name: action.name,
        description: action.description,
      })

    default:
      return state
  }
}

export default MessageReducer
