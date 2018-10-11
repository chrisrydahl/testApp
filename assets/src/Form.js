import React from "react";

//expression régulière pour valider la forme de l'adresse mail entrée
const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
//expression régulière pour valider la forme du numéro téléphonique entré
const telRegex = RegExp(
    /^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/
);
//vérifier la validité du formulaire
const formValid = ({ formErrors, NomComplet, Tel, Email, Message}) => {
    let valid = true;

    // vérifier si les erreurs sont vides
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });

    // vérifier si le formulaire est rempli  
    if (Object.values(NomComplet).length == 0){ valid = false; };
    if (Object.values(Tel).length == 0) { valid = false; };
    if (Object.values(Email).length == 0) { valid = false; };
    if (Object.values(Message).length == 0) { valid = false; };
    
    return valid;
};

class Form extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          NomComplet: "",
          Email: "",
          Tel: "",
          Message: "",
          formErrors: {
              NomComplet: "",
              Email: "",
              Tel:"",
              Message: ""
          },
          send:0
      };
      
  }
  
    //Détecter les changements au niveau des input et revalider le text entré 
    handleChange(e){
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = this.state.formErrors;

        switch (name) {
            case "NomComplet":
                formErrors.NomComplet =
                    value.length < 5 ? "Minimum 3 caractères requis !" : "";
                break;
            case "Tel":
                formErrors.Tel = telRegex.test(value)
                    ? ""
                    : "Numéro invalide !";                    
                break;
            case "Email":
                formErrors.Email = emailRegex.test(value)
                    ? ""
                    : "Adresse mail invalide !";
                break;
            case "Message":
                formErrors.Message =
                    value.length < 10 ? "Minimum 10 caractères requis !" : "";
                break;
            default:
                break;
        }
        //après chaque changement, le message à envoyé reviend à l'état initiale
        this.setState({ send: 0});
        this.setState({ formErrors, [name]: value });
    };

    handleSubmit(e) {
        e.preventDefault();
        if (formValid(this.state)) {
            console.log(`
        --SUBMITTING--
        NomComplet: ${this.state.NomComplet}
        Email: ${this.state.Email}
        Tel: ${this.state.Tel}
        Message: ${this.state.Message}
      ` );
    // Préparer et envoyer une requete http de type post à notre api 
         fetch('http://localhost:1337/api/message/add', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nom: this.state.NomComplet,
                email: this.state.Email,
                tel: this.state.Tel,
                message: this.state.Message
                })
            }).then(response => response.json())
                .then(json =>
                    this.setState({
                        send: 1
                    }));
// vider les input après avoir envoyé le message
            this.setState({
                NomComplet: "",
                Email: "",
                Tel: "",
                Message: "",
                formErrors: {
                    NomComplet: "",
                    Email: "",
                    Tel: "",
                    Message: ""
                }            
            });           
        } else {
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
    };

    render () {
        const { formErrors } = this.state;
        const State = this.state;
        return (
            <form>
                <h3>LAISSER NOUS UN MESSAGE !</h3>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input
                                className={formErrors.NomComplet.length > 0 ? "form-control is-invalid" : "form-control"}
                                id="inputDanger1"
                                name="NomComplet"
                                placeholder="Nom complet"
                                value={this.state.NomComplet}
                                onChange={e => this.handleChange(e)}
                            />
                            {formErrors.NomComplet.length > 0 && (
                                <span className="text-danger">{formErrors.NomComplet}</span>
                            )}
                        </div>
                        <div className="form-group">
                            <input
                                className={formErrors.Email.length > 0 ? "form-control is-invalid" : "form-control"}
                                name="Email"
                                placeholder="Adresse mail"
                                value={this.state.Email}
                                onChange={e => this.handleChange(e)}
                            />
                            
                            {formErrors.Email.length > 0 && (
                                <span className="text-danger">{formErrors.Email}</span>
                            )}
                        </div>
                        <div className="form-group">
                            <input
                                className={formErrors.Tel.length > 0 ? "form-control is-invalid" : "form-control"}
                                name="Tel"
                                placeholder="Numéro Téléphonique"
                                value={this.state.Tel}
                                onChange={e => this.handleChange(e)}
                            />
                            
                            {formErrors.Tel.length > 0 && (
                                <span className="text-danger">{formErrors.Tel}</span>
                            )}
                        </div>
                        
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <textarea
                                    className={formErrors.Message.length > 0 ? "form-control is-invalid" : "form-control"}
                                    name="Message"
                                    style={{width : '100%', height:'150px'}}
                                    placeholder="Votre message"
                                    value={this.state.Message}
                                    onChange={e => this.handleChange(e)}
                                />
                                {formErrors.Message.length > 0 && (
                                <span className="text-danger">{formErrors.Message}</span>
                                )}
                            </div>
                            <div className="form-group">                      
                                <button className="btnContact float-right" onClick={e => this.handleSubmit(e)}>Envoyer</button>
                            {State.send == 1 ? <p className="text-success">Message envoyé !</p> : null}                       
                            </div>
                        </div>
                    </div>
                
            </form>
        );
    }
}

export default Form;