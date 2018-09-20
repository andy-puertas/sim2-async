import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { makeDesiredRent, updateProperties } from '../../../ducks/reducer'
import { connect } from 'react-redux';
import axios from "axios";

export default class Wizard5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      desiredRent: '',
      recommended: this.props.mortgae * 1.25
    }
    this.addRent = this.addRent.bind( this )
  }

  addRent(e) {
    this.props.makeDesiredRent(e.target.value)
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
