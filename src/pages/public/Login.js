import React from 'react';

const Login = ()=>{
    return ( <div>
        <form>
        <fieldset>
            <label>User Name</label>
            <input type="text" placeholder="Username"/>
            <label>Password</label>
            <input type="password" placeholder="Password"/>
            <button type="submit">Login</button>
        </fieldset>
        </form>
    </div>)
}

export default Login