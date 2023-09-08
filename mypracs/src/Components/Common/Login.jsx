import React from 'react';
import './Register.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const router = useNavigate();
  return (
    <div className='reg-con'>
          <div className='register'>
            <h1>Sign In</h1>
            <form className='registration'>
                <label>Email</label><br />
                <input type="email"  /><br />
                <label>Password</label><br />
                <input type="password"  /><br />
                <input type="submit" value="Login" className='reg-btn' />
                <span>Dont have a account <span onClick={()=>router('/register')}><b>Register here!</b></span>
                </span>
            </form>
        </div>
    </div>
  )
}

export default Login