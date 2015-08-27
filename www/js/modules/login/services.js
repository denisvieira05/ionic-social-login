'use strict';

/* Services */

angular.module('myApp.services.login', [])

	.factory('AuthSvc',['$firebaseAuth',function($firebaseAuth){

	  var endPoint = 'https://ionic-sociallogin.firebaseio.com/';
	  var usersRef = new Firebase(endPoint);

	  return $firebaseAuth(usersRef);

	}]);