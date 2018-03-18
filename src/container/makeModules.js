import React from 'react';
import { History } from './route';

class MakeModules extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modules: ['','','','']
        };
        this.makeRequest = this.makeRequest.bind(this);
        this.update = this.update.bind(this);
    }
    update (value, path) {
        let newState = Object.assign({}, this.state);
        newState.modules[path] = value;
        this.setState(Object.assign({},newState));
    }
    makeRequest() {
        const State = Object.assign({}, this.state);
        fetch('http://192.168.43.178:3000/courses2',{
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body : JSON.stringify({
                token : localStorage.getItem('token'),
                modules : this.state.modules,
                courseId : localStorage.getItem('_Id')
            })
        }).then((res) => {
            console.log(res);
            return res.json();
        }).then((data) => {
            console.log(data);
            localStorage.setItem("_Id", data.body.id);
        }).catch((err) => {
            console.log(err);
        })
    }
    render() {
        return(
            <div className="overlay">
            <div className="wrapper">
                <div className="grid_container">
                Create new course
                    <form className="reg_form" onChange={(e) => this.update(e.target.value,e.target.name)}>
                        <input type="text" name="0" placeholder="module1" /><br />
                        <input type="text" name="1" placeholder="module2" /><br />
                        <input type="text" name="2" placeholder="module3" /><br/>
                        <input type="text" name="3" placeholder="module4" /><br/>
                    </form>
                    <button type="submit" name="register" onClick={this.makeRequest}>REGISTER</button>
                </div>
            </div>
        </div>
        )
    }
}

export default MakeModules;