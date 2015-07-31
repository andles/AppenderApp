var Address = require('../models/Address');
var configAuth = require('../config/auth');
var sendgrid = require('sendgrid')(configAuth.sendgridAuth.apiKey);


module.exports = {
	create: function(req, res){
		var address = new Address(req.body);
		address.save(req.body, function(err, result){
			console.log('ERR', err, 'RESULT', result)
			var payload = {
			  to: req.body.toEmail,
			  from: req.body.senderEmail,
			  subject: 'give me your address... give it to me!',
			  text: 'all of your address are belong to us http://localhost:9999/#/login/Ferglecakes/94940494495'
			}
    	sendgrid.send(payload);
			if(err) return res.status(500).send(err)
			res.send(result)
		})
	}
}