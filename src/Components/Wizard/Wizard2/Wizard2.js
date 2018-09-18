import React, { Component } from 'react';
//import { connect } from 'react-redux';

export default class Wizard2 extends Component {
  constructor(props){
    super(props);
    this.state = {
      address: '',
      city: '',
      state: '',
      zip: ''
    }
  }
  render() {
    return (
      <div className="wiz2-page">
        <div className="wiz2-container">
          <p>Step 2</p>
            <br />

            <h4>Address</h4>
            <input />
            <br />

            <h4>City</h4>
            <input />
            <br />

            <h4>State</h4>
            <input />
            <br />

            <h4>Zip</h4>
            <input />
            <br />
            
            <button>Previous Step</button>
            <button>Next Step</button>
        </div>
        
      </div>
    )
  }
}
