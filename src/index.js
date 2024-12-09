import React from 'react';
import ReactDOM from 'react-dom/client';  
import { Provider } from 'react-redux';  // Provider 
import store from './redux/store';  // store 
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));  // root element 
root.render(
  <React.StrictMode>
    <Provider store={store}> 
      <App />
    </Provider>
  </React.StrictMode>
);
