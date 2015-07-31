var mongoose = require('mongoose');
var addressSchema = require('./address');

var requestSchema = mongoose.Schema({
	  contactId: String,
	  userName: String,
	  fullName: String,
    name: String,
    phone: String,
    id: String,
		status: {type: String, default: 'requested'},
		toEmail: String,
		address: [addressSchema],
		updated_at: {type: Date }
});

module.exports = mongoose.model('Request', requestSchema);
