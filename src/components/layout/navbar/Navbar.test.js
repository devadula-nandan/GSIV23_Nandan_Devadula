import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';
import { act } from 'react-dom/test-utils';

jest.mock('../../../services/api', () => ({
  __esModule: true,
  default: {
    get: jest.fn(),
  },
}));

describe('Navbar', () => {
  it('should render properly', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </Provider>
    );

    const navbarComponent = screen.getByTestId('navbar');
    expect(navbarComponent).toBeInTheDocument();
  });
  
  it('should navigate to home page when home button is clicked', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/a-404-page']}> 
          <Navbar />
        </MemoryRouter>
      </Provider>
    );
  
    const homeButton = screen.getByTestId('home-button');
    
    await act(async () => {
      fireEvent.click(homeButton);
    });
  
    expect(window.location.pathname).toBe('/');
  });

  it('should display search input on listing page', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/listing']}>
          <Navbar />
        </MemoryRouter>
      </Provider>
    );

    const searchInput = screen.getByPlaceholderText(/search/i);
    expect(searchInput).toBeInTheDocument();
  });

  it('should display movie details title on detail page', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/detail/123']}>
          <Navbar />
        </MemoryRouter>
      </Provider>
    );

    const movieDetailsTitle = screen.getByText(/movie details/i);
    expect(movieDetailsTitle).toBeInTheDocument();
  });
});
