var app = angular.module('apndr');

app.controller('contactsCtrl', function($scope, contactsService, googleFormatService){


	// $scope.requestAddress = function(x){
	// 	console.log(1111111111111, x);
	// 	var addressReq = {
	// 		// gd$street: x.address.street,
	// 		// gd$city: x.address.city,
	// 		// gd$region: x.address.state,
	// 		// gd$postalcode: x.address.zip,
 //      fullName: x.gd$name.gd$fullName.$t,
	// 		name: x.gd$name.gd$givenName.$t,
	// 		etag: x.gd$etag.replace(/[\.\"]/g, ''),
	// 		id: x.id.$t,
	// 		senderEmail: 'info@appenderapp.com',
	// 		toEmail: x.gd$email[0].address
	// 	}
	// 	console.log('inside requestAddress()', addressReq);
	// 	contactsService.requestAddress(addressReq).then(function(res){
	// 		console.log('response to requestAddress Call', res);
	// 	})
	// }

	// $scope.removeContact = function(x){
	// 	contactsService.removeContact(x).then(function(response){
	// 		console.log(response);
	// 	})
	// }
 	
	// $scope.updateContact = function(x){
	// 	console.log(x);
	// 	googleFormatService.formatContactForGoogle(x);
 //  }
  	
  
})