import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { logOut, login, refreshUser, userPost } from './operations';
import {
  handleLoginFulfilled,
  handleLogoutFulfilled,
  handlePending,
  handleRefreshUserFulfilled,
  handleRefreshUserPending,
  handleRefreshUserRejected,
  handleRejected,
} from './helpersAuthReducer';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const myAuth = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(userPost.pending, handlePending)
      .addCase(userPost.fulfilled, handleLoginFulfilled)
      .addCase(userPost.rejected, handleRejected)
      .addCase(login.fulfilled, handleLoginFulfilled)
      .addCase(logOut.fulfilled, handleLogoutFulfilled)
      .addCase(refreshUser.pending, handleRefreshUserPending)
      .addCase(refreshUser.fulfilled, handleRefreshUserFulfilled)
      .addCase(refreshUser.rejected, handleRefreshUserRejected);
  },
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const persistedReducer = persistReducer(persistConfig, myAuth.reducer);
