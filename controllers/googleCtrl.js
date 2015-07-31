var request = require('request');
var passport = require('passport');
var xml = require('js2xmlparser');

module.exports = {
	updatePost: function(req, res){
		// console.log('update contact req.body', req.body);

		// var theData = {"entry": '<?xml version="1.0" encoding="UTF-8"?><entry xmlns="http://www.w3.org/2005/Atom" xmlns:batch="http://schemas.google.com/gdata/batch" xmlns:gContact="http://schemas.google.com/contact/2008" xmlns:gd="http://schemas.google.com/g/2005"> <gd:name> <gd:givenName>New</gd:givenName> <gd:familyName>Name</gd:familyName> <gd:fullName>New Name</gd:fullName> </gd:name> <id>http://www.google.com/m8/feeds/contacts/andykj%40gmail.com/base/6</id> <updated>2015-07-13T21:51:58.120Z</updated> <category scheme="http://schemas.google.com/g/2005#kind" term="http://schemas.google.com/contact/2008#contact"/> <title type="text"/> <link rel="http://schemas.google.com/contacts/2008/rel#edit-photo" type="image/*" href="https://www.google.com/m8/feeds/photos/media/andykj%40gmail.com/6/1B2M2Y8AsgTpgAmY7PhCfg"/> <link rel="self" type="application/atom+xml" href="https://www.google.com/m8/feeds/contacts/andykj%40gmail.com/full/6"/> <link rel="edit" type="application/atom+xml" href="https://www.google.com/m8/feeds/contacts/andykj%40gmail.com/full/6/1436824318120001"/></entry>'}
		// var theDatas = '<entry xmlns="http://www.w3.org/2005/Atom" xmlns:batch="http://schemas.google.com/gdata/batch" xmlns:gContact="http://schemas.google.com/contact/2008" xmlns:gd="http://schemas.google.com/g/2005"><id>http://www.google.com/m8/feeds/contacts/appenderapp%40gmail.com/base/35ee58b88d11b2d</id><updated>2015-07-14T22:00:18.491Z</updated><category scheme="http://schemas.google.com/g/2005#kind" term="http://schemas.google.com/contact/2008#contact"/><title type="text">Brittany Johnson</title><link rel="http://schemas.google.com/contacts/2008/rel#edit-photo" type="image/*" href="https://www.google.com/m8/feeds/photos/media/appenderapp%40gmail.com/35ee58b88d11b2d/1B2M2Y8AsgTpgAmY7PhCfg"/><link rel="self" type="application/atom+xml" href="https://www.google.com/m8/feeds/contacts/appenderapp%40gmail.com/full/35ee58b88d11b2d"/><link rel="edit" type="application/atom+xml" href="https://www.google.com/m8/feeds/contacts/appenderapp%40gmail.com/full/35ee58b88d11b2d/1436911218491001"/><gd:email rel="http://schemas.google.com/g/2005#other" address="fergi.johnson@gmail.com" primary="true"/><gd:phoneNumber label="4353137935" uri="tel:+1-435-313-1021">435-313-1021</gd:phoneNumber><gd:postalAddress label="3641 Vista View Cir">3641 Vista View Cir</gd:postalAddress></entry>"headers: (c){a||(a=bd(b));return c?(c=a[L(c)],void 0===c&&(c=null),c):a}';
		// var options = {
		// 	method: 'PUT',
		// 	url: 'http://www.google.com/m8/feeds/contacts/appenderapp%40gmail.com/base/35ee58b88d11b2d?v=3.0&alt=json&access_token=' + req.user.google.token,
		// 	headers: {
		// 		'If-Match': '"Qns_ejVSLyt7I2A9XRVVGUwLQQU."',
		// 		'GData-Version': '3.0',
		// 		'Content-Type': 'application/atom+xml'
		// 	},
		// 	data: xmlData
		// };
		// var callback = function(err, response, body){
		// 	if(err){
		// 		res.status(500).send(err)
		// 	} else{
		// 		res.json(JSON.parse(response.body));
		// 	}
		// }

		// request(options, callback);
	},
  
  deletePost: function(req, res){
		console.log(req.body, req.user)
		request({
			method: 'DELETE',
			url: 'https://www.google.com/m8/feeds/contacts/andykj%40gmail.com/base/4?v=3.0&alt=json&access_token=' + req.user.google.token,
			headers: {'If-Match': '"RXYyfzVSLyt7I2A9WxBXFUkCQAw."'}
		  }, function(err, response){
			  if (err){res.status(500).send(err)} 
				else {res.send(response)}
		  }
	)
	}
}