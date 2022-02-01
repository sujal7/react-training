import React from 'react';
import { Navigate, Route } from 'react-router-dom';

export default function AdminRoute({
  loggedIn,
  component: Component,
  ...rest
}) {
  return loggedIn ? (
    <Route element={<Component />} />
  ) : (
    <Navigate to={'/login'} />
  );
}
