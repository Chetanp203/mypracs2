import React from 'react';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav-con'>
        <h1><em>Pracs</em></h1>
        <div className='con-2'>
            <ul>
                <li>Mens</li>
                <li>Womens</li>
                <li>Kids</li>
            </ul>
        </div>

        <div className='con-3'>
            <ul>
                <li>All products</li>
                <li>Add product</li>
                <li>Your products</li>
            </ul>
        </div>
        
        <div className='con-4'>
            <ul>
                <li>Cart</li>
                <li>Profile</li>
                <li>Login/Register</li>
                <li>Logout</li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar