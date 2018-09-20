import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { makeAddress, makeCity, makeState, makeZip} from '../../../ducks/reducer';
import { connect } from 'react-redux';
import activeStep from '../../Assets/step_active.png';
import inactiveStep from '../../Assets/step_inactive.png';
import completeStep from '../../Assets/step_completed.png';

class Wizard2 extends Component {
  constructor(props){
    super(props);
    this.state = {
      address: '',
      city: '',
      state: '',
      zip: ''
    }
    this.addAddress = this.addAddress.bind( this );
    this.addCity = this.addCity.bind( this );
    this.addState = this.addState.bind( this );
    this.addZip = this.addZip.bind( this );
  }

  addAddress(e) {
    this.props.makeAddress(e.target.value)
  }

  addCity(e) {
    this.props.makeCity(e.target.value)
  }

  addState(e) {
    this.props.makeState(e.target.value)
  }

  addZip(e) {
    this.props.makeZip(e.target.value)
  }

  render() {
    return (
      <section className="wiz-box">
        <div className="add-cancel">
          <h1 id='add-listing'>Add New Listing</h1>
          <Link to='/dash'><button id='cancel'>Cancel</button></Link>
        </div>  

        <div className='steps'>
          <p>Step 2</p>
        </div>  

        <div className='dots'>
          <img src={completeStep} alt='complete'/>
          <img src={activeStep} alt='active'/>
          <img src={inactiveStep} alt='inactive'/>
          <img src={inactiveStep} alt='inactive'/>
          <img src={inactiveStep} alt='inactive'/>
        </div>

        <div className='address-box' >
          <p className='texts' id='address' >Address</p>
          <input className='input-boxes' 
                 id='input-add' 
                 type="text" 
                 onChange={this.addAddress} 
                 value={this.props.address}/>
        </div>
        
        <div className='city-state-box' >
          <p className='texts' id='city' >City</p>
          <p className='texts' id='state' >State</p>
        </div>
        
        <div className='city-state-box' >
          <input className='input-boxes' 
                 id='input-city' type="text" 
                 onChange={this.addCity} 
                 value={this.props.city}/>
          <input className='input-boxes' 
                 id='input-state' 
                 type="text" 
                 onChange={this.addState} 
                 value={this.props.state}/>
        </div>
        
        <div className='zip-box' >
          <p className='texts' id='zip'>Zip</p>
          <input className='input-boxes' 
                 id='input-zip' 
                 type="text" 
                 onChange={this.addZip} 
                 value={this.props.zip}/>
        </div>

        <div id='prev-next-box'>
          <Link to='/wizard/1'>
            <button className='next-step' id='prev-next-prev'>Previous Step</button>
          </Link>

          <Link to='/wizard/3'>
            <button className='next-step' id='prev-next-next'>Next Step</button>
          </Link>
        </div>  
      </section>
    )
  }
}

function mapStateToProps(reduxState) {
  return {
    address: reduxState.address,
    city: reduxState.city,
    state: reduxState.state,
    zip: reduxState.zip
  };
}

export default connect( mapStateToProps, { makeAddress, makeCity, makeState, makeZip}) (Wizard2);

        
