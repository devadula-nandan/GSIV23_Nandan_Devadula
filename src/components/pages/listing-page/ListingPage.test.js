import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom'; // Import the BrowserRouter
import ListingPage from './ListingPage';
import { initialState as moviesInitialState } from '../../../redux/reducers/moviesSlice';

// Mock the apiRequest module
jest.mock('../../../services/api', () => ({
    __esModule: true,
    default: {
        get: jest.fn(),
    },
}));

const responseData = [
    {
        "adult": false,
        "backdrop_path": "/zN41DPmPhwmgJjHwezALdrdvD0h.jpg",
        "genre_ids": [
            28,
            878,
            27
        ],
        "id": 615656,
        "original_language": "en",
        "original_title": "Meg 2: The Trench",
        "overview": "An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.",
        "popularity": 1570.981,
        "poster_path": "/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg",
        "release_date": "2023-08-02",
        "title": "Meg 2: The Trench",
        "video": false,
        "vote_average": 7,
        "vote_count": 468
    },
    {
        "adult": false,
        "backdrop_path": "/lDCIQ1Qe7cRnhZ4ybQVVEbadMZ.jpg",
        "genre_ids": [
            27,
            53
        ],
        "id": 1008042,
        "original_language": "en",
        "original_title": "Talk to Me",
        "overview": "When a group of friends discover how to conjure spirits using an embalmed hand, they become hooked on the new thrill, until one of them goes too far and unleashes terrifying supernatural forces.",
        "popularity": 728.037,
        "poster_path": "/kdPMUMJzyYAc4roD52qavX0nLIC.jpg",
        "release_date": "2023-07-26",
        "title": "Talk to Me",
        "video": false,
        "vote_average": 7.1,
        "vote_count": 177
    },
    {
        "adult": false,
        "backdrop_path": "/iEFuHjqrE059SmflBva1JzDJutE.jpg",
        "genre_ids": [
            16,
            10751,
            28,
            14,
            10749
        ],
        "id": 496450,
        "original_language": "fr",
        "original_title": "Miraculous - le film",
        "overview": "A life of an ordinary Parisian teenager Marinette goes superhuman when she becomes Ladybug. Bestowed with magical powers of creation, Ladybug must unite with her opposite, Cat Noir, to save Paris as a new villain unleashes chaos unto the city.",
        "popularity": 686.879,
        "poster_path": "/dQNJ8SdCMn3zWwHzzQD2xrphR1X.jpg",
        "release_date": "2023-07-05",
        "title": "Miraculous: Ladybug & Cat Noir, The Movie",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 476
    }
];


const mockStore = configureStore([thunk]);

describe('Listing Page component', () => {
    it('renders correctly with mock data', () => {
        const store = mockStore({
            movies: {
                ...moviesInitialState,
                moviesList: responseData,
            },
        });

        render(
            <Provider store={store}>
                <BrowserRouter> {/* Wrap with BrowserRouter */}
                    <ListingPage />
                </BrowserRouter>
            </Provider>
        );

        expect(screen.getByText('Talk to Me')).toBeInTheDocument();
        // Add more assertions as needed based on your component's content
    });
});
