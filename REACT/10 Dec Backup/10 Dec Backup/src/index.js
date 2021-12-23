import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from 'react-router-dom';
import {Routes, Route } from 'react-router-dom';
import Home from './Modules/Home.js';
import Store from './Modules/Store/Store.js';
import BusinessLicense from './Modules/BusinessLicense.js';
import Jurisdiction from './Modules/Jurisdiction.js';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
              <Route exact path='/' element={<Home />}></Route>
              <Route exact path='/store' element={<Store />}></Route>
              <Route exact path='/businessLicense' element={<BusinessLicense />}></Route>
              <Route exact path='/jurisdiction' element={<Jurisdiction />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
