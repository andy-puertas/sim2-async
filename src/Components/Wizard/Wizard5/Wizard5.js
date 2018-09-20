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
      desiredRent: '',
      recommended: this.props.mortgage * 1.25
    }
    this.addRent = this.addRent.bind( this );
    this.createListing = this.createListing.bind( this );
  }

  addRent(e) {
    this.props.makeDesiredRent(e.target.value)
  }

  createListing() {
    let { recommended } = this.state;
    let { name, description, address, city, state, zip, image, loanAmount, mortgage, desiredRent } = this.props;

    axios.post('/api/properties', {name, description, address, city, state, zip, image, loanAmount, mortgage, desiredRent, recommended})
    .then( res => {
      this.props.updateProperties();
      this.props.history.push('/dash');
    })
  }

  render() {
    console.log(this.state);
    return (
      <section className="wiz-box">

        <div className="add-cancel">
          <h1 id='add-listing'>Add New Listing</h1>
          <Link to='/dash'><button id='cancel'>Cancel</button></Link>
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
             value={this.props.mortgage * 1.25}>Recommended Rent ${this.props.mortgage * 1.25}</p>
          <p className="texts" id="des-rent">Desired Rent</p>
          <input className="input-boxes" 
                 id="input-mort" 
                 type="text" 
                 onChange={(e) => this.props.makeDesiredRent(e.target.value)} 
                 value={this.props.desiredRent}/>
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
    loanAmount: reduxState.loanAmount,
    mortgage: reduxState.mortgage,
    desiredRent: reduxState.desiredRent
  }
}

export default connect(mapStateToProps, { makeDesiredRent, updateProperties }) (Wizard5);
