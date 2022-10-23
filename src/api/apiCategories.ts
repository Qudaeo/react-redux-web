import axiosInstance from './axiosInstance';
import {Url} from './urls';
import {ICategory} from '../types/categories';

export const apiCategories = {
  getCategories: async (ids: number[]) => {
    try {
      return await axiosInstance
        .get<ICategory[]>(Url.PROTECTED_CATEGORIES + `?ids=[${ids}]`)
        .then(response => response.data);
    } catch (e) {
      console.log('getCategories error', e);
    }
  },
};
