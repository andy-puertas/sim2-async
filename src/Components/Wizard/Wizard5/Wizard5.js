import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { makeDesiredRent, updateProperties } from '../../../ducks/reducer'
import { connect } from 'react-redux';
import axios from "axios";
import activeStep from '../../Assets/step_active.png';
import completeStep from '../../Assets/step_completed.png';

class Wizard5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      desiredrent: '',
      recommendedrent: this.props.monthlymortgage * 1.25
    }
    this.addRent = this.addRent.bind( this );
    this.createListing = this.createListing.bind( this );
  }

  addRent(e) {
    this.props.makeDesiredRent(e.target.value)
  }

  createListing() {
    let { recommendedrent } = this.state;
    let { name, description, address, city, state, zip, image, loanamount, monthlymortgage, desiredrent } = this.props;

    axios.post('/api/properties', {name, description, address, city, state, zip, image, loanamount, monthlymortgage, desiredrent, recommendedrent})
    .then( res => {
      this.props.updateProperties();
      this.props.history.push('/dashboard');
    })
  }

  render() {
    console.log(this.props);
    return (
      <section className="wiz-box">

        <div className="add-cancel">
          <h1 id='add-listing'>Add New Listing</h1>
          <Link to='/dashboard'><button id='cancel'>Cancel</button></Link>
        </div>

        <div className='steps'>
          <p>Step 5</p>
        </div>  

        <div className='dots'>
          <img src={completeStep} alt='complete'/>
          <img src={completeStep} alt='complete'/>
          <img src={completeStep} alt='complete'/>
          <img src={completeStep} alt='complete'/>
          <img src={activeStep} alt='active'/>
        </div>

        <div className="name-desc-box">
          <p className="texts" id="reco-rent" 
             value={this.props.monthlymortgage * 1.25}>Recommended Rent ${this.props.monthlymortgage * 1.25}</p>
          <p className="texts" id="des-rent">Desired Rent</p>
          <input className="input-boxes" 
                 id="input-mort" 
                 type="text" 
                 onChange={(e) => this.props.makeDesiredRent(e.target.value)} 
                 value={this.props.desiredrent}/>
        </div>

        <div id='prev-next-box'>
            <Link to='/wizard/4'>
              <button className='next-step' id='prev-next-prev'>Previous Step</button>
            </Link>

              <button className='next-step' id='prev-next-comp' onClick={this.createListing}>Complete</button>
        
        </div>  
            
      </section>  
    )
  }
}

function mapStateToProps(reduxState) {
  return {
    name: reduxState.name,
    description: reduxState.description,
    address: reduxState.description,
    city: reduxState.city,
    state: reduxState.state,
    zip: reduxState.zip,
    image: reduxState.image,
    loanamount: reduxState.loanamount,
    monthlymortgage: reduxState.monthlymortgage,
    desiredrent: reduxState.desiredrent,
    recommendedrent: reduxState.recommendedrent
  }
}

export default connect(mapStateToProps, { makeDesiredRent, updateProperties }) (Wizard5);
