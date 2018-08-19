import React, { Component } from 'react';
import Login from './pages/login';
import SignUp from './pages/signUp';
import GetUser from './pages/getUser';
import EditUser from './pages/editUser';
import EditPassword from './pages/editPassword';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
        <SignUp />
        <GetUser />
        <EditPassword />
        <EditUser />
      </div>
    );
  }
}

export default App;
