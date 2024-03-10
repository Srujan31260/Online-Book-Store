import React, { useState } from 'react';
import axios from 'axios';
import './ChangePassword.css'; // Import the CSS file

function ChangePassword() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'oldPassword') {
      setOldPassword(value);
    } else if (name === 'newPassword') {
      setNewPassword(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/changepassword', {
        oldPassword,
        newPassword,
      });
      setMessage(response.data.message);
      setOldPassword('');
      setNewPassword('');
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className="ChangePasswordContainer">
      <h2 className="ChangePasswordTitle">Change Password</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="FormLabel">Old Password:</label>
          <input
            type="password"
            name="oldPassword"
            value={oldPassword}
            onChange={handleChange}
            className="FormInput"
          />
        </div>
        <div>
          <label className="FormLabel">New Password:</label>
          <input
            type="password"
            name="newPassword"
            value={newPassword}
            onChange={handleChange}
            className="FormInput"
          />
        </div>
        <button type="submit" className="SubmitButton">Change Password</button>
      </form>
      {message && <p className="Message">{message}</p>}
    </div>
  );
}

export default ChangePassword;
