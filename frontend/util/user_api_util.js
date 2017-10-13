export const fetchUsers = () => {
  return $.ajax({
    method: 'get',
    url: `api/users`
  })
}
