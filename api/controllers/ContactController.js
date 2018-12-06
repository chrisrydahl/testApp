/**
 * ContactController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    add: function(req, res){
        console.log("start sending");
        var nom = req.body.nom;
        var email = req.body.email;
        var telephone = req.body.telephone;
        var sujet = req.body.sujet;
        var message = req.body.message;
        Contact.create({
            nom: nom,
            email: email,
            telephone: telephone,
            sujet:sujet,
            message: message      
        }).exec(function(err){
            if(err){
                res.status(500).send({ erreur: 'plaise try again ' });
            }else{
                res.status(200).send({ succès: 'your msg was sent' });
            }
        });
    }

};

