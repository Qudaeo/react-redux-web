import type {PayloadAction} from '@reduxjs/toolkit';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {apiAuth} from '../../api/apiAuth';
import {removeTokens} from '../../services/localStorage';
import {clearItems} from './itemsSlice';

export interface IUser {
  email: string;
  name: string;
  password: string;
}

export interface AuthState {
  isAuth: boolean;
  user: IUser;
}

export const login = createAsyncThunk(
  'auth/login',
  async ({email, password}: {email: string; password: string}) =>
    await apiAuth.login(email, password)
);

export const registration = createAsyncThunk(
  'auth/registration',
  async ({
    email,
    name,
    password,
  }: {
    email: string;
    name: string;
    password: string;
  }) => await apiAuth.registration(email, name, password)
);

export const appExit = createAsyncThunk('auth/appExit', (_, thunkAPI) => {
  thunkAPI.dispatch(clearItems());
  removeTokens();
});

const initialState: AuthState = {
  isAuth: false,
  user: {
    name: '',
    email: '',
    password: '',
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    setAuth: (state, action: PayloadAction<{isAuth: boolean}>) => {
      state.isAuth = action.payload.isAuth;
    },
  },
  extraReducers: builder => {
    builder.addCase(login.fulfilled, (state, action) => ({
      user: {
        name: action.payload?.name || '',
        email: action.payload?.email || '',
        password: '',
      },
      isAuth: true,
    }));

    builder.addCase(registration.fulfilled, state => {
      state.isAuth = true;
    });

    builder.addCase(appExit.fulfilled, () => initialState);
  },
});

export const {setAuth, setUser} = authSlice.actions;

export default authSlice.reducer;
