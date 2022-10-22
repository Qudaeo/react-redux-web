import axiosInstance from './axiosInstance';
import {Url} from './urls';

export const apiItems = {
  getItems: async () => {
    try {
      return await axiosInstance
        .get(Url.PROTECTED_ITEMS)
        .then(response => response.data);
    } catch (e) {
      console.log('getItems error', e);
    }
  },
};
