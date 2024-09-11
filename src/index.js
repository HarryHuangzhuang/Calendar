import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
 
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { Provider } from 'react-redux'
import 'normalize.css'
import store from './store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
   
  </React.StrictMode>
);




 