(function() {

	'use strict';

	angular.module('myApp.login.controllers', [])

		.controller('LoginRetrieveCtrl', ['$scope','AuthSvc', function ($scope,AuthSvc) {

			$scope.socialLogin = function(authMethod){

		    AuthSvc.$authWithOAuthRedirect(authMethod).then(function(authData){

		    }).catch(function(error){
		      if(error.code === 'TRANSPORT_UNAVAILABLE'){
		        
		        AuthSvc.$authWithOAuthPopup(authMethod).then(function(authData){

		        })

		      }else{
		        console.log(error);
		      }

		    })

		  }

		}]);

}());