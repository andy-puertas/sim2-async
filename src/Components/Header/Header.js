import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../ducks/reducer';
import axios from 'axios';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind( this );
  }

  logout() {
    axios.get('/api/auth/logout').then( res => {
      console.log(res.data);
      this.props.history.push('/');
    })
  }

  render() {
    if (this.props.location.pathname !== '/') {
      return (
        <div>
          <section className='navbar'>
            <div className='nav-content'>
              <img src="../Assets/auth_logo.png" alt="logo"/>
              <h1>Houser</h1>
              <h2>Dashboard</h2>
            </div>
            <div className='log-button'>
              <a><button className='logout' onClick={this.logout}>Logout</button></a>
            </div>
          </section>

        </div>
      )
    } else {
      return null;
    }
  }
}

function mapStateToProps(state) {
  return state;
}

export default withRouter(connect(mapStateToProps, {logout}) (Header));
