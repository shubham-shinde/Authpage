import React from 'react';
import { History } from './route';
import { getCourses } from './../Api'

class Courses extends React.Component {
    constructor(props){
        super(props);
        this.state = '';
        this.componentDidMount = this.componentDidMount.bind(this);
        this.showData = this.showData.bind(this);
    }
    componentDidMount() {
        getCourses().then((res) => {
            console.log(res);
            var newState = res;
            this.setState(newState);
        })
    }
    showData() {
        console.log(this.state);
        History.push('/createCourse');
    }
    render() {
        return (
            <div onClick={this.showData}>courses</div>
        )
    }
}

export default Courses;