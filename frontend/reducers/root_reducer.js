import { combineReducers } from 'redux'

import SessionReducer from './session_reducer'
import CurrentChannelReducer from './current_channel_reducer'
import ChannelReducer from './channel_reducer'
import AllChannelsReducer from './all_channels_reducer'
import ModalReducer from './modal_reducer'
import UserReducer from './user_reducer'

const RootReducer = combineReducers({
  session: SessionReducer,
  channel: ChannelReducer,
  currentChannel: CurrentChannelReducer,
  modal: ModalReducer,
  allChannels: AllChannelsReducer,
  users: UserReducer,
})

export default RootReducer
