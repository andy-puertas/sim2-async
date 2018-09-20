import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userInfo } from './../../ducks/reducer'
import axios from 'axios';
import logo from '../Assets/auth_logo.png';
import './Auth.css';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      username: '',
      password: ''
    }
    this.handleName = this.handleName.bind( this );
    this.handlePass = this.handlePass.bind( this );
    this.login = this.login.bind( this );
    this.register = this.register.bind( this );
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

  login() {
    axios.post('/api/auth/login', {username: this.state.username, password: this.state.password})
    .then( res => {
      this.setState({
        user: res.data
      })
      this.props.userInfo(res.data);
      this.props.history.push('/dashboard');
    })
  }

  register() {
    axios.post('/api/auth/register', this.state)
    .then( res => {
      this.props.userInfo(res.data);
      this.props.history.push('/dashboard');
    })
  }

  render() {
    console.log(this.state);
    return (
      <section className="auth-page">
          <img src={ logo } alt='auth-logo' className="auth-logo" />
          <div className='auth-input-box'>
            <h4 className='auth-user-pass'>Username</h4>
            <input className="auth-input" onChange={this.handleName}/>
          </div>

          <div className='auth-input-box'>
            <h4 className='auth-user-pass'>Password</h4>
            <input type="password" className="auth-input" onChange={this.handlePass}/>
          </div>
          <br />

          <div className="auth-buttons-container">
            <button className='auth-button' id='login-button' onClick={this.login}>Login</button>
            <button className='auth-button' id='register-button' onClick={this.register}>Register</button>
          </div>
      </section>
    )
  }
}

export default connect(null, {userInfo}) (Auth);
        

       
        
