import axiosInstance from './axiosInstance';
import {Url} from './urls';
import {IItemsResponse} from '../types/items';

export const apiItems = {
  getItems: async (page: number) => {
    return await axiosInstance
      .get<IItemsResponse>(Url.PROTECTED_ITEMS + '?page=' + page)
      .then(response => response.data);
  },
};
