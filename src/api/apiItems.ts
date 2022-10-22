import axiosInstance from './axiosInstance';

export const apiItems = {
  getItems: async () => {
    try {
      return await axiosInstance
        .get('protected/items')
        .then(response => response.data);
    } catch (e) {
      console.log('getItems error', e);
    }
  },
};
