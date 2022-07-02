import React, { Fragment } from 'react';
import './root.css';
import Navbar from 'partials/Navbar';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import LoginPage from 'pages/auth/Login';
import SignupPage from 'pages/auth/Signup';
import HomeIndexPage from 'pages/home/Index';
import NotFoundPage from 'pages/error/NotFoundPage';
import RequireAuth from 'components/auth/RequireAuth';

const Root = () => {
  return (
    <Fragment>
      <MemoryRouter initialEntries={['/']}>
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<SignupPage />}></Route>
          <Route
            path="/"
            element={
              <RequireAuth>
                <HomeIndexPage />
              </RequireAuth>
            }></Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MemoryRouter>
    </Fragment>
  );
};

export default Root;
