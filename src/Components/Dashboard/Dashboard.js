import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import './Dashboard.css'

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dash-page">
        <div className="dash-container">
          <button>Add New Property</button>
          <p>List properties with "desired rent" greater than: $</p>
          <input className="filter-input" 
                 placeholder="0"/>
          <button>Filter</button>       
          <button>Reset</button>
          <hr />

        <h3>Home Listings</h3>  
      
        </div>
      </div>
    )
  }
}
