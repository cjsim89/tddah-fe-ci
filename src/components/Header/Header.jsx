import './Header.css'
import React from 'react'
import logo from '../../Images/excompanylogo.png'
function Header() {
  return (
    <div className='header'>
      <img src={logo} alt='Logo' className='logo' />
      <h1 className='title'>
        TTDAH!
        <h4 className='title-long'>Test-Driven Developement Achievement Hunter</h4>
      </h1>
    </div>
  )
}

export default Header
