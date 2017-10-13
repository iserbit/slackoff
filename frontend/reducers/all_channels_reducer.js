import merge from 'lodash/merge'

import {
  RECEIVE_ALL_PUBLIC_CHANNELS,
  REMOVE_CHANNEL,
} from '../actions/channel_actions'

const initialState = []

const AllChannelsReducer = (state = initialState, action) => {
  Object.freeze(state)

  switch (action.type) {
    case RECEIVE_ALL_PUBLIC_CHANNELS:
      return merge({}, action.channels)

    case REMOVE_CHANNEL:
      const copiedState = merge({}, state)
      delete copiedState[action.channel.id]
      return copiedState

    default:
      return state
  }
}

export default AllChannelsReducer
