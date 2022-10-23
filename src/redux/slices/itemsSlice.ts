import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {apiItems} from '../../api/apiItems';
import {IItem} from '../../types/items';

export interface ItemsState {
  currentPage: number;
  lastPage: number;
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
  lastPage: 0,
  pageLoading: {},
  items: {},
};

export const itemsSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<{page: number}>) => {
      state.currentPage = action.payload.page;
    },
    clearItems: () => initialState,
  },
  extraReducers: builder => {
    builder.addCase(getItems.fulfilled, (state, action) => {
      if (action.payload) {
        state.items[state.currentPage] = action.payload.data;
        state.lastPage = action.payload.last_page;
      }
      state.pageLoading[state.currentPage] = false;
    });

    builder.addCase(getItems.pending, state => {
      state.pageLoading[state.currentPage] = true;
    });

    builder.addCase(getItems.rejected, state => {
      state.pageLoading[state.currentPage] = false;
    });
  },
});

export const {setCurrentPage, clearItems} = itemsSlice.actions;

export default itemsSlice.reducer;
