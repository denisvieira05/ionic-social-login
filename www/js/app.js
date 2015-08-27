// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('myApp', [
  'ionic',
  'ui.router',
  // 'myApp.filters',
  'myApp.services',
  // 'myApp.directives',
  'myApp.controllers',
  'firebase'
])

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

.config(function($stateProvider, $urlRouterProvider) {

  var befUrl = 'js/modules/';
 
  $stateProvider
    .state('dashboard', {
      url: '/',
      templateUrl: befUrl+'dashboard/index.html',
      controller: 'DashboardRetrieveCtrl'
    })
    .state('login', {
      url: '/login',
      templateUrl: befUrl+'login/index.html',
      controller: 'LoginRetrieveCtrl'
    })
    .state('register', {
      url: '/register',
      templateUrl: befUrl+'register/index.html',
      controller: 'RegisterRetrieveCtrl'
    });
 
  $urlRouterProvider.otherwise("/");
 
})



