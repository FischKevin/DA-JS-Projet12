import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './page/HomePage';
import LoginPage from './page/LoginPage';

function AppRouter() {
  return (
    <Routes>
      {/* Route for the homepage. */}
      <Route path="/" element={<LoginPage />} />
      {/* Route for the "APropos" page. */}
      <Route path="/dashboard/:userId" element={<HomePage />} />
    </Routes>
  );
}

export default AppRouter;