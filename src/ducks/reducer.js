const initialState = {
  id: 0,
  username: ''
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