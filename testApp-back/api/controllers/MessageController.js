/**
 * MessageController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  listView: async (req, res) => {
    try {
      const messages = await Message.find({});
      res.view('pages/message/list', {messages});
    } catch (err) {
      return res.json(500, {error: `Database Error when list all messages: ${err}`});
    }
  },
  list: async (req, res) => {
    try {
      const messages = await Message.find({});
      return res.json({messages});
    } catch (err) {
      return res.json(500, {error: `Database Error when list all messages: ${err}`});
    }
  },
  detailView: async (req, res) => {
    try {
      const messages = await Message.update({id: req.params.id}).set({hasBeenRead:true}).fetch();
      res.view('pages/message/detail', {message: messages[0]});
    } catch (err) {
      return res.json(500, {error: `Database Error when get target message detail: ${err}`});
    }
  },
  create: async (req, res) => {
    console.log(req.body);
    const { subject, body, name, email } = req.body;
    try {
      await Message.create({ name, subject, body, email });
      return res.json('ok');
    } catch (err) {
      return res.json(500, {error: `Database Error when create a new message: ${err}`});
    }
  },
  remove: async (req, res)=> {
    await Message.destroy({id:req.params.id}).catch(err => res.json(500, {error: `Database Error when remove an existing message: ${err}`}));
    return res.json('ok');
  },

};

