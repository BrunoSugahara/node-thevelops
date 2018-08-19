import React, { Component } from 'react';
import {postData} from '../services/postData'
import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  login() {
    console.log(this.state);
    postData('/auth/login', this.state)       //post login data
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});     //set state as the input value
  }

  render() {
    return (
      <div className="login" className="App">
        <h1>Login</h1>
        <input
          name= 'email'
          placeholder= 'email'
          type= 'email'
          onChange= {this.onChange}
        />
        <input
          name= 'password'
          placeholder= 'password'
          type= 'password'
          onChange= {this.onChange}
        />
        <button
          type="button"
          onClick= {() => this.login()}       //login
          >
            Submit
          </button>
      </div>
    );
  }

}

export default Login;
