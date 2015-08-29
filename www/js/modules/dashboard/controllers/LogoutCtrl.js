(function() {

	'use strict';

	angular.module('myApp.dashboard.controllers', [])

		.controller('LogoutCtrl', ['$scope','AuthSvc','$location', function ($scope,AuthSvc,$location) {
			
			$scope.logout = function(){
				AuthSvc.$unauth(function(data){
					console.log(data);
				});
			}

		}]);

}());