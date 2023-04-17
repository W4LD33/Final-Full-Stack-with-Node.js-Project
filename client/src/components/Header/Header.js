import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='header-container'>
        <h1 className='header-logo'>AI Ethics and Governance</h1>
        <input className='header-search' placeholder='Search...'></input>
        <h2 className='header-account'>Login</h2>
        
    </div>
  )
}

export default Header
