var mongoose = require('mongoose');
var addressSchema = require('./address');
var contactSchema = mongoose.Schema({
	  user_id: String,
		address: [addressSchema],
		displayName: String,
		email: String,
		firstName: String,
		id: String,
		lastName: String,
		phoneNumber: String
});

module.exports = mongoose.model('Contact', contactSchema);