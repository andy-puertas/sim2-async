import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import logo from '../Assets/auth_logo.png';
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

  handleName(e) {
    this.setState({
      username: e.target.value
    })
  }

  handlePass(e) {
    this.setState({
      password: e.target.value
    })
  }

  render() {
    console.log(this.state);
    return (
      <div className="auth-page">
        <div className="auth-container">

          <img src={ logo } alt='auth-logo'/>

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
