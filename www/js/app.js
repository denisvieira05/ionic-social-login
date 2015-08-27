// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','firebase'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.factory('AuthSvc',['$firebaseAuth',function($firebaseAuth){

  var endPoint = 'https://ionic-sociallogin.firebaseio.com/';
  var usersRef = new Firebase(endPoint);

  return $firebaseAuth(usersRef);

}])

.controller('AppCtrl',['$scope','AuthSvc',function($scope,AuthSvc){

  AuthSvc.$onAuth(function(authData){
    if(authData === null){
      console.log("Usuário não autenticado");
    }
    else{
      console.log("Usuário está autenticado");
      console.log(authData);
    }

    $scope.authData = authData;

    
  })

  $scope.login = function(authMethod){

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

}])
