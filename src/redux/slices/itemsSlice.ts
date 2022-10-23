import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {apiItems} from '../../api/apiItems';
import {IItem} from '../../types/items';

export interface ItemsState {
  currentPage: number;
  pageLoading: {[key: number]: boolean};
  items: {[key: number]: IItem[]};
}

export const getItems = createAsyncThunk(
  'items/getItems',
  async (page: number) => {
    return await apiItems.getItems(page);
  }
);

const initialState: ItemsState = {
  currentPage: 1,
  pageLoading: {},
  items: {},
};

export const itemsSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearItems: () => initialState,
  },
  extraReducers: builder => {
    builder.addCase(getItems.pending || getItems.rejected, state => {
      state.pageLoading[state.currentPage] = true;
    });

    builder.addCase(getItems.fulfilled, (state, action) => {
      if (action.payload) {
        state.items[state.currentPage] = action.payload.data;
      }
      state.pageLoading[state.currentPage] = false;
    });
  },
});

export const {clearItems} = itemsSlice.actions;

export default itemsSlice.reducer;
