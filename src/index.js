import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header';
import Banner from './Banner';
import Card from './Card';
import reportWebVitals from './reportWebVitals';

 ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Banner />
    <Card />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
 
/*  ReactDOM.render(<App />, document.getElementById('root')); */
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
