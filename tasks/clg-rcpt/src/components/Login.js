import React from 'react';

class Login extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        return(
            <div>
            <input className="user" type="text" placeholder="Enter username" />
            <input className="pass" type="password" placeholder="Enter password" />
            <button className="reset_pass">Forget</button>
            <button className="login">Login</button>
            </div>
        );
    }
}

export default Login;