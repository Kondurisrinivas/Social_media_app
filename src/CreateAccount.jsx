import React from 'react';
import CoverPage from './CoverPage';
import './CreateAccount.css';
import flight from './assets/flightimg.png';
import { useNavigate } from 'react-router-dom';
function CreateAccount() {
  const navigate = useNavigate();
  const handleContinue = () => {
    navigate('/create-account-otp');
  };

  return (
    <div>
      <CoverPage />

      <div className="create-account-container">
        <img className="flightimg" src={flight} alt="flightimg" />
        <h1>Create Your Account</h1>
        <form className="create-account-form">

          <div >
            <label id='nametag'>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="create-account-input"
              />
          </div>

          <div>
            <label id='emailtag'>
              Email ID </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your mail"
                className="create-account-input"
              />
            
          </div>

          <button
            type="button"
            onClick={handleContinue}
            className="create-account-button"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
