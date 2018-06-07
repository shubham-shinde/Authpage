import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { postRegisterForm } from './../Api'
import './auth.css';
import { History } from './route';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name :'',
            email : '',
            displayName :'',
            contectNo : '',
            password : ''
        }
    }
    update(data , path) {
        var newState = Object.assign({}, this.state);
        newState[path]= data;
        this.setState(newState);
    }
    requestToken() {
        postRegisterForm(this.state);
        History.push('/user');

    }
    render() {
        return(
            <div className="overlay">
                <div className="wrapper">
                    <div className="grid_container">
                        <form className="reg_form" onChange={(e) => this.update(e.target.value,e.target.name)}>
                            <input type="text" name="Name" placeholder="Full Name" /><br />
                            <input type="text" name="email" placeholder="e-mail" /><br />
                            <input type="text" name="displayName" placeholder="Display-Name" /><br/>
                            <input type="text" name="contectNo" placeholder="Contact Number" /><br/>
                            <input type="text" name="password" placeholder="password" /><br/>
                        </form>
                        <button type="submit" name="register" onClick={(e) => this.requestToken()}>REGISTER</button>
                        <form action="" className="login_form">
                            <input type="text" placeholder="e-mail" />
                            <input type="password" placeholder="password" />
                            <button type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;