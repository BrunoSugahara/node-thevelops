import React, { Component } from 'react';
import {putData} from '../services/putData'
import {deleteData} from '../services/deleteData'

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      email: '',
      first_name: '',
      last_name: '',
      personal_phone: '',
    }
    this.editUser = this.editUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  editUser() {
    console.log(this.state);
    putData('/users/' + this.state.id, this.state).then((result) => {     //put user data
      console.log(result);
    });
  }

  deleteUser() {
    console.log(this.state);
    deleteData('/users/' + this.state.id)             //delete login data
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});     //set state as the input value
  }

  render() {
    return (
      <div className="EditUser" className="App">
        <h1>Edit User</h1>
        <input
          name= 'id'
          placeholder= 'id'
          type= 'string'
          onChange= {this.onChange}
        />
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
        <button
          type="button"
          onClick= {() => this.editUser()}    // update user
            >
              Submit
        </button>
        <button
          type="button"
          onClick= {() => this.deleteUser()}    //delete user
            >
              Delete User
        </button>
      </div>
    );
  }
}

export default EditUser;
