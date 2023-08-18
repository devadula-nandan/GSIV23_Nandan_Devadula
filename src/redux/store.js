import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './reducers/moviesSlice';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  movies: moviesReducer,
  // remaining reducers
});

export const store = configureStore({
  reducer: rootReducer,
});