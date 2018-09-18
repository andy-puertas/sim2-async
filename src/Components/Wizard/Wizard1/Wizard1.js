import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { name, description } from './../../../ducks/reducer'
import activeStep from '../../Assets/step_active.png';
import inactiveStep from '../../Assets/step_inactive.png';
import './Wizard1.css';

class Wizard1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: ''
    }
    this.addName = this.addName.bind( this );
    this.addDesc = this.addDesc.bind( this );
  }

  addName(e) {
   this.props.name(e.target.value)
  }

  addDesc(e) {
    this.props.description(e.target.value)
  }
  
  render() {
    return (
      <section className="wiz-box">
        <div className="add-cancel">
          <h1>Add New Listing</h1>
          <Link to='/dash'><button id='cancel'>Cancel</button></Link>
        </div>  

        <div className='steps'>
          <p>Step 1</p>
        </div>  

        <div className='dots'>
          <img src={activeStep} alt='current'/>
          <img src={inactiveStep} alt='inactive'/>
          <img src={inactiveStep} alt='inactive'/>
          <img src={inactiveStep} alt='inactive'/>
          <img src={inactiveStep} alt='inactive'/>
        </div>  

        <div className='name-desc-box'>
          <p className='texts' id='prop-name'>Property Name</p>
          <input className='input-boxes' id='input-name' type='text' onChange={this.addName}/>
          <p className='texts' id='prop-desc'>Property Description</p>
          <textarea className='input-boxes' id='input-desc' type='text' onChange={this.addDesc}/>
        </div>  

        <div id='next-box1'>
          <Link to='/wizard/2'>
            <button className='next-step'>Next Step</button>
          </Link>
        </div>  
      </section>
    )
  }
}

function mapStateToProps(reduxState) {
  return {
    name: reduxState.name,
    description: reduxState.description
  };
}

export default connect(mapStateToProps, { name, description }) (Wizard1);

      

