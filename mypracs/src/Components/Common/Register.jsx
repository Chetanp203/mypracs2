import React from 'react';
import './Register.css'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const router = useNavigate();
  return (
    <div className='reg-con'>
        <div className='register'>
            <h1>Sign Up</h1>
            <form className='registration'>
                <label>Name</label><br />
                <input type="text"  /><br />
                <label>Email</label><br />
                <input type="email"  /><br />
                <label>Select Role</label><br />
                <select>
                    <option value="Buyer">Buyer</option>
                    <option value="Seller">Seller</option>
                </select><br />
                <label>Phone Number</label><br />
                <input type="text"  /><br />
                <label>Pin</label><br />
                <input type="text"  /><br />
                <label>Password</label><br />
                <input type="password"  /><br />
                <input type="submit" value="Register" className='reg-btn' />
                <span>Dont have a account <span onClick={()=>router('/login')}><b>Login here!</b></span>
                </span>
            </form>
        </div>

    </div>
  )
}

export default Register