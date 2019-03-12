import apiAxios from '../utils/request'

function getSongAPi (query = {}) {
  return apiAxios('/api/getSong', 'GET', query)
}

export {
  getSongAPi
}
