import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './reducers/userSlice';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  user: movieReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
