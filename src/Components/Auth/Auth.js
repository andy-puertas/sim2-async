import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import './Auth.css';

export default class Auth extends Component {
  render() {
    return (
      <div className="auth-page">
        <div className="auth-container">

          <h4>Username</h4>
          <input />
          <h4>Password</h4>
          <input type="password" />

          <button>Login</button>
          <button>Register</button>
        </div>
        
      </div>
    )
  }
}
