var address = require('../models/address');
var configAuth = require('../config/auth');
var sendgrid = require('sendgrid')(configAuth.sendgridAuth.apiKey);
var Request = require('../models/request');
var User = require('../models/user');
var Contact = require('../models/contacts');


module.exports = {
	create: function(req, res){
		var userId = req.user._id
		req.body.userName = req.user.google.name;
		req.body.userid = req.user._id;
		Request.create(req.body, function(err, response){
			console.log('RESPONSE', response)
			if(err){res.status(500).send(err).end()}
				else{
						// console.log('err', err, 'response', response);
					var payload = {
						to: req.body.toEmail,
						from: req.body.senderEmail,
						subject: req.body.userName + ' would like an address update',
						text: 'click here to update your address for your friend, ' + req.user.google.name + ' http://localhost:9999/#/' + response.contactId + '/' + response.name + '/' + response._id
				  }
					  sendgrid.send(payload);
					  console.log('RESPONSE', response)
					User.findByIdAndUpdate(userId, {$push:{request: response._id}}, {new: true}, function(result, err){
						// if(err) .status(500).send(err); 
						// res.send(result);
		})
					res.send(response);
			}
		})
	},

	deleterequest: function(req, res){
		Request.findById(req.body._id).remove().exec(function(err, response){
			if(err) res.status(500).json(err).end();
			res.json(response);
		})
	},

	getRequests: function(req, res){
		// console.log('user', req.user, 'req.body', req.body)
    User.findById(req.user._id).populate('request')
    .exec(function(err, response){
    	// console.log('RESULT5', result)
    	if(err) res.status(500).send(err).end();
    	res.json(response)
    })
	},

	getUser: function(req, res){
    // console.log('9user9', req.user)
    User.findOne(req.user._id).populate('contact', 'address').populate('contact').populate('request')
    .exec(function(err, response){
      if(err){res.status(500).json(err)}
        else{res.json(response)}
    })
  },
  
  getrequestinfo: function(req, res){
  	console.log(9999999, req.body)
  	Request.findById(req.body).populate('address')
  	.exec(function(err, response){
  		if(err)res.status(500).json(err).end();
  		console.log('this is the response', response)
  		res.json(response);
  	})
  },

	getmongoosecontacts: function(req, res){
		User.findById(req.user._id).populate('contact',  'address').populate('contact').populate('request')
		.exec(function(err, response){
			if(err) res.status(500).send(err).end();
    	res.send(response);
		})
	},

	updateaddress: function(req, res){
		console.log('req.body update address', req.body)
		// req.body.status = 'updated';
		Contact.findByIdAndUpdate({_id: req.body.contactid}, {address: req.body.address}, function(err, response){
			if(err) return res.status(500).json(err)
			Request.findById(req.body.contactid).remove().exec();
			res.json(response);
		})
	},

	postContactsToMongoose: function(req, res){
			Contact.create(req.body, function(err, response){
				console.log('RESPONSE', response)
		    User.findByIdAndUpdate(req.user._id, {$push: {contact: {$each: response}}}, function(err, response){
				  if(err) return res.status(500).json(err);
					res.json(response);
			})
    })
	}

}