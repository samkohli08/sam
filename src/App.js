import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
/* function App() {
  return (
    <div className="App">
      <h1>New App</h1>
    </div>
  );
} */
/* class App extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}
 */
 class Car extends React.Component {
  render() {
    return <h2>I am a {this.props.brand}!</h2>;
  }
}

class Garage extends React.Component {
  render() {
    return (
      <div>
      <h1>Who lives in my Garage?</h1>
      <Car brand="Ford" />
      </div>
    );
  }
}
 
export default Garage;
