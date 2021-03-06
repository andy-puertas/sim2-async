import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUser } from './../../ducks/reducer';
import { deleteIcon } from '../Assets/delete_icon.png'
import axios from 'axios';
import './Dashboard.css';

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      properties: [],
      filtered: 0,
      amount: 0
    }
    this.delete = this.delete.bind( this );
    this.reset = this.reset.bind( this );
    this.filterAmount = this.filterAmount.bind( this );
    this.filterButton = this.filterButton.bind( this );
  }

  componentDidMount(){
    axios.get('/api/properties')
    .then( res => {
      this.setState({
        properties: res.data
      })
      console.log(res.data);
    })
  }

  delete(id) {
    axios.delete(`/api/properties/${id}`)
    .then( res => {
      this.setState({
        properties: res.data
      })
    })
  }

  filterAmount(e) {
    this.setState({
      amount: e.target.value
    })
  }

  filterButton() {
    this.setState({
      filtered: this.state.amount
    })
  }

  reset() {
    this.setState({
      filtered: 0,
      amount: 0
    })
  }

render() {
  console.log(this.props);
    let propertyDisplay = this.state.properties.filter( (listings, i) => {
      return listings.desiredrent > this.state.filtered ? true : false
  }).map( (el, i) => {
      if(el.name === null && el.description === null) {
        return (
          null
        )
      } else {
         let calculateRec = el.monthlymortgage * 1.25;
         return (
          <section className='listings' key={el.id}>
              <div className='list-img-box'>
                  <img id='list-img' src={el.image} alt="house"/>
              </div>
              <div className='name-desc-list-box'>
                  <h5 id='name-h5'>{el.name}</h5>
                  <p id='desco-p'>{el.description}</p>
              </div>
              <section className='h5-hr-box'>
                  <div className='hr-box'>
                      <hr id='vertical-line'/>
                  </div>
                  <div className='h5-box'>
                      <h5>Loan: ${el.loanamount}</h5>
                      <h5>Monthly Mortgage: ${el.monthlymortgage}</h5>
                      <h5>Recommended Rent: ${calculateRec}</h5>
                      <h5>Desired Rent: ${el.desiredrent}</h5>
                      <h5>Address: {el.address}</h5>
                      <h5>City: {el.city}</h5>
                      <h5>State: {el.state}</h5>
                      <h5>Zip: {el.zip}</h5>
                  </div>
              </section>
              <div className='x-icon' >
                  <img src={deleteIcon} alt="delete" onClick={() => this.delete(el.id)}/>
              </div>
          </section>
        )
      }
  })
  
  return (
  
    <section className='dash-box'>
      
      <div className='add-box'>
        <Link to='/wizard/1'>
          <button className='add-button'>Add new property</button>
        </Link>
      </div>
      <div className='properties'>
        <p className='rent-text'>List properties with "desired rent" greater than: $</p>
        <input className='rent-input' 
               type="text" placeholder='0' 
               onChange={this.filterAmount} 
               value={this.state.amount}/>
        <button className='fil-res' 
               id='filter' 
               onClick={this.filterButton} >Filter</button>
        <button className='fil-res' 
                id='reset' 
                onClick={this.reset}>Reset</button>
      </div>
      <hr />
        
      <div className='h3-div'>
        <h3>Home Listings</h3>
      </div>
      <div className='list-box'>
        { propertyDisplay }
      </div>
   
    </section>

    )
  }
}


function mapStateToProps(state) {
  return {
      user: state.user
  };
}

export default connect(mapStateToProps, { getUser }) (Dashboard);