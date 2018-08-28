/**
 * Message.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name: {
      type: 'string',
      required: true,
      maxLength: 30,
    },
    subject: {
      type: 'string',
      required: true,
      maxLength: 80,
    },
    body: {
      type: 'string',
      required: true,
      maxLength: 200,
    },
    email: {
      type: 'string',
      required: true,
      isEmail: true,
      maxLength: 100,
    },
    hasBeenRead: {
      type: 'boolean',
      defaultsTo: false,
    },
  },
  datastore: 'mongodb',
};


