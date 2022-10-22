import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface IUser {
  email: string;
  password: string;
}

export interface AuthState {
  user: IUser;
}

const initialState: AuthState = {
  user: {
    email: '',
    password: '',
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => ({
      ...state,
      user: {...state.user, ...action.payload},
    }),
  },
});

export const {setUser} = authSlice.actions;

export default authSlice.reducer;
