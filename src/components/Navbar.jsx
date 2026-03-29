import React from 'react'

import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
        <div className="logo">
            Shopy
        </div>

        <div className="main-links">
            <Link to='/' className='home-btn'>Home</Link>
            <Link to='/checkout' className='checkout-btn'>Checkout</Link>
        </div>

        <div className="auth-links">
            <Link to='/auth' className='login-btn'>Login</Link>
            <Link to='/auth' className='signup-btn'>Sign Up</Link>
        </div>
    </nav>
  )
}

export default Navbar;