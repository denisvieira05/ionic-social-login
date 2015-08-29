(function() {

	'use strict';

	angular.module('myApp.register.services', [])

		.factory('RegisterUserSvc',['$firebaseAuth',function($firebaseAuth){

			var create = function(user){

				var endPoint = 'https://ionic-sociallogin.firebaseio.com/';
				var ref = new Firebase(endPoint);			

				var retorno = $q.defer();

				ref.createUser({
				  email    : user.email,
				  password : user.password
				}, function(error, userData) {
				  if (error) {
				    console.log("Error creating user:", error);
				  } else {
				    console.log("Successfully created user account with uid:", userData.uid);
				    retorno.resolve(userData);
				  }
				});	

				return retorno.promise;
			}

			return {			
				create: create
			};

		}]);

}());