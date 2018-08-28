/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  '*': [ 'is-logged-in', 'has-new-message' ],
  // Bypass the `is-logged-in` policy for:
  'entrance/*': true,
  'account/logout': true,
  'view-homepage-or-redirect': true,
  'deliver-contact-form-message': true,
  MessageController: {
    '*': ['is-logged-in', 'has-new-message'],
    'delete': 'is-super-admin',
    'create': true,
    'list': true,
  },

};
