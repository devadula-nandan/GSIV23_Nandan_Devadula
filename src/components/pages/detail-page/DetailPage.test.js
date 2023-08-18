import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import DetailPage from './DetailPage';
import { initialState as moviesInitialState } from '../../../redux/reducers/moviesSlice';


// Mock the apiRequest module
jest.mock('../../../services/api', () => ({
    __esModule: true,
    default: {
        get: jest.fn(),
    },
}));


const responseData = {
    "original_title": "Talk to Me",
    "overview": "When a group of friends discover how to conjure spirits using an embalmed hand, they become hooked on the new thrill, until one of them goes too far and unleashes terrifying supernatural forces.",
    "poster_path": "/kdPMUMJzyYAc4roD52qavX0nLIC.jpg",
    "release_date": "2023-07-26",
    "runtime": 95,
    "title": "Talk to Me",
    "video": false,
    "vote_average": 7.052,
    "vote_count": 181,
    "cast": [
        {
            "adult": false,
            "gender": 1,
            "id": 3115932,
            "known_for_department": "Acting",
            "name": "Sophie Wilde",
            "original_name": "Sophie Wilde",
            "popularity": 16.405,
            "profile_path": "/3ImqawPfIsu95THFeCYGQw2500H.jpg",
            "cast_id": 1,
            "character": "Mia",
            "credit_id": "62ea87f76d9fe8005eeda022",
            "order": 0
        },
        {
            "adult": false,
            "gender": 2,
            "id": 3047804,
            "known_for_department": "Acting",
            "name": "Joe Bird",
            "original_name": "Joe Bird",
            "popularity": 21.284,
            "profile_path": "/nhkPLaVaDFVuI1oFRdJcgs95pyK.jpg",
            "cast_id": 3,
            "character": "Riley",
            "credit_id": "62ea8816091e62005d2c11e6",
            "order": 1
        }
    ],
    "crew": [
        {
            "adult": false,
            "gender": 1,
            "id": 502,
            "known_for_department": "Acting",
            "name": "Miranda Otto",
            "original_name": "Miranda Otto",
            "popularity": 24.508,
            "profile_path": "/szME1IBVTLgiKrO5D5wvOGnvUDW.jpg",
            "credit_id": "64d34b29db4ed600ad2392ed",
            "department": "Production",
            "job": "Executive Producer"
        },
        {
            "adult": false,
            "gender": 1,
            "id": 37281,
            "known_for_department": "Production",
            "name": "Nikki Barrett",
            "original_name": "Nikki Barrett",
            "popularity": 1.091,
            "profile_path": null,
            "credit_id": "62ea8ca06d9fe80059760a7a",
            "department": "Production",
            "job": "Casting Director"
        }
    ]
}


const mockStore = configureStore([thunk]);

describe('DetailPage Component', () => {
    it('renders correctly with mock data', () => {
        const initialState = {
            movies: {
                ...moviesInitialState,
                movieDetails: responseData,
            },
        };
        const store = mockStore(initialState);

        render(
            <Provider store={store}>
                <DetailPage />
            </Provider>
        );

        expect(screen.getByText(responseData.title)).toBeInTheDocument();
        expect(screen.getByAltText(`${responseData.title} (${responseData.release_date})`)).toBeInTheDocument();
        const imgElement = screen.getByRole('img');
        expect(imgElement).toHaveAttribute('src', `https://image.tmdb.org/t/p/w300${responseData.poster_path}`);
    });
});
