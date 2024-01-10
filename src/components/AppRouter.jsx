import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './page/HomePage';
// import APropos from './Dashboard';
// import Error404 from './Error404';

function AppRouter() {
  return (
    <Routes>
      {/* Route for the homepage. */}
      <Route path="/" element={<HomePage />} />
      {/* Route for the "APropos" page.
      <Route path="/APropos" element={<APropos />} /> */}
      {/* Catch-all route for handling 404 Not Found errors.
      <Route path="*" element={<Error404 />} /> */}
    </Routes>
  );
}

export default AppRouter;