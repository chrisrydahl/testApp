import React, { Component } from 'react';
import MessageForm from './components/MessageForm';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container">
          <MessageForm />
        </div>
      </div>
    );
  }
}

export default App;
