export const createMessage = (message) => {
  return $.ajax({
    method: 'post',
    url: `api/messages`,
    data: { message }
  })
}

export const deleteMessage = (id) => {
  return $.ajax({
    method: 'delete',
    url: `api/messages/${id}`
  })
}

export const updateMessage = (message) => {
  return $.ajax({
    method: 'patch',
    url: `api/messages/${message.id}`,
    data: { message }
  })
}
