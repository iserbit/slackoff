import { merge, remove, findIndex } from 'lodash'

import {
  RECEIVE_CHANNEL,
  RECEIVE_MESSAGE,
} from '../actions/channel_actions'

import {
  REMOVE_MESSAGE,
  EDIT_MESSAGE,
} from '../actions/message_actions'

const initialState = {}

const ChannelReducer = (state = initialState, action) => {
  Object.freeze(state)

  switch (action.type) {
    case RECEIVE_CHANNEL:
      return merge({}, {
        id: action.channel.id,
        name: action.channel.name,
        description: action.channel.description,
        messages: action.channel.messages,
        createdAt: action.channel.created_at,
        userCount: action.channel.userCount,
        users: action.channel.users,
        displayName: action.channel.display_name,
        private: action.channel.private,
      })

    case RECEIVE_MESSAGE:
      const newState = merge({}, state)
      newState.messages.unshift(action.message.messages)
      return newState

    case EDIT_MESSAGE:
      const editState = merge({}, state)
      const editStateMessages = editState.messages
      const messageIndex = findIndex(
        editStateMessages,
        message => (message.id === action.data.message.id),
      )

      editState.messages[messageIndex].content = action.data.message.content
      editState.messages[messageIndex].emoticons = action.data.emoticons
      return editState

    case REMOVE_MESSAGE:
      const copiedState = merge({}, state)
      const copiedMessages = copiedState.messages

      remove(
        copiedMessages,
        copiedMessage => copiedMessage.id === action.id,
      )

      return merge({}, copiedState, { messages: copiedMessages })

    default:
      return state
  }
}

export default ChannelReducer
