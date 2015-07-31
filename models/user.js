var mongoose = require('mongoose');
var Request = require('./request');

var userSchema = mongoose.Schema({
	google: {
		id: String,
		token: String,
		email: String,
		name: String,
	},
	request: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Request' }],
	contact: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Contact' }]
});

module.exports = mongoose.model('User', userSchema);