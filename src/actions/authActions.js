import axios from 'axios';


export const loginUser = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });

  
      localStorage.setItem('token', response.data.token);


      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: response.data.token
      });
    } catch (error) {
      console.error('Login error:', error);
      dispatch({
        type: 'LOGIN_FAILURE',
        payload: error.message
      });
    }
  };
};
