module.exports = async function (req, res, next) {
  try {
    const newMessages = await Message.find({hasBeenRead: false});
    res.locals.newMessageCount = newMessages.length;
    next();
  } catch (err) {
    res.locals.newMessageCount = '-';
    next();
  }
};
