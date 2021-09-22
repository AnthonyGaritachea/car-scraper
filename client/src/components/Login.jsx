/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

import SignupModal from './SignupModal';

const Login = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <input className="login-input" type="text" placeholder="Enter Email" />
      <input className="login-input" type="text" placeholder="Enter Password" />
      <button type="button">Login</button>
      <p>not a member yet?</p>
      <p className="login-signup" onClick={toggleModal}>sign up</p>
      {modalIsOpen && <SignupModal toggleModal={toggleModal}/>}
    </div>
  );
};

export default Login;
