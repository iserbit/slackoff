import * as MessageAPIUtil from '../util/message_api_util'
import * as EmoticonAPIUtil from '../util/emoticon_api_util'
import * as GiphyAPIUtil from '../util/giphy_api_util'
import { closeEmoticonPicker } from './modal_actions'

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE'
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE'
export const EDIT_MESSAGE = 'EDIT_MESSAGE'
export const ADD_EMOTICON = 'ADD_EMOTICON'
export const REMOVE_EMOTICON = 'REMOVE_EMOTICON'

export const receiveMessage = (message, channel, user) => ({
  type: RECEIVE_MESSAGE,
  message,
  channel,
  user,
})

export const editMessage = data => ({
  type: EDIT_MESSAGE,
  data,
})

export const removeMessage = id => ({
  type: REMOVE_MESSAGE,
  id,
})

export const updateMessage = message => (
  MessageAPIUtil.updateMessage(message)
)

export const deleteMessage = id => dispatch => (
  MessageAPIUtil.deleteMessage(id)
    .then(_id => dispatch(removeMessage(_id)))
)

export const addEmoticon = icon => dispatch => (
  EmoticonAPIUtil.createEmoticon(icon)
    .then(() => dispatch(closeEmoticonPicker()))
)

export const removeEmoticon = id => (
  EmoticonAPIUtil.deleteEmoticon(id)
)

export const fetchGiphyUrl = query => (
  GiphyAPIUtil.fetchGiphyUrl(query)
)
