var mongoose = require('mongoose');

var addressSchema = mongoose.Schema({
    street: String,
    city: String,
		state: String,
		zip: Number
});

module.exports = addressSchema;

