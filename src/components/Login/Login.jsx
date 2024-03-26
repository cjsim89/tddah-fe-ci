import React from 'react';
import './Login.css';

function Login() {
  const handleLogin = () => {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&scope=repo`
  };

  return (
    <section className="login-container">
      <h2>Login with GitHub</h2>
      <button onClick={handleLogin}>Login with GitHub</button>
    </section>
  );
}

export default Login;
