import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
//import axios from 'axios';
import './Auth.css';

export default class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  render() {
    return (
      <div className="auth-page">
        <div className="auth-container">

          <h4>Username</h4>
          <input />
          <h4>Password</h4>
          <input type="password" />
          <br />
          
          <button>Login</button>
          <button>Register</button>
        </div>
        
      </div>
    )
  }
}
