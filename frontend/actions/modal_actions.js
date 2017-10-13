export const OPEN_CHANNELS_VIEW_MODAL = 'OPEN_CHANNELS_VIEW_MODAL'
export const CLOSE_CHANNELS_VIEW_MODAL = 'CLOSE_CHANNELS_VIEW_MODAL'

export const openChannelsViewModal = () => ({
  type: OPEN_CHANNELS_VIEW_MODAL,
  open: true,
})

export const closeChannelsViewModal = () => ({
  type: CLOSE_CHANNELS_VIEW_MODAL,
  open: false,
})

export const OPEN_CHANNEL_FORM_MODAL = 'OPEN_CHANNEL_FORM_MODAL'
export const CLOSE_CHANNEL_FORM_MODAL = 'CLOSE_CHANNEL_FORM_MODAL'

export const openChannelFormModal = formType => ({
  type: OPEN_CHANNEL_FORM_MODAL,
  open: true,
  formType,
})

export const closeChannelFormModal = () => ({
  type: CLOSE_CHANNEL_FORM_MODAL,
  open: false,
})

export const OPEN_DIRECT_MESSAGE_MODAL = 'OPEN_DIRECT_MESSAGE_MODAL'
export const CLOSE_DIRECT_MESSAGE_MODAL = 'CLOSE_DIRECT_MESSAGE_MODAL'

export const openDirectMessageModal = user => ({
  type: OPEN_DIRECT_MESSAGE_MODAL,
  open: true,
  user,
})

export const closeDirectMessageModal = () => ({
  type: CLOSE_DIRECT_MESSAGE_MODAL,
  open: false,
  user: [],
})

export const OPEN_EDIT_USER_FORM_MODAL = 'OPEN_EDIT_USER_FORM_MODAL'
export const CLOSE_EDIT_USER_FORM_MODAL = 'CLOSE_EDIT_USER_FORM_MODAL'

export const openEditUserFormModal = () => ({
  type: OPEN_EDIT_USER_FORM_MODAL,
  open: true,
})

export const closeEditUserFormModal = () => ({
  type: CLOSE_EDIT_USER_FORM_MODAL,
  open: false,
})

export const OPEN_USER_MENU_MODAL = 'OPEN_USER_MENU_MODAL'
export const CLOSE_USER_MENU_MODAL = 'CLOSE_USER_MENU_MODAL'

export const openUserMenuModal = () => ({
  type: OPEN_USER_MENU_MODAL,
  open: true,
})

export const closeUserMenuModal = () => ({
  type: CLOSE_USER_MENU_MODAL,
  open: false,
})

export const OPEN_EMOTICON_PICKER = 'OPEN_EMOTICON_PICKER'
export const CLOSE_EMOTICON_PICKER = 'CLOSE_EMOTICON_PICKER'

export const openEmoticonPicker = messageId => ({
  type: OPEN_EMOTICON_PICKER,
  open: true,
  messageId,
})

export const closeEmoticonPicker = () => ({
  type: CLOSE_EMOTICON_PICKER,
  open: false,
})
