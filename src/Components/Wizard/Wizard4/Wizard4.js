import React, { Component } from 'react';

export default class Wizard4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loanAmount: '',
      monthlyMortgage: ''
    }
  }
  render() {
    return (
      <div className="wiz4-page">
        <div className="wiz4-container">
          <p>Step 4</p>
          <br />

          <h4>Loan Amount</h4>
          <input />
          <br />

          <h4>Monthly Mortgage</h4>
          <input />
          <br />

          <button>Previous Step</button>
          <button>Next Step</button>
        </div>
        
      </div>
    )
  }
}
