import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { loanAmount, mortgage } from './../../../ducks/reducer';
import { connect } from 'react-redux';
import activeStep from '../../Assets/step_active.png';
import inactiveStep from '../../Assets/step_inactive.png';
import completeStep from '../../Assets/step_completed.png';


class Wizard4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loanAmount: '',
      monthlyMortgage: ''
    }
    this.addLoan = this.addLoan.bind( this );
    this.addMortgage = this.addMortgage.bind( this );
  }

  addLoan(e) {
    this.props.loanAmount(e.target.value)
  }

  addMortgage(e) {
    this.props.mortgage(e.target.value)
  }

  render() {
    return (
      <section className="wiz-box">
        <div className="add-cancel">
          <h1>Add New Listing</h1>
          <Link to='/dash'><button id='cancel'>Cancel</button></Link>
        </div>  

        <div className='steps'>
          <p>Step 4</p>
        </div>  

        <div className='dots'>
          <img src={completeStep} alt='complete'/>
          <img src={completeStep} alt='complete'/>
          <img src={completeStep} alt='complete'/>
          <img src={activeStep} alt='current'/>
          <img src={inactiveStep} alt='inactive'/>
        </div>  

        <div className='name-desc-box'>
          <p className='texts' id='prop-name'>Loan Amount</p>
          <input className='input-boxes' 
                 id='input-name' 
                 type='text' 
                 onChange={this.addLoan}
                 value={this.props.loan_amount}/>
          <p className='texts' id='prop-desc'>Monthly Mortgage</p>
          <input className='input-boxes' 
                 id='input-mort' 
                 type='text' 
                 onChange={this.addMortgage}
                 value={this.props.monthly_mortgage}/>
        </div>   

        <div id='prev-next-box'>
          <Link to='/wizard/3'>
            <button className='next-step' id='prev-next-prev'>Previous Step</button>
          </Link>

          <Link to='/wizard/5'>
            <button className='next-step' id='prev-next-next'>Next Step</button>
          </Link>
        </div>  
        
        
      </section>
    )
  }
}

function mapStateToProps(reduxState) {
  return {
    loan_amount: reduxState.loan_amount,
    monthly_mortgage: reduxState.monthly_mortgage
  };
}

export default connect(mapStateToProps, {loanAmount, mortgage}) (Wizard4);


