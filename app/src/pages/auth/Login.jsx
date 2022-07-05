import React, { useEffect, useState } from 'react';
import ErrorService from 'services/ErrorService';

function Login() {
  // states
  const [isLoading, setIsLoading] = useState(true);
  const [version, setVersion] = useState('1.0.0');
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    const loadVersion = async () => {
      const appVersion = await window.electron.getVersion();
      setIsLoading(false);
      setVersion(appVersion);
    };

    loadVersion();
  }, []);

  const onInputChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      const result = await window.electron.login(formData);
      console.log(result);
    } catch (loginError) {
      setError(ErrorService.fetchError(loginError));
    }
  };

  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <div className="columns is-justify-content-center section mt-6">
      <div className="column is-12-mobile is-6-tablet is-4-desktop">
        {error && (
          <article className="message is-danger">
            <div className="message-body">
              <strong>Error</strong>
              {error}
            </div>
          </article>
        )}

        <form className="box">
          <div className="field">
            <label className="label" htmlFor="email">
              Email*
            </label>
            <div className="control">
              <input
                className="input"
                type="email"
                placeholder="e.g. alex@example.com"
                id="email"
                name="email"
                onChange={onInputChangeHandler}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Password*</label>
            <div className="control">
              <input
                className="input"
                type="password"
                placeholder="********"
                name="password"
                onChange={onInputChangeHandler}
              />
            </div>
          </div>

          <button
            className="button is-primary"
            onClick={loginHandler}
            type="button">
            Sign in
            <i className="fa-solid fa-right-to-bracket ml-2" />
          </button>
        </form>

        <p>v{version}</p>
      </div>
    </div>
  );
}

export default Login;
