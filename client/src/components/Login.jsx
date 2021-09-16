import React from "react";

const Login = () => {
    return(
        <div className='login-container'>
            <h1>Login</h1>            
            <input className='login-input' type='text' placeholder='Enter Email' />
            <input className='login-input' type='text' placeholder='Enter Password' />
            <button>Login</button>
            <p>not a member yet? <a className='login-signup'>sign up</a></p>
        </div>
    )
};

export default Login;