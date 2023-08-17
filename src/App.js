import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

// Public Components
import Layout from './components/layout/Layout';
import NotFound from './components/pages/not-found/NotFound';
import ListingPage from './components/pages/listing-page/ListingPage.jsx';
import DetailPage from './components/pages/detail-page/DetailPage';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* public Routes */}
          <Route path="/" element={<ListingPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />

          {/* 404 Not Found Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;