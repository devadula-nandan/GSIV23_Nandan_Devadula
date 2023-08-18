import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './reducers/moviesSlice';
// Import other reducers if needed

const rootReducer = {
  movies: moviesReducer,
  // Add other reducer slices here
};

export const store = configureStore({
  reducer: rootReducer,
});
