const mongoose = require("mongoose");

const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const exampleSchema = new Schema({
	"name": String,
	"email": String,
	"phone": String,
	"message": String,
}, { "versionKey": false });

module.exports = mongoose.model("Message", exampleSchema);