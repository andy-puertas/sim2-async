import React, { Component } from 'react';

export default class Wizard1 extends Component {
  render() {
    return (
      <div className="wiz1-page">
        <div className="wiz1-container">
          <p>Step 1</p>
          <br />

          <h4>Property Name</h4>
          <input />
          <br />

          <h4>Property Description</h4>
          <input />
          <br />
          
          <button>Next Step</button>
        </div>
      </div>
    )
  }
}
