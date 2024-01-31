// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`http://localhost:3001/signup/login`, {
        username: username,
        password: password,
      });

      if (response.data.success) {
        // Store the token in localStorage
        localStorage.setItem('token', response.data.token);

        // Redirect or perform any necessary actions after successful login
        alert('Login successful');
        console.log(response.data);
        // navigate('/dashboard'); // Redirect to the dashboard or any other page
      } else {
        setError('Invalid Username or Password. Please try again.');
        console.log(response.data);
      }
    } catch (err) {
      setError('Error occurred during login. Please try again.');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
