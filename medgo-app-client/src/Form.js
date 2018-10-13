// Dependencies
import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

// Externals
import Field from './Field';
import Button from './Button';
import './styles/Form.css';


class Form extends Component {

  constructor(props) {
    super(props);
      this.state = {
          name: '',
          email: '',
          phone: '',
          message: '',
    };
      this.error = {
          nameError: '',
          emailError: '',
          phoneError: '',
          messageError: '',
      };
    // To ensure 'this' when calling 'this.updateField' refers to Form and not Field, we do:
    this.updateField = this.updateField.bind(this);
  }


  // Field could be 'name', 'email', or 'message'
  // Value is whatever the user types into the input field.
  updateField(field, value) {
    this.setState({ [field]: value });
    if (field === 'name') {
        this.error.nameError = value.length < 3 ? "Please enter a valid Name" : "";
    }
    if (field === 'email') {
        this.error.emailError = (value.length < 6 || !value.toString().includes("@") || !value.toString().includes(".")) ? "Non valid email adress" : "";
    }
    if (field === 'phone') {
        this.error.phoneError = value.length < 6 || isNaN(value.toString()) ? "Please enter a valid Phone Number, Only numeric char are accepted" : "";
    }
    if (field === 'message') {
        this.error.messageError = value.length < 6 ? "Please enter a valid Message" : "";
    }

  }

  render() {
    return (
        <Card className="Card-style">
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={require('./images/contact_header.png')}
                    title="Contemplative Reptile"
                />
                <CardContent >
                    {/* Name field */}
                    <Field
                      label="Full Name"
                      onChange={(event) => this.updateField('name', event.target.value)}
                      value={this.state.name}
                      error={this.error.nameError}
                    />
                    {/* Email field */}
                    <Field
                      label="Email"
                      onChange={(event) => this.updateField('email', event.target.value)}
                      value={this.state.email}
                      type="email"
                      error={this.error.emailError}
                    />
                    {/* Phone field */}
                    <Field
                        label="Phone"
                        onChange={(event) => this.updateField('phone', event.target.value)}
                        value={this.state.phone}
                        error={this.error.phoneError}
                    />
                    {/* Message textarea */}
                    <Field
                      label="Message"
                      onChange={(event) => this.updateField('message', event.target.value)}
                      /* This should be written like 'textarea' */
                      textarea={true}
                      value={this.state.message}
                      error={this.error.messageError}
                    />
                    {/* Submit button */}
                    <Button
                        formValues={this.state}
                    />
                </CardContent>



        </Card>
    );
  }
}

export default Form;
