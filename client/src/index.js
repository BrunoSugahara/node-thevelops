import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './pages/login';
import SignUp from './pages/signUp';
import GetUser from './pages/getUser';
import EditUser from './pages/editUser';
import EditPassword from './pages/editPassword';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/getUser" component={GetUser} />
      <Route path="/editPassword" component={EditPassword} />
      <Route path="/editUser" component={EditUser} />
    </Switch>
  </ BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
