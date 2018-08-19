import React, { Component } from 'react';
import {postData} from '../services/postData'

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      first_name: '',
      last_name: '',
      personal_phone: '',
      password: '',
      confirmPassword: '',
    }
    this.signUp = this.signUp.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  signUp() {
    console.log(this.state);
    postData('/auth/signup', this.state).then((result) => {       //post sign up data
      console.log(result);
    });
  }
  onChange(e) {
    this.setState({[e.target.name]: e.target.value});     //set state as the input value
  }

  render() {
    return (
      <div className="SignUp"  className="App">
        <h1>Create User</h1>
        <input
          name= 'email'
          placeholder= 'email'
          type= 'email'
          onChange= {this.onChange}
        />
        <input
          name= 'first_name'
          placeholder= 'First name'
          type= 'string'
          onChange= {this.onChange}
        />
        <input
          name= 'last_name'
          placeholder= 'Last name'
          type= 'string'
          onChange= {this.onChange}
        />
        <input
          name= 'personal_phone'
          placeholder= 'Personal phone'
          type= 'integer'
          onChange= {this.onChange}
        />
        <input
          name= 'password'
          placeholder= 'password'
          type= 'password'
          onChange= {this.onChange}
        />
        <input
          name= 'confirmPassword'
          placeholder= 're-type password'
          type= 'password'
          onChange= {this.onChange}
        />
        <button
          type="button"
          onClick= {() => this.signUp()}        //sign up
          >
          Submit
        </button>
      </div>
    );
  }
}

export default SignUp;
