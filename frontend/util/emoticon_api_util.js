export const createEmoticon = (emoticon) => {
  return $.ajax({
    method: 'post',
    url: `api/emoticons`,
    data: { emoticon }
  })
}

export const deleteEmoticon = (id) => {
  return $.ajax({
    method: 'delete',
    url: `api/emoticons/${id}`
  })
}

export const updateEmoticon = (emoticon) => {
  return $.ajax({
    method: 'patch',
    url: `api/emoticons/${emoticon.id}`,
    data: { emoticon }
  })
}
