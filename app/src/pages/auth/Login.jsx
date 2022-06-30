import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
  regular,
  brands,
} from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import s

const Login = () => {
  return (
    <Fragment>
      <div className="columns is-justify-content-center">
        <div className="column is-12-mobile is-8-tablet is-4-desktop">
          <form className="box">
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className="input"
                  type="email"
                  placeholder="e.g. alex@example.com"
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  className="input"
                  type="password"
                  placeholder="********"
                />
              </div>
            </div>

            <FontAwesomeIcon icon={solid('user-secret')} />
            <FontAwesomeIcon icon={regular('coffee')} />
            <FontAwesomeIcon icon={brands('twitter')} />

            <button className="button is-primary">Sign in</button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
