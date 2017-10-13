import * as SessionAPIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'
export const CLEAR_ERRORS = 'CLEAR_ERRORS'
export const UPDATE_SUBSCRIPTION = 'UPDATE_SUBSCRIPTION'

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user,
})

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors,
})

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
})

export const updateSubscription = channel => ({
  type: UPDATE_SUBSCRIPTION,
  channel,
})

export const signup = user => dispatch => (
  SessionAPIUtil.signup(user).then(
    _user => (dispatch(receiveCurrentUser(_user))),
    errors => (dispatch(receiveErrors(errors.responseJSON))),
  )
)

export const login = user => dispatch => (
  SessionAPIUtil.login(user).then(
    _user => (dispatch(receiveCurrentUser(_user))),
    errors => (dispatch(receiveErrors(errors.responseJSON))),
  )
)

export const logout = () => dispatch => (
  SessionAPIUtil.logout()
    .then(() => (dispatch(receiveCurrentUser())))
)

export const getUser = id => dispatch => (
  SessionAPIUtil.getUser(id)
    .then(user => (dispatch(receiveCurrentUser(user))))
)

export const updateUser = formData => dispatch => (
  SessionAPIUtil.updateUser(formData)
    .then(user => dispatch(receiveCurrentUser(user)))
)

export const deleteSubscription = channelId => dispatch => (
  SessionAPIUtil.deleteSubscription(channelId)
    .then((user) => {
      dispatch(receiveCurrentUser(user))
      return user
    })
)
