import axiosInstance from './axiosInstance';
import {IAuth, ITokens} from '../types/auth';
import {
  getToken,
  removeTokens,
  setTokens,
  Token,
} from '../services/localStorage';

export const apiAuth = {
  login: async (email: string, password: string) => {
    try {
      return await axiosInstance
        .post<IAuth>('auth/login', {
          email,
          password,
        })
        .then(response => {
          setTokens(response.data.tokens);

          return response.data;
        });
    } catch (e) {
      console.log('auth/login error', e);
    }
  },

  registration: async (email: string, name: string, password: string) => {
    try {
      return await axiosInstance
        .post<IAuth>('auth/registration', {
          email,
          name,
          password,
        })
        .then(response => {
          setTokens(response.data.tokens);

          return response.data;
        });
    } catch (e) {
      console.log('auth/registration error', e);
    }
  },

  refresh: async () => {
    return await axiosInstance
      .post<ITokens>('auth/refresh', {
        refresh_token: getToken(Token.refresh_token),
      })
      .then(response => {
        setTokens(response.data);
        console.log('auth/refresh', response.data);

        return response.data;
      })
      .catch(e => {
        removeTokens();
        console.log('auth/refresh error', e);
      });
  },
};
