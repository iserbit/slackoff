import merge from 'lodash/merge'
import { SET_CHANNEL } from '../actions/current_channel_actions'

const initialState = {}

const CurrentChannelReducer = (state = initialState, action) => {
  Object.freeze(state)

  switch (action.type) {
    case SET_CHANNEL:
      return merge({}, action.channel)

    default:
      return state
  }
}

export default CurrentChannelReducer
