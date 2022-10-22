export enum Token {
  access_token = 'access_token',
  refresh_token = 'refresh_token',
}

export const setToken = (token: Token, value: string) => {
  try {
    localStorage.setItem(token, value);
  } catch (e) {
    console.log('setToken', e);
  }
};

export const getToken = (token: Token) => {
  try {
    localStorage.getItem(token);
  } catch (e) {
    console.log('getToken', e);
  }
};
