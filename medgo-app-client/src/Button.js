// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import axios from 'axios';


import './styles/Button.css';

class Button extends Component {
  // Info on React PropTypes:
  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    formValues: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
        open: false,
        dialogMsg: '',
    };

    this.logFormDataToConsole = this.logFormDataToConsole.bind(this);
  }
    handleClose = () => {
        this.setState({ open: false });
    };
    handleClickOpen = () => {
        this.setState({ open: true });
    };
  logFormDataToConsole(event) {
      if (this.props.formValues.name.length >= 3 && this.props.formValues.message.length >=5 && this.props.formValues.email.length >= 6 && this.props.formValues.email.toString().includes("@") && this.props.formValues.email.toString().includes(".") && this.props.formValues.phone.length >= 6  && !isNaN(this.props.formValues.phone.toString())) {
          console.log('Form Values', this.props.formValues);
          axios.post('/api/contact/', {
              name: this.props.formValues.name,
              email: this.props.formValues.email,
              phone: this.props.formValues.phone,
              message: this.props.formValues.message
          })
              .then((response) => {
                  console.log(response);
                  this.setState({dialogMsg: 'Message sent, Thank you for your intrest.'})
                  this.handleClickOpen();
                  console.log(response);
              })
              .catch((error) => {
                  this.setState({dialogMsg: 'Message not sent, Server error!'});
                  this.handleClickOpen();
                  console.log(error);
              });
      } else {
          this.setState({dialogMsg: 'Please check fields. All input must be valid.'});
          this.handleClickOpen();
      }
  }

  render() {
    return (
        <div>
      <button
        onClick={this.logFormDataToConsole}
      >
        Contact Us
      </button>
        <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >

            <DialogContent>
                {this.state.dialogMsg}
            </DialogContent>
          </Dialog>
        </div>
    );
  }
}

export default Button;
