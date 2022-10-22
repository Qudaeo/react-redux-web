import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {apiItems} from '../../api/apiItems';
import {IItem} from '../../types/items';

export interface ItemsState {
  items: IItem[];
}

export const getItems = createAsyncThunk('items/getItems', async () => {
  console.log('items/getItems');

  const response = await apiItems.getItems();

  console.log('getItems', response?.data);

  return response;
});

const initialState: ItemsState = {
  items: [],
};

export const itemsSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getItems.fulfilled, (state, action) => {
      console.log(state, action);
      state.items.push(...action.payload.data);
    });
  },
});

//export const {} = itemsSlice.actions;

export default itemsSlice.reducer;
