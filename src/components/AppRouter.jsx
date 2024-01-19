import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './page/HomePage';
import LoginPage from './page/LoginPage';
import Error404 from './page/Error404';

function AppRouter() {
  return (
    <Routes>
      {/* Route for the homepage. */}
      <Route path="/" element={<LoginPage />} />
      {/* Route for the "APropos" page. */}
      <Route path="/dashboard/:userId" element={<HomePage />} />
      {/* Route for the 404 page. */}
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default AppRouter;