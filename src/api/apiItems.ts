import axiosInstance from './axiosInstance';

export const apiItems = {
  getItems: async () => {
    try {
      return await axiosInstance.get('items').then(response => response.data);
    } catch (e) {
      console.log('getItems error', e);
    }
  },
};
