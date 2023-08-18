import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import apiRequest from './services/api';
import App from './App';
import { act } from 'react-dom/test-utils';

// Mock the apiRequest module
jest.mock('./services/api', () => ({
  __esModule: true,
  default: {
    get: jest.fn(),
  },
}));

const responseData = {
  results: [
    { adult: false, poster_path: null, genre_ids: [3], id: 615656, original_language: 'en' },
    { adult: false, poster_path: '/iEFuHjqrE059SmflBva1JzDJutE.jpg', genre_ids: [5], id: 496450, original_language: 'fr' },
    { adult: false, poster_path: '/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg', genre_ids: [2], id: 872585, original_language: 'en' },
  ],
};

describe('App', () => {
  it('should render properly with all components', async () => {
    apiRequest.get.mockResolvedValue({ data: responseData });

    await act(async () => {
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );
    });

    await waitFor(() => {
      const navbarComponent = screen.getByTestId('navbar');
      expect(navbarComponent).toBeInTheDocument();
    });
    await waitFor(() => {
      const moviesList = screen.getByTestId('movies-list');
      expect(moviesList).toBeInTheDocument();
    })
    await waitFor(() => {
      const pagination = screen.getByTestId('pagination');
      expect(pagination).toBeInTheDocument();
    })
  });

});
