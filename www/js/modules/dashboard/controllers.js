'use strict';

angular.module('myApp.controllers.dashboard', [])

	.controller('DashboardRetrieveCtrl', ['$scope','AuthSvc','$location', function ($scope,AuthSvc,$location) {

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
		})

	}])
	.controller('DashboardLogoutCtrl', ['$scope','AuthSvc','$location', function ($scope,AuthSvc,$location) {
		
		$scope.logout = function(){
			AuthSvc.$unauth(function(data){
				console.log(data);
			});
		}

	}])