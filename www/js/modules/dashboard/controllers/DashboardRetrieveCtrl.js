(function() {

	'use strict';

	angular.module('myApp.dashboard.controllers', [])

		.controller('DashboardRetrieveCtrl', ['$scope', function ($scope) {

		    AuthSvc.$onAuth(function(authData){
			    if(authData === null){
			      console.log("Usuário não autenticado");		  
					$location.path('login');
			    }
			    else{
			      console.log("Usuário está autenticado");
			      //console.log(authData);
			    }
			    $scope.authData = authData;		    
			});

		}]);

}());