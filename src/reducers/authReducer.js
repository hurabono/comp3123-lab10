const initialState = {
  token: localStorage.getItem('token') || null,
  error: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      localStorage.setItem('token', action.payload);  
      return {
        ...state,
        token: action.payload
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default authReducer;
