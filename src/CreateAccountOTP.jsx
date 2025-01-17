import React from 'react'
import CoverPage from './CoverPage';
import flight from './assets/flightimg.png';
import './CreateAccountOTP.css';
function CreateAccountOTP() {
  return (
    <div>
        <CoverPage/>
        <div className="create-account-container">
            <img className="flightimg" src={flight} alt="flightimg" />
            <h1>Create Your Account</h1>
            <form className="create-account-form">
                <div >
                    <label id='otpTag'>Please verify your email ID to continue. 
                    We have sent an OTP</label>
                    <input
                    type="text"
                    name="Otp"
                    placeholder="Enter OTP"
                    className="create-account-otp-input"
                    />
                </div>
                <button
                    type="button"
                    className="create-account-button">
                    Continue
                </button>
            </form>
        </div>
    </div>
  )
}

export default CreateAccountOTP