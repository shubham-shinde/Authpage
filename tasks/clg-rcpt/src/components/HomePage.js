import {connect} from 'react-redux';

import React from 'react';
import '../styles/reset.css';
import '../styles/home.css';
import PropTypes from 'prop-types';

class Registration extends React.Component {
  constructor(props,context){
  super(props,context);
  this.state ={
    name:'',
    college:'',
    fee:'',
    schedule:'',
    mop:'',
  }
// functions binding
  this.onChangetext=this.onChangetext.bind(this);
}

onChangetext(event){
  const value = event.target.value
  const newState = Object.assign({},this.state)
  newState.todotext = value;
  this.setState(newState);
  }


render() {
  return (
    <div className="page-container">
      <div className="receipt">Receipt</div>
      <form className="form-container" method="get|post" action="Submit.html">
          Name:<input name="name" className="name" onChange={this.onChangetext} type="text" placeholder="Name" /><br />
          College:<select name="college" className="clg" onChange={this.onChangetext} >
                  <option>Select Your College</option>
                  <option>IIMT Group of Colleges</option>
                  <option>Sharda University</option>
                  <option>IEC College of Engineering</option>
                  <option>GL Bajaj</option>
                  </select><br />
          Fee Paid:<input name="fee" className="fee" type="text" onChange={this.onChangetext} placeholder="fee paid" /><br />
          Schedule:<input name="schedule" type="checkbox" className="schedule" onChange={this.onChangetext} value="Sunday" />Sun
                  <input name="schedule" type="checkbox" className="schedule" onChange={this.onChangetext} value="Monday" />Mon
                  <input name="schedule" type="checkbox" className="schedule" onChange={this.onChangetext} value="Tuesday" />Tue
                  <input name="schedule" type="checkbox" className="schedule" onChange={this.onChangetext} value="Wednesday" />Wed
                  <input name="schedule" type="checkbox" className="schedule" onChange={this.onChangetext} value="Thursday" />Thu
                  <input name="schedule" type="checkbox" className="schedule" onChange={this.onChangetext} value="Friday" />Fri
                  <input name="schedule" type="checkbox" className="schedule" onChange={this.onChangetext} value="Saturday" />Sat <br />
          Mode of Payment:<select name="mop" className="mop" onChange={this.onChangetext} >
                  <option>Select payment mode</option>
                  <option>Cash</option>
                  <option>Online banking</option>
                  <option>Card</option>
                  </select><br />
                  <input name="submit" type="submit" value="submit" />
      </form>
    </div>
  );
 }
}
function mapStateToProps(state){

  return{

  }
}
function mapDispatchToProps(state){
  return{

  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Registration);

