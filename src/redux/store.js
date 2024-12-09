import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';  // rootReducer 
import { thunk } from 'redux-thunk';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)  // redux-thunk 
);

export default store;
