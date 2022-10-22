import axiosInstance from './axiosInstance';
import {IAuth} from '../types/auth';

export const apiAuth = {
  login: async (email: string, password: string) => {
    try {
      return await axiosInstance
        .post<IAuth>('auth/login', {
          email,
          password,
        })
        .then(response => response.data);
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
        .then(response => response.data);
    } catch (e) {
      console.log('auth/registration error', e);
    }
  },
};
