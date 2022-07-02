import React, { Fragment, useState } from 'react';
import ErrorService from 'services/ErrorService';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  // hooks
  const navigate = useNavigate();

  // states
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const onInputChangeHandler = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const signupHandler = async (e) => {
    e.preventDefault();

    try {
      const result = await window.electron.signup(formData);
      setSuccess(result);
      navigate('/login', { replace: true });
    } catch (error) {
      setError(ErrorService.fetchError(error));
    }
  };

  console.log(formData);

  return (
    <Fragment>
      <Fragment>
        <div className="columns is-justify-content-center section mt-6">
          <div className="column is-12-mobile is-8-tablet is-4-desktop">
            {error && (
              <article className="message is-danger">
                <div className="message-body">
                  <strong>Error</strong>
                  {error}
                </div>
              </article>
            )}

            {success && (
              <article className="message is-success">
                <div className="message-body">
                  <strong>Success</strong> {success}
                </div>
              </article>
            )}

            <form className="box">
              <div className="field">
                <label className="label">First Name*</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="John"
                    name="firstName"
                    onChange={onInputChangeHandler}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Last Name*</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Doe"
                    name="lastName"
                    onChange={onInputChangeHandler}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Email*</label>
                <div className="control">
                  <input
                    className="input"
                    type="email"
                    placeholder="e.g. alex@example.com"
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

              <button className="button is-success" onClick={signupHandler}>
                Sign Up
                <i className="fa-solid fa-user-plus ml-2"></i>
              </button>
            </form>
          </div>
        </div>
      </Fragment>
    </Fragment>
  );
};

export default SignUp;
