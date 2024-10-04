import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {apiCategories} from '../../api/apiCategories';
import {ICategory} from '../../types/categories';

export interface ItemsState {
  loading: boolean;
  categories: {[key: number]: ICategory};
}

export const getCategories = createAsyncThunk(
  'items/getCategories',
  async (ids: number[]) => {
    return await apiCategories.getCategories(ids);
  },
);

const initialState: ItemsState = {
  loading: false,
  categories: {},
};

export const categoriesSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearCategories: () => initialState,
  },
  extraReducers: builder => {
    builder.addCase(getCategories.fulfilled, (state, action) => {
      if (action.payload) {
        action.payload.forEach(category => {
          state.categories[category.id] = category;
        });
      }
      state.loading = false;
    });

    builder.addCase(getCategories.pending, state => {
      state.loading = true;
    });

    builder.addCase(getCategories.rejected, state => {
      state.loading = false;
    });
  },
});

export const {clearCategories} = categoriesSlice.actions;

export default categoriesSlice.reducer;
