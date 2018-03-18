import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './auth.css';


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
        fetch('http://localhost:3000/register',{  //http://192.168.43.178:3000/register
            method: 'POST',
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
                email : this.state.email,
                userName : this.state.displayName,
                password : this.state.password,
                name : this.state.Name,
                mobile : this.state.contectNo
            })
        }).then((res) => {
            return res.json();
        }).then(
            (data) => {
                console.log(data)
                localStorage.setItem("token", data.token);
            }
        ).catch((err) => {
            console.log(err);
        })

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