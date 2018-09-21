import axios from 'axios';

const initialState = {
  user: {},
  properties: [],
  username: '',
  password: '',
  name: '',
  description: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  image: '',
  loanamount: '',
  monthlymortgage: '',
  desiredrent: '',
  recommendedrent: ''
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
        return Object.assign( {}, state, {description: payload} )
    case GET_ADDRESS:
        return Object.assign( {}, state, {address: payload} )
    case GET_CITY:
        return Object.assign( {}, state, {city: payload} )
    case GET_STATE:
        return Object.assign( {}, state, {state: payload} )
    case GET_ZIP:
        return Object.assign( {}, state, {zip: payload} )
    case GET_IMAGE:
        return Object.assign( {}, state, {image: payload} )
    case LOAN_AMOUNT:
        return Object.assign( {}, state, {loanamount: payload} )
    case MONTHLY_MORTGAGE:
        return Object.assign( {}, state, {monthlymortgage: payload} )
    case DESIRED_RENT:
        return Object.assign( {}, state, {desiredrent: payload} )
    case RECOMMENDED_RENT:
        return Object.assign( {}, state, {recommendedrent: payload} )
    case GET_PROPERTIES + '_FULFILLED':
        return Object.assign( {}, state, { properties: payload } );
    case FILTER_PROPERTIES + '_FULFILLED':
        return Object.assign( {}, state, { properties: payload } );
    case UPDATE_PROPERTIES: 
        return Object.assign( {}, state, {name:'', 
        description:'', 
        address:'', 
        city:'', 
        state:'', 
        zip:'', 
        image:'', 
        loanamount:'', 
        monthlymortgage:'', 
        desiredrent:''} )    
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

export function makeName(name) {
  return {
    type: GET_NAME,
    payload: name
  };
}

export function makeCity(city) {
  return {
    type: GET_CITY,
    payload: city
  };
}

export function makeDescription(description) {
  return {
    type: GET_DESCRIPTION,
    payload: description
  };
}

export function makeAddress(address) {
  return {
    type: GET_ADDRESS,
    payload: address
  };
}

export function makeState(state) {
  return {
    type: GET_STATE,
    payload: state
  };
}

export function makeZip(zip) {
  return {
    type: GET_ZIP,
    payload: zip
  };
}

export function makeImage(image) {
  return {
    type: GET_IMAGE,
    payload: image
  };
}

export function makeLoanAmount(loanamount) {
  return {
    type: LOAN_AMOUNT,
    payload: loanamount
  };
}

export function makeMortgage(monthlymortgage) {
  return {
    type: MONTHLY_MORTGAGE,
    payload: monthlymortgage
  };
}

export function makeDesiredRent(desiredrent) {
  return {
    type: DESIRED_RENT,
    payload: desiredrent
  };
}

export function makeRecommendedRent(recommendedrent) {
  return {
    type: RECOMMENDED_RENT,
    payload: recommendedrent
  };
}

export function updateProperties(name, description, address, state, city, zip, image, loanamount, monthlymortgage, desiredrent ) {
  return {
    type: updateProperties,
    payload: [name, description, address, state, city, zip, image, loanamount, monthlymortgage, desiredrent]
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

