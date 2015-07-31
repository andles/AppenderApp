var app = angular.module('apndr', ['ngRoute', 'ui.bootstrap']);

app.config(function($routeProvider){
  $routeProvider

  .when('/login', {
    templateUrl: 'login.html',
    controller: 'loginCtrl'
  })
  .when('/contacts', {
  	templateUrl: 'contacts.html',
  	controller: 'contactsCtrl'
  })
  .when('/requests', {
    templateUrl: 'requests.html',
    controller: 'requestsCtrl'
  })
  .when('/responses', {
    templateUrl: 'responses.html'
  })
  .when('/home', {
    templateUrl: 'home.html',
    controller: 'homeCtrl'
  })
  .when('/thanks/:contactName/', {
    templateUrl: 'thanks.html',
    controller: 'thanksCtrl'
  })
  .when('/:contactId/:contactName/:requestId', {
      templateUrl: 'contactUpdate.html',
      controller: 'contactUpdateCtrl'
    })
  .otherwise({
  	redirectTo: '/login'
  })
})