import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="is-flex is-justify-content-space-between m-2">
      <div>
        <Link to="/">
          <span className="has-text-weight-semibold is-size-4">TodoHut</span>
        </Link>
      </div>
      <div className="is-flex">
        <NavLink to="/login">
          {({ isActive }) => (
            <div className="is-flex is-flex-direction-column is-align-items-center">
              <div>
                <i className="fa-solid fa-right-to-bracket fa-2x"></i>
              </div>
              <div>
                <span
                  className={
                    isActive
                      ? 'has-text-weight-semibold is-size-5'
                      : 'is-size-5 mx-2'
                  }>
                  Login
                </span>
              </div>
            </div>
          )}
        </NavLink>

        <NavLink to="/signup">
          {({ isActive }) => (
            <div className="is-flex is-flex-direction-column is-align-items-center">
              <div>
                <i className="fa-solid fa-user-plus fa-2x"></i>
              </div>
              <div>
                <span
                  className={
                    isActive
                      ? 'has-text-weight-semibold is-size-5'
                      : 'is-size-5 mx-2'
                  }>
                  SignUp
                </span>
              </div>
            </div>
          )}
        </NavLink>
      </div>
      <div>Other</div>
    </div>
  );
};

export default Navbar;
