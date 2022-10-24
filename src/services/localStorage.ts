import {ITokens} from '../types/auth';

export enum Token {
  access_token = 'access_token',
  refresh_token = 'refresh_token',
}

const setToken = (token: Token, value: string) => {
  try {
    localStorage.setItem(token, value);
  } catch (e) {
    console.log('setToken', e);
  }
};

export const getToken = (token: Token) => {
  try {
    return localStorage.getItem(token);
  } catch (e) {
    console.log('getToken', e);
  }
};

const removeToken = (token: Token) => {
  try {
    return localStorage.removeItem(token);
  } catch (e) {
    console.log('removeToken', e);
  }
};

export const setTokens = (tokens: ITokens) => {
  setToken(Token.access_token, tokens.access_token);
  setToken(Token.refresh_token, tokens.refresh_token);
};

export const removeTokens = () => {
  removeToken(Token.access_token);
  removeToken(Token.refresh_token);
};
