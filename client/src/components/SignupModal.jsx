import React from 'react';

const SignupModal = (props) => {
  const { toggleModal } = props;

  return (
    <div className="signup-container">
      <button type="button" onClick={toggleModal}>X</button>
      <input className="signup-input" type="text" placeholder="Enter Email" />
      <input className="signup-input" type="text" placeholder="Enter Password" />
      <button type="button">Signup</button>
    </div>
  );
};

export default SignupModal;
