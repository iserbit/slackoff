export const fetchGiphyUrl = (query) => {
  return $.ajax({
    method: 'get',
    url: `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC`
  })
}
