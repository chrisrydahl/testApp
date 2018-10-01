import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './App.css';
import ContactForm from './ContactForm';

const particlesOptions = {
  particles: {
    number: {
      value: 170,
      density: {
        enable: true,
        value_area: 700
      }
    }
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
      <Particles className='particles'
          params={particlesOptions}
      />
       <ContactForm />
      </div>
    );
  }
}

export default App;
