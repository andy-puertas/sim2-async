const initialState = {
  user: {},
  properties: [],
  loading: false,
  name: '',
  desc: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  img: '',
  loan: 0,
  mortage: 0,
  rent: 0
}

const GET_USER = 'GET_USER'

export default function reducer(state=initialState, action) {
  switch(action.type) {
    case GET_USER:
        return Object.assign({}, state, {
          username: action.payload
        } );
    
    default:
      return state;
  }
}