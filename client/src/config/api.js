import axios from 'axios'

// to connect to deployed server

// Create an axios instance
export default axios.create({
  baseURL: 'https://localhost:3000',
  timeout: 10000,
  withCredentials: true
})