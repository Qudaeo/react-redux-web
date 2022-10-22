import {instance} from './instance';
import {IAuth} from './types';

export const auth = {
  login: async (email: string, password: string) => {
    try {
      const response = await instance
        .post<IAuth>('auth/login', {
          email,
          password,
        })
        .catch(e => {
          return e.response;
        });

      console.log('auth/login response', response);
      return response;
    } catch (e) {
      console.log('auth/login error', e);
    }
  },

  registration: async (email: string, name: string, password: string) => {
    try {
      const response = await instance
        .post<IAuth>('auth/registration', {
          email,
          name,
          password,
        })
        .catch(() => {
          //return e.response;
        });

      console.log('auth/registration response', response);
      return response?.data;
    } catch (e) {
      console.log('auth/registration error', e);
    }
  },
};
