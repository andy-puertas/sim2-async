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
    this.handleName = this.handleName.bind( this );
    this.handlePass = this.handlePass.bind( this );
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
          <img src={ logo } alt='auth-logo' className="auth-logo" />

          <h4>Username</h4>
          <input className="auth-input" />
          <h4>Password</h4>
          <input type="password" className="auth-input" />
          <br />

          <div className="auth-buttons-container">
            <button>Login</button>
            <button>Register</button>
          </div>
      </div>
    )
  }
}
        

       
        
