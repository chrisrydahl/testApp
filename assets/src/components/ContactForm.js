import React, {Component} from 'react';



class ContactForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        nom: '',
        telephone: '',
        email:'',
        sujet:'',
        message:'',
        errors:{
            nom:'',
            telephone:'',
            email:'',
            sujet:'',
            message:'',
        },
        nomValid:false,
        telephoneValide:false,
        emailValid:false,
        sujetValid:false,
        messageValid:false,
        formValid:false
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value =  target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      },() => { this.validateInput(name, value) });
    }

    validateInput(inputName, value) {
        let errors = this.state.errors;
        let nomValid = this.state.nomValid;
        let telephoneValide = this.state.telephoneValide;
        let emailValid = this.state.emailValid;
        let sujetValid = this.state.sujetValid;
        let messageValid = this.state.messageValid;
        
      
        switch(inputName) {
            case 'nom':
            nomValid = value.length >= 3;
            errors.nom = nomValid ? '': 'too short';
            break;
            case 'telephone':
            telephoneValide = value.length >= 10;
            errors.telephone = telephoneValide ? '': 'too short';
            break;
            case 'email':
              emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
              errors.email = emailValid ? '' : 'invalid email';
              break;
            case 'sujet':
              sujetValid = value.length >= 5;
              errors.sujet = sujetValid ? '': 'too short';
              break;
            case 'message':
              messageValid = value.length >= 10;
              errors.message = messageValid ? '': 'too short';
              break;
          default:
            break;
        }
        this.setState({errors: errors,
                            nomValid:nomValid,
                            telephoneValide:telephoneValide,
                            emailValid:emailValid,
                            sujetValid:sujetValid,
                            messageValid:messageValid,
                      }, this.validateForm);
      }
      
      validateForm() {
        this.setState({formValid: this.state.messageValid&&this.state.emailValid&&this.state.nomValid && this.state.telephoneValide && this.state.sujetValid});
      }

    invalidClass(error){
        return error.length===0 ?'validate':'invalid';
    }

    handleSubmit(event) {
        alert("teee");
        event.preventDefault();
        alert("eeee");
        const data = new FormData(event.target);
         fetch('http://localhost:1337/api/contact', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: data})
                .then((res)=>{
                    console.log(res);
                    this.setState({
                        nom: '',
                        telephone: '',
                        email:'',
                        sujet:'',
                        message:'',
                        errors:{
                            nom:'',
                            telephone:'',
                            email:'',
                            sujet:'',
                            message:'',
                        },
                        nomValid:false,
                        telephoneValide:false,
                        emailValid:false,
                        sujetValid:false,
                        messageValid:false,
                        formValid:false
                      });
                });
        
      }
  
    render() {
      return (
        <div className="section grey lighten-3" id='contact'>
        <div className="container">
            <div className="contact-block">
                <div className="row">
                    <div className="col s12 m6">
                        <h5>Prenez contact avec nous</h5>
                    <form className="row send-message" onSubmit={this.handleSubmit}>
                
                            <div className="input-field col s12">
                            <i className="material-icons prefix">person</i>
                                <input  onChange={this.handleInputChange}  id="icon_prefix" type="text" className={this.invalidClass(this.state.errors.nom)} name="nom"/>
                                <label htmlFor="icon_prefix">Nom et prénom*</label>
                            </div>
                            <div className="input-field col s12">
                                <i className="material-icons prefix">phone_iphone</i>
                                <input  onChange={this.handleInputChange}  id="icon_job" type="tel" className={this.invalidClass(this.state.errors.telephone)} name="telephone"/>
                                <label htmlFor="icon_job">Téléphone*</label>
                            </div>
                            <div className="input-field col s12">
                            <i className="material-icons prefix">mail</i>
                                <input  onChange={this.handleInputChange}  id="icon_email" type="email" className={this.invalidClass(this.state.errors.email)} name="email"/>
                                <label htmlFor="icon_email">Email*</label>
                                <span className="helper-text" data-error={this.state.errors.email} ></span>
                            </div>
                            <div className="input-field col s12">
                                <i className="material-icons prefix">sujet</i>
                                <input  onChange={this.handleInputChange}  id="icon_job" type="text" className={this.invalidClass(this.state.errors.sujet)} name="sujet"/>
                                <label htmlFor="icon_job">sujet*</label>
                            </div>
                            <div className="input-field col s12">
                                <i className="material-icons prefix">edit</i>
                                <textarea  onChange={this.handleInputChange}  id="icon_message" className={`validate materialize-textarea ${this.invalidClass(this.state.errors.message)}`} name="message"></textarea>
                                <label htmlFor="icon_message">Votre message*</label>
                            </div>
                            <div className="right">
                                <button type="reset" className="btn waves-effect grey lighten-5 orange-text">Vider</button>
                                <button type="submit"  disabled={!this.state.formValid} className="waves-effect waves-light btn orange accent-4">Envoyer<i className="material-icons prefix right blue-text">send</i></button>
                            </div>
                        </form>
                        </div>
                    <div className="col s12 m5 offset-m1">
                        <div className="center col m12 contact-info">
                            <img src="https://yt3.ggpht.com/a-/AN66SAxiSIs73n7-uNH--v1fqxG8oYdch8dTVwjhfw=s288-mo-c-c0xffffffff-rj-k-no"/>
                            <h5><span className="blue-text">med</span><span className="orange-text text-darken-4">Go</span></h5>
                            <p>Gérez et sollicitez vos remplaçants soignants.
                                En toute simplicité</p>
                            <p> 01 76 41 02 30<br/>
                                contact@medgo.fr</p>
                            <div className="follow-btn">
                                <p></p>
                                <h5>suivez nous</h5>
                                <a href="#" title="facebook" target="_blank"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" title="Twitter" target="_blank"><i className="fab fa-twitter"></i></a>
                                <a href="#" title="Google +" target="_blank"><i className="fab fa-google-plus" ></i></a>
                                <a href="#" title="Youtube channel" target="_blank"><i className="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      );
    }
  }

  export default ContactForm;