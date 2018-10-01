import React, {Component} from 'react';
import 'tachyons';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        name:'',
        email: '',
        mobile: '',
        message: ''
        }
      } 
    
    onNameChange = (event) => {
        this.setState({name: event.target.value})
      }
    
    onEmailChange = (event) => {
        this.setState({email: event.target.value})
      }
    
    onMobileChange = (event) => {
        this.setState({mobile: event.target.value})
      }
    
    onMessageChange = (event) => {
        this.setState({message: event.target.value})
      }  
  
    onSubmit = (e) => {
      if(this.state.name.length === 0 || this.state.email.length === 0 || this.state.message.length === 0 || this.state.mobile.length === 0){
        return document.getElementById('error').innerHTML = "Please fill all the fields";
      }
        e.preventDefault();
        fetch('/api/contacts', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(data => {
            console.log(data);
            alert('Message Sent');
            this.resetForm();
        })
        .catch(err => console.error(err))
    }

    resetForm = () => {
        document.getElementById('contact-form').reset();
    }

    render() {
        return (
          <article className="br2 ba b--black mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 black-80">
            <div id="error"></div>
            <div id="showerror"></div>
            <form className="measure center" id="contact-form">
              <div className="measure">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                  <legend className="f1 fw6 b--black ph0 mh0">Contact Us</legend>
                  <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                    <input
                      className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                      type="text"
                      name="name"
                      id="name"
                      required
                      onChange={this.onNameChange}
                    />
                  </div>
                  <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                    <input
                      className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                      type="email"
                      name="email"
                      id="email-address"
                      onChange={this.onEmailChange}
                      required
                    />
                  </div>
                  <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="mobile">Mobile Number</label>
                    <input
                      className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                      type="text"
                      name="mobile"
                      id="mobile"
                      required
                      onChange={this.onMobileChange}
                    />
                  </div>
                  <div className="mt3">
                    <label htmlFor="comment" className="db fw6 lh-copy f6">Message</label>
                    <textarea id="message" name="message" 
                    className="pa4 mb4 input-reset ba bg-transparent b--black measure db hover-bg-black hover-white w-100"
                    onChange = {this.onMessageChange} required
                    ></textarea>
                </div>
                </fieldset>
                <div className="">
                  <input
                    onClick={this.onSubmit}
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                    type="submit"
                    value="Send"
                  />
                </div>
              </div>
             </form> 
            </main>
          </article>
        );
    }
};

export default ContactForm;