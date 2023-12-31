import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import apiRequest from '../../services/api';

export const getAllMovies = createAsyncThunk(
  'movies/allMovies',
  async (p, thunkAPI) => {
    try {
      const response = await apiRequest('get', `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${p}&sort_by=popularity.desc`);
      const { page, results, total_pages, total_results } = response;
      return {
        page,
        results,
        total_pages,
        total_results,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const searchMovies = createAsyncThunk(
  'movies/searchMovies',
  async ({ query, page }, thunkAPI) => {
    try {
      const response = await apiRequest('get', `/3/search/movie?query=${query}&page=${page}`);
      const { results, total_pages } = response;
      return {
        results,
        total_pages,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getMovieDetails = createAsyncThunk(
  'movies/details',
  async (id, thunkAPI) => {
    try {
      const data = await apiRequest('get', `/3/movie/${id}?language=en-US`);
      const { cast, crew } = await apiRequest('get', `/3/movie/${id}/credits?language=en-US`);
      return {
        ...data,
        cast,
        crew,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    moviesList: [],
    movieDetails: {},
    currentPage: 1,
    totalPages: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      state.currentPage = 1;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(getAllMovies.pending, (state) => {
        state.isLoading = true;
        state.error = null;
    })
    .addCase(getAllMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.moviesList = action.payload.results;
        state.totalPages = action.payload.total_pages > 500 ? 500 : action.payload.total_pages;
    })
    .addCase(getAllMovies.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    })
    .addCase(getMovieDetails.pending, (state) => {
        state.isLoading = true;
        state.error = null;
    })
    .addCase(getMovieDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.movieDetails = action.payload; 
    })
    .addCase(getMovieDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    })
    .addCase(searchMovies.pending, (state) => {
        state.isLoading = true;
        state.error = null;
    })
    .addCase(searchMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.moviesList = action.payload.results;
        state.totalPages = action.payload.total_pages;
    })
    .addCase(searchMovies.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    });
  },
});

export const { setCurrentPage, setSearchQuery } = moviesSlice.actions;
export default moviesSlice.reducer;

export const selectMovies = (state) => state.movies;
export const selectSearch = (state) => state.movies.searchQuery;
