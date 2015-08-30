(function() {

	'use strict';

	angular.module('myApp.login.controllers')

		.controller('LoginRetrieveCtrl', ['$scope','AuthSvc', function ($scope,AuthSvc) {


			$scope.login = function() {

		    	AuthSvc.login($scope.user).then(function(data){

		    		console.log("Promise = "+data);

				      //$rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
				      //$scope.setCurrentUser(user);
			    }, function () {
			        $scope.falhou = true;
			    });	    	 
			}  	

		}]);

}());