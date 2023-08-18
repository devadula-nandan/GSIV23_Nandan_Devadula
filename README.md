# Movie App Readme

## Introduction

Welcome to the Movie App README. This guide provides instructions on running and using the Movie App, a React-based application designed for exploring upcoming movies, searching for specific titles, and accessing detailed movie information.

## Features

The Movie App offers the following features:

1. **List Page**
   - Displays upcoming movies in movie cards, sorted by popularity. (Consider changing "primary_release_date" to "popularity" on line 8 in moviesSlice.js for better UI evaluation)
   - Each movie card includes media (picture), title, rating (average vote), and a truncated description with ellipsis.

2. **Pagination**
   - Responsive pagination enables easy navigation through different result lists, including search results.

3. **Search**
   - Users can search for movies using the integrated search API.
   - Search results seamlessly integrate with the List page.
   - Input debounce optimizes API calls for better performance.

4. **Details Page**
   - Clicking on a movie card navigates to the Details page.
   - Comprehensive movie information is displayed, including title, rating, year of release, length, director, cast, and description.

5. **Responsive Design**
   - The UI is built with the Tailwind CSS framework, enhancing styling with minimal CSS code, along with the DaisyUI plugin.

6. **State Management**
   - Utilizes Redux for effective state management and data flow, using Redux Thunk for asynchronous requests.

7. **Routing**
   - Implements React Router for seamless navigation between routes and pages.

## Getting Started

Follow these steps to run the Movie App:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd <project-directory>`
3. Install dependencies: `npm install`
4. Create a `.env` file in the root directory.
5. Add the following environment variables to the `.env` file:

```REACT_APP_API_URL="https://api.themoviedb.org"``` \
```REACT_APP_API_BEARER=<your-api-token>```\
   
6. Save the `.env` file.
7. Run the development server: `npm start`
8. Access the app in your browser: [http://localhost:3000](http://localhost:3000)

## Usage

1. **List Page**
   - The List page displays upcoming movies in cards.
   - Use pagination to load more movies if there are more results.
   - Utilize the search bar to find movies, and clear the input to return to the default movie listing.

2. **Details Page**
   - Click a movie card to navigate to the Details page.
   - Detailed movie information is presented here.

3. **Navigation**
   - Use the browser's back button or the home button on the Details page to navigate back to the List page.

## Testing

Comprehensive unit tests and DOM tests ensure functionality and quality. Jest and React Testing Library are used for testing.

To run tests: `npm test`

## Optional Enhancements

For further enhancement:

1. Increase unit test coverage for components, reducers, and actions.
2. Improve accessibility with ARIA attributes and enhanced keyboard navigation.
3. Implement code splitting for better initial page load performance.
4. Convert the app to a Progressive Web App (PWA) to provide offline capabilities.
5. Consider Server-Side Rendering (SSR) using libraries like Remix.js for SEO and performance.

## Feedback

Consider scheduling the task over a weekend to accommodate those with daily work commitments.

