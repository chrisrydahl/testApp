import React from 'react';
import ReactDOM from 'react-dom';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import '../styles/contact.css';

const App = () => {
  return (
    <div>   
        <ContactForm/>               
        <Footer/>
    </div>
    
  );
};

ReactDOM.render(<App />, document.getElementById('root'));