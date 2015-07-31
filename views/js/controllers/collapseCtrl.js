var app = angular.module('apndr');

app.controller('collapseCtrl', function ($location, $scope, contactsService) {
		$scope.getGoogleContacts = function(){
			contactsService.getContacts().then(function(data){
			contactsService.postContacts(data).then(function(data){
				contactsService.getMongooseContacts(data).then(function(data){
				// $scope.contacts = data.data.contact;
				console.log('hi', data);	
				})
			});
			});
		}

  $scope.collapseArr = [];

	$scope.collapse = function(index){
		if(!$scope.collapseArr[index]){
			$scope.collapseArr[index] = true;
		} else {
			$scope.collapseArr[index] = false
		}
		console.log($scope.collapseArr, index);
	};

  $scope.requestAddress = function(x){
  	console.log('this is it', x);
  	var date = new Date();
		var addressReq = {
			contactId: x._id,
      fullName: x.displayName,
			name: x.firstName,
			phone: x.phoneNumber,
			// etag: x.gd$etag.replace(/[\.\"]/g, ''),
			id: x.id,
			senderEmail: 'info@appenderapp.com',
			toEmail: x.email,
			updated_at: date
		}
		console.log('inside requestAddress()', addressReq);
		contactsService.requestAddress(addressReq).then(function(res){
			console.log('response to requestAddress Call', res);
		})
		// contactsService.getRequests();
		// $location.path('/#/home')
	};

	// $scope.removeContact = function(x){
	// 	contactsService.removeContact(x).then(function(response){
	// 		console.log(response);
	// 	})
	// }
});