import axios from 'axios';
import {API_KEY, API_URL} from '../base/const';
import {getToken, removeTokens, Token} from '../services/localStorage';
import {apiAuth} from './apiAuth';
import {Url} from './urls';

const axiosInstance = axios.create({
  baseURL: API_URL,
});

axiosInstance.interceptors.request.use(
  async config => {
    config.headers = {
      Authorization: `Bearer ${getToken(Token.access_token)}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-API-KEY': API_KEY,
    };
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  async function (error) {
    if (
      error.response.status === 401 &&
      error.config.url === Url.AUTH_REFRESH
    ) {
      removeTokens();
    }

    if (error.response.status === 401 && getToken(Token.refresh_token)) {
      await apiAuth.refresh();

      return axiosInstance(error.config);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
