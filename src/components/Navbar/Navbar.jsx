import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
function Navbar() {
const navigate = useNavigate()
const handleLoginClick = () => {
navigate('/')
}

const handleHomeClick = () => {
  navigate('/home')
}

const handleSubmitTestClick = () => {
  navigate('/submittest')
}

  return (
    <section className='nav-bar'>
      <button className='nav-button' onClick={handleHomeClick}>Home</button>
      <button className='nav-button' onClick={handleSubmitTestClick}>Submit a Test</button>
      <button className='nav-button'  onClick={handleLoginClick}>Login/Logout</button>
      <h3>Welcome user!</h3>
    </section>
  );
}

export default Navbar;
