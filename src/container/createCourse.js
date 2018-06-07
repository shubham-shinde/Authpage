import React from 'react';
import { History } from './route';

class CreateCourse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Title : "",
            Discription : "",
            Language : ""
        };
        this.makeRequest = this.makeRequest.bind(this);
        this.update = this.update.bind(this);
    }
    update (value, path) {
        let newState = Object.assign({}, this.state);
        newState[path] = value;
        this.setState(Object.assign({},newState));
    }
    makeRequest() {
        const State = Object.assign({}, this.state);
        fetch('http://192.168.43.178:3000/courses1',{
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body : JSON.stringify({
                token : localStorage.getItem('token'),
                title : this.state.Title,
                description : this.state.Discription,
                language : this.state.Language
            })
        }).then((res) => {
            console.log(res);
            return res.json();
        }).then((data) => {
            console.log(data);
            localStorage.setItem("_Id", data.body.id);
        }).catch((err) => {
            console.log(err);
        });
        History.push('/makeModules');
    }
    render() {
        return(
            <div className="overlay">
            <div className="wrapper">
                <div className="grid_container">
                Create new course
                    <form className="reg_form" onChange={(e) => this.update(e.target.value,e.target.name)}>
                        <input type="text" name="Title" placeholder="Title" /><br />
                        <input type="text" name="Discription" placeholder="Discription" /><br />
                        <input type="text" name="Type" placeholder="Type" /><br/>
                        <input type="text" name="Language" placeholder="Language" /><br/>
                    </form>
                    <button type="submit" name="register" onClick={this.makeRequest}>REGISTER</button>
                </div>
            </div>
        </div>
        )
    }
}

export default CreateCourse;