import axios from 'axios'

const baseURL = 'https://api.github.com'

export const makeRequests = ({
  url, method = 'get', data = {}, headers = {}, withBaseUrl = true
}) => axios({
  url,
  method,
  data,
  headers,
  baseURL
})
