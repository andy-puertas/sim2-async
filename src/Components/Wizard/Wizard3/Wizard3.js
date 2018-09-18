import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { image } from '../../../ducks/reducer';
import { connect } from 'react-redux';
import activeStep from '../../Assets/step_active.png';
import inactiveStep from '../../Assets/step_inactive.png';
import completeStep from '../../Assets/step_completed.png';

export default class Wizard3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      photo: []
    }
    this.addImage = this.addImage.bind( this );
  }

  addImage(e) {
    this.props.image(e.target.value);
  }
  
  render() {
    return (
     <section className='wiz-box'>
      <div className="add-cancel">
          <h1>Add New Listing</h1>
          <Link to='/dash'><button id='cancel'>Cancel</button></Link>
        </div>  

        <div className='steps'>
          <p>Step 3</p>
        </div>  

        <div className='dots'>
          <img src={completeStep} alt='complete'/>
          <img src={completeStep} alt='complete'/>
          <img src={activeStep} alt='current'/>
          <img src={inactiveStep} alt='inactive'/>
          <img src={inactiveStep} alt='inactive'/>
        </div>  

     </section>
    )
  }
}
