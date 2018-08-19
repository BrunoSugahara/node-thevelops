import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {getData} from '../services/getData'

class GetUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
    }
    this.getUser = this.getUser.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  getUser() {
    console.log(this.state);
    getData('/users/' + this.state.id)       //post login data
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});     //set state as the input value
  }

  render() {
    return (
      <div className="GetUser" className="App">
        <h1>Get User</h1>
        <input
          name= 'id'
          placeholder= 'id'
          type= 'string'
          onChange= {this.onChange}
        />

        <button
          type="button"
          onClick= {() => this.getUser()}             //get User
            >
              Submit
        </button>

        <Link to="/editUser">
          <button
            type="button"
              >
                Edit User
          </button>
        </Link>

        <Link to="/editPassword">
          <button
            type="button"
              >
                Edit Password
          </button>
        </Link>

        <Link to="/">
          <button
            type="button"
              >
                Logout
          </button>
        </Link>

      </div>
    );
  }
}

export default GetUser;
