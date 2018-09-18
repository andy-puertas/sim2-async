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
  st: '',
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

const GET_NAME = 'NAME';
const GET_DESCRIPTION = 'DESCRIPTION';
const GET_ADDRESS = 'ADDRESS';
const GET_CITY = 'CITY';
const GET_STATE = 'STATE';
const GET_ZIP = 'ZIP';
const GET_IMAGE = 'IMAGE';
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
    case GET_NAME:
        return Object.assign( {}, state, {name: payload} )
    case GET_DESCRIPTION:
        return Object.assign( {}, state, {desc: payload} )
    case GET_ADDRESS:
        return Object.assign( {}, state, {address: payload} )
    case GET_CITY:
        return Object.assign( {}, state, {city: payload} )
    case GET_STATE:
        return Object.assign( {}, state, {st: payload} )
    case GET_ZIP:
        return Object.assign( {}, state, {zip: payload} )
    case GET_IMAGE:
        return Object.assign( {}, state, {img: payload} )
    case LOAN_AMOUNT:
        return Object.assign( {}, state, {loan: payload} )
    case MONTHLY_MORTGAGE:
        return Object.assign( {}, state, {mortgage: payload} )
    case DESIRED_RENT:
        return Object.assign( {}, state, {desired_rent: payload} )
    case RECOMMENDED_RENT:
        return Object.assign( {}, state, {recommended_rent: payload} )
    case GET_PROPERTIES + '_FULFILLED':
        return Object.assign( {}, state, { properties: payload } );
    case FILTER_PROPERTIES + '_FULFILLED':
        return Object.assign( {}, state, { properties: payload } );
    case UPDATE_PROPERTIES: 
        return Object.assign( {}, state, {name:'', desc:'', address:'', city:'', st:'', zip:'', img:'', loan:'', mortgage:'', desired_rent:''} )    
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

export function name(name) {
  return {
    type: GET_NAME,
    payload: name
  };
}

export function city(city) {
  return {
    type: GET_CITY,
    payload: city
  };
}

export function description(desc) {
  return {
    type: GET_DESCRIPTION,
    payload: desc
  };
}

export function address(address) {
  return {
    type: GET_ADDRESS,
    payload: address
  };
}

export function state(st) {
  return {
    type: GET_STATE,
    payload: st
  };
}

export function zip(zip) {
  return {
    type: GET_ZIP,
    payload: zip
  };
}

export function image(img) {
  return {
    type: GET_IMAGE,
    payload: img
  };
}

export function mortgage(mortgage) {
  return {
    type: MONTHLY_MORTGAGE,
    payload: mortgage
  };
}

export function desiredRent(desired_rent) {
  return {
    type: DESIRED_RENT,
    payload: desired_rent
  };
}

export function recommendedRent(recommended_rent) {
  return {
    type: RECOMMENDED_RENT,
    payload: recommended_rent
  };
}

export function updateProperties(name, desc, address, st, city, zip, img, loan, mortgage, desired_rent ) {
  return {
    type: updateProperties,
    payload: [name, desc, address, st, city, zip, img, loan, mortgage, desired_rent]
  };
}

export function getProperties() {
  let properties = axios.get('/api/properties').then(res => res.data);
  return {
    type: GET_PROPERTIES,
    payload: properties
  };
}

export function filterProperties(rent) {
  let properties = axios.get(`/api/properties?rent=${rent}`).then(res => res.data);
  return {
    type: FILTER_PROPERTIES,
    payload: properties
  };
}

