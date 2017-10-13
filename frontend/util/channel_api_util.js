/* eslint-disable no-undef */
export const fetchPublicChannels = () => (
  $.ajax({
    method: 'get',
    url: 'api/channels/public',
  })
)

export const fetchChannel = (userId, channelId) => (
  $.ajax({
    method: 'get',
    url: `api/users/${userId}/channels/${channelId}`,
  })
)

export const createChannel = channel => (
  $.ajax({
    method: 'post',
    url: 'api/channels',
    data: { channel },
  })
)

export const createPublicSubscription = channelId => (
  $.ajax({
    method: 'post',
    url: 'api/subscriptions',
    data: { sub: channelId },
  })
)

export const editChannel = channel => (
  $.ajax({
    method: 'patch',
    url: `api/channels/${channel.id}`,
    data: { channel },
  })
)

export const deleteChannel = id => (
  $.ajax({
    method: 'delete',
    url: `api/channels/${id}`,
  })
)
