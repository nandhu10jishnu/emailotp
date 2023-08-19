// OTPForm.js
import React, { useState } from 'react';

const OTPForm = ({ onSubmit }) => {
  const [otp, setOTP] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(otp);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter OTP:</label>
      <input type="text" value={otp} onChange={(e) => setOTP(e.target.value)} />
      <button type="submit">Submit OTP</button>
    </form>
  );
};

export default OTPForm;
