import './Navbar.css'
import React from 'react'

function Navbar() {
  return (
    <section className='nav-bar'>
      <button>Home</button>
      <button>Achievements</button>
      <button>Login/Logout</button>
      <h3>Welcome user!</h3>
    </section>
  )
}

export default Navbar
