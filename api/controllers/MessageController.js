/**
 * MessageController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    add: function(req, res){
        console.log("api invoked");
        var nom = req.body.nom;
        var email = req.body.email;
        var tel = req.body.tel;
        var message = req.body.message;

        Message.create({
            nom: nom,
            email: email,
            tel: tel,
            message: message      
        }).exec(function(err){
            if(err){
                res.status(500).send({ erreur: 'erreur dans la base de données' });
            }else{
                res.status(200).send({ succès: 'Ajout fait avec succès' });
            }
        });

    }
};

