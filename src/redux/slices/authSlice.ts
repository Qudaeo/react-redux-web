import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {apiAuth} from '../../api/apiAuth';
import {setToken, Token} from '../../services/localStorage';

export interface IUser {
  email: string;
  name: string;
  password: string;
}

export interface AuthState {
  user: IUser;
}

export const login = createAsyncThunk(
  'auth/login',
  async ({email, password}: {email: string; password: string}) => {
    console.log('auth/login');

    const data = await apiAuth.login(email, password);

    if (data) {
      setToken(Token.access_token, data.tokens.access_token);
      setToken(Token.refresh_token, data.tokens.refresh_token);
      return data;
    }
  }
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
  }) => {
    console.log('auth/registration');

    return await apiAuth.registration(email, name, password);
  }
);

const initialState: AuthState = {
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
  },
  extraReducers: builder => {
    builder.addCase(login.fulfilled, (state, action) => {
      console.log(state, action);
      //state.entities.push(action.payload);
    });

    builder.addCase(registration.fulfilled, (state, action) => {
      console.log(state, action);
      //state.entities.push(action.payload);
    });
  },
});

export const {setUser} = authSlice.actions;

export default authSlice.reducer;
