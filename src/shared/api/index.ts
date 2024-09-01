import axios from 'axios'

export const baseApi = axios.create({
  baseURL: 'https://status.neuralgeneration.com/api/',
})
