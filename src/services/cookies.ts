import Cookies from 'js-cookie';

export enum Token {
  access_token = 'access_token',
  refresh_token = 'refresh_token',
}

export const setToken = (token: Token, value: string) => {
  try {
    Cookies.set(token, value);
  } catch (e) {
    console.log('setToken', e);
  }
};

export const getToken = () => {
  try {
    Cookies.get('foo');
  } catch (e) {
    console.log('getToken', e);
  }
};
