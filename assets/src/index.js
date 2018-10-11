import React from "react";
import ReactDOM from "react-dom";
import Form from "./Form";
import './App.css';
const logo = require('../../assets/images/medgoo.png');

class App extends React.Component{
    render(){
        return(
            <div className="container contact-form">
                <div className="contact-image">
                    <img style={{marginBottom:'-5%'}} src={logo} alt="rocket_contact" />
                </div>
                <Form />
            </div>
        );
    };
}

ReactDOM.render(<App />, document.getElementById("root"));