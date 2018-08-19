import React, { Component } from 'react';
import {putData} from '../services/putData'

class EditPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      password: '',
      confirmPassword: '',
    }
    this.editPassword = this.editPassword.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  editPassword() {
    console.log(this.state);
    putData('/users/' + this.state.id, this.state).then((result) => {     //put user data
      console.log(result);
    });
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});     //set state as the input value
  }

  render() {
    return (
      <div className="EditPassword" className="App">
        <h1>Edit Password</h1>
        <input
          name= 'id'
          placeholder= 'id'
          type= 'string'
          onChange= {this.onChange}
        />
        <input
          name= 'old_password'
          placeholder= 'old password'
          type= 'password'
          onChange= {this.onChange}
        />
        <input
          name= 'password'
          placeholder= 'new password'
          type= 'password'
          onChange= {this.onChange}
        />
        <input
          name= 'confirmPassword'
          placeholder= 're-type new password'
          type= 'password'
          onChange= {this.onChange}
        />
        <button
          type="button"
          onClick= {() => this.editPassword()}        // update password
            >
              Submit
        </button>
      </div>
    );
  }
}

export default EditPassword;
