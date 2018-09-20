import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { makeImage } from '../../../ducks/reducer';
import { connect } from 'react-redux';
import activeStep from '../../Assets/step_active.png';
import inactiveStep from '../../Assets/step_inactive.png';
import completeStep from '../../Assets/step_completed.png';

class Wizard3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: ''
    }
    this.addImage = this.addImage.bind( this );
  }

  addImage(e) {
    this.props.makeImage(e.target.value);
  }
  
  render() {
    return (
     <section className='wiz-box'>
      
      <div className="add-cancel">
          <h1>Add New Listing</h1>
          <Link to='/dash'>
            <button id='cancel'>Cancel</button>
          </Link>
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

        <div className="prevew-img">
          <img src={this.props.image} 
               alt='preview-image' 
               value={this.props.image}/>
        </div>

        <div>
          <p className="texts" id="img-url">Image URL</p>
          <input className="input-boxes"
                 id="input-img"
                 type="text"
                 onChange={this.addImage}
                 value={this.props.image}
                 placeholder="URL"/>
        </div>

        <div id='prev-next-box3'>
          <Link to='/wizard/2'>
            <button className='next-step' id='prev-next-prev'>Previous Step</button>
          </Link>

          <Link to='/wizard/4'>
            <button className='next-step' id='prev-next-next'>Next Step</button>
          </Link>
        </div>    

     </section>
    )
  }
}

function mapStateToProps() {

}

export default connect(mapStateToProps, {makeImage}) (Wizard3)