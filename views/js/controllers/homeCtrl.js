var app = angular.module('apndr');

app.controller('homeCtrl', function(userService, $rootScope, $scope, $location, contactsService){
	userService.getUser().then(function(user){
		console.log('running getUser')
    $rootScope.user = user;
    // $location.path('/requests')
    console.log('this is user', user)
    if(user.data.contact && user.data.contact.length > 0){
	    $scope.requests = user.data.request;
	    $scope.contacts = user.data.contact;
	    console.log($scope.requests)
    }else{
			contactsService.getContacts().then(function(data){
				contactsService.postContacts(data).then(function(data){
					contactsService.getMongooseContacts(data).then(function(data){
						console.log('hi', data);	
			      $scope.contacts = data.data.contact;
				    $scope.request = data.data.request;
				    console.log('requests', data.data.request)
					});
				});
			});
    }

	});
})