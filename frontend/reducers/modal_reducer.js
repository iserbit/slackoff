import merge from 'lodash/merge'

import {
  OPEN_CHANNELS_VIEW_MODAL,
  CLOSE_CHANNELS_VIEW_MODAL,
  OPEN_CHANNEL_FORM_MODAL,
  CLOSE_CHANNEL_FORM_MODAL,
  OPEN_DIRECT_MESSAGE_MODAL,
  CLOSE_DIRECT_MESSAGE_MODAL,
  OPEN_EDIT_USER_FORM_MODAL,
  CLOSE_EDIT_USER_FORM_MODAL,
  OPEN_USER_MENU_MODAL,
  CLOSE_USER_MENU_MODAL,
  OPEN_EMOTICON_PICKER,
  CLOSE_EMOTICON_PICKER,
} from '../actions/modal_actions'

const initialState = {
  channelsView: false,
  channelForm: false,
  channelFormType: 'create',
  directMessageForm: false,
  directMessageUser: [],
  editUserForm: false,
  userMenu: false,
  emoticonPicker: false,
  messageId: null,
}

const ModalReducer = (state = initialState, action) => {
  Object.freeze(state)

  switch (action.type) {
    case OPEN_CHANNELS_VIEW_MODAL:
      return merge({}, { channelsView: action.open })

    case CLOSE_CHANNELS_VIEW_MODAL:
      return initialState

    case OPEN_CHANNEL_FORM_MODAL:
      return merge({}, { channelForm: action.open,
        channelFormType: action.formType })

    case CLOSE_CHANNEL_FORM_MODAL:
      return initialState

    case OPEN_DIRECT_MESSAGE_MODAL:
      return merge({}, { directMessageForm: action.open,
        directMessageUser: action.user })

    case CLOSE_DIRECT_MESSAGE_MODAL:
      return initialState

    case OPEN_EDIT_USER_FORM_MODAL:
      return merge({}, { editUserForm: action.open })

    case CLOSE_EDIT_USER_FORM_MODAL:
      return initialState

    case OPEN_USER_MENU_MODAL:
      return merge({}, { userMenu: action.open })

    case CLOSE_USER_MENU_MODAL:
      return initialState

    case OPEN_EMOTICON_PICKER:
      return merge({}, { emoticonPicker: action.open,
        messageId: action.messageId })

    case CLOSE_EMOTICON_PICKER:
      return initialState

    default:
      return state
  }
}

export default ModalReducer
