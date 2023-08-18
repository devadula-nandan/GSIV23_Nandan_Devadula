import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllMovies } from './redux/reducers/moviesSlice';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Public Components
import Layout from './components/layout/Layout';
import NotFound from './components/pages/not-found/NotFound';
import ListingPage from './components/pages/listing-page/ListingPage.jsx';
import DetailPage from './components/pages/detail-page/DetailPage';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMovies(1));
  }, [dispatch]);
  return (
    <Router>
      <Layout>
        <Routes>
          {/* public Routes */}
          <Route path="/" element={<ListingPage />} />
          {/* <Route path="/listing" element={<ListingPage />} /> */}
          <Route path="/detail/:id" element={<DetailPage />} />

          {/* 404 Not Found Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;