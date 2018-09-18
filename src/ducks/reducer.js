import axios from 'axios';

const initialState = {
  user: {},
  properties: [],
  username: '',
  password: '',
  name: '',
  desc: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  img: '',
  loan: '',
  mortgage: '',
  desired_rent: '',
  recommended_rent: ''
}

const GET_USER = 'GET_USER';
const USER_INFO = 'USER_INFO';
const LOGOUT = 'LOGOUT';

const NAME = 'NAME';
const DESCRIPTION = 'DESCRIPTION';
const ADDRESS = 'ADDRESS';
const CITY = 'CITY';
const STATE = 'STATE';
const ZIP = 'ZIP';
const IMAGE = 'IMAGE';
const LOAN_AMOUNT = 'LOAN_AMOUT';
const MONTHLY_MORTGAGE = 'MONTHLY_MORTGAGE';
const DESIRED_RENT = 'DESIRED_RENT';
const RECOMMENDED_RENT = 'RECOMMENDED_RENT';
const GET_PROPERTIES = 'GET_PROPERTIES';
const FILTER_PROPERTIES = 'FILTER_PROPERTIES';
const UPDATE_PROPERTIES = 'UPDATE_PROPERTIES';


export default function reducer(state=initialState, action) {
  let { type, payload } = action;
  switch(type) {
    case GET_USER:
        return Object.assign({}, state, {user: payload} );
    case USER_INFO:
        return {...state, username: payload.username, password: payload.password}
    case LOGOUT:
        return initialState;        
    case NAME:
        return Object.assign( {}, state, {name: payload} )
    case DESCRIPTION:
        return Object.assign( {}, state, {desc: payload} )
    case ADDRESS:
        return Object.assign( {}, state, {address: payload} )
    case CITY:
        return Object.assign( {}, state, {city: payload} )
    case STATE:
        return Object.assign( {}, state, {state: payload} )
    case ZIP:
        return Object.assign( {}, state, {zip: payload} )
    case IMAGE:
        return Object.assign( {}, state, {img: payload} )
    case LOAN_AMOUNT:
        return Object.assign( {}, state, {loan: payload} )
    case MONTHLY_MORTGAGE:
        return Object.assign( {}, state, {mortage: payload} )
    case DESIRED_RENT:
        return Object.assign( {}, state, {desired_rent: payload} )
    case RECOMMENDED_RENT:
        return Object.assign( {}, state, {recommended_rent: payload} )
    case GET_PROPERTIES + '_FULFILLED':
        return Object.assign( {}, state, { properties: payload } );
    case FILTER_PROPERTIES + '_FULFILLED':
        return Object.assign( {}, state, { properties: payload } );
    case UPDATE_PROPERTIES: 
        return Object.assign( {}, state, {name:'', desc:'', address:'', city:'', state:'', zip:'', img:'', loan:'', mortgage:'', desired_rent:''} )    
    default:
        return state;
  }
}

export function getUser(user) {
  return {
    type: GET_USER,
    payload: user
  };
}

export function userInfo(user) {
  return {
    type: USER_INFO,
    payload: user
  };
}

export function logout() {
  return {
    type: LOGOUT
  }
}