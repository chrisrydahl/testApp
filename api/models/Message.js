/**
 * Message.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nom:{
      type:'string'
    },
    email:{
      type:'string'
    },
    tel:{
      type:'string'
    },
    message:{
      type:'string'
    }
  },

};

