import axios from 'axios';
import {API_KEY, API_URL} from '../base/const';

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-API-KEY': API_KEY,
  },
});

export default axiosInstance;
