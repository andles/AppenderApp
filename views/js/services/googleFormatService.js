var app = angular.module('apndr');

app.service('googleFormatService', function(contactsService){
	// var x2js = new X2JS();


	// this.formatContactForGoogle = function(x){
	// 	var unX = function(str) {
	// 		return str.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&#x2F;/g, '\/').replace(/<$t>/g, "").replace(/<\/$t>/g, "");
	// 	};
 //    var xml = x2js.json2xml_str(x);
 //    var newXml = unX(xml);
 //    console.log(newXml)
	//   var xmlll = '<id>http://www.google.com/m8/feeds/contacts/appenderapp%40gmail.com/base/35ee58b88d11b2d</id><gd:etag>"R3oyeDVSLyt7I2A9XRVVGUUKRww."</gd:etag><updated>2015-07-15T17:08:06.490Z</updated><app:edited><xmlns:app>http://www.w3.org/2007/app</xmlns:app>2015-07-15T17:08:06.490Z</app:edited><category><scheme>http://schemas.google.com/g/2005#kind</scheme><term>http://schemas.google.com/contact/2008#contact</term></category><title></title><link><rel>http://schemas.google.com/contacts/2008/rel#photo</rel><type>image/*</type><href>https://www.google.com/m8/feeds/photos/media/appenderapp%40gmail.com/35ee58b88d11b2d?v=3.0</href></link><link><rel>self</rel><type>application/atom+xml</type><href>https://www.google.com/m8/feeds/contacts/appenderapp%40gmail.com/full/35ee58b88d11b2d?v=3.0</href></link><link><rel>edit</rel><type>application/atom+xml</type><href>https://www.google.com/m8/feeds/contacts/appenderapp%40gmail.com/full/35ee58b88d11b2d?v=3.0</href></link><gContact:groupMembershipInfo><deleted>false</deleted><href>http://www.google.com/m8/feeds/groups/appenderapp%40gmail.com/base/6</href></gContact:groupMembershipInfo>'
 //    var parsed = new DOMParser();
 //    var parsedXml = parsed.parseFromString(xmlll, 'application/xml');
 //    console.log(parsedXml)

 //    console.log('formatted xml string', parsedXml)
 //    contactsService.updateContact(parsedXml).then(function(err, response){
 //    	console.log('response from google formatting service', response);
 //    	return response;
 //    })
 //  }
});