(function() {

  'use strict';

  angular.module('myApp.register', [
    'myApp.register.controllers',
    'myApp.register.services',
    // 'myApp.register.filters',
    // 'myApp.register.directives',
    'ui.router'
  ])
  .config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {

    var modulePath = 'js/modules/register/view/';
   
    $stateProvider
      .state('register', {
        url: '/register',
        templateUrl: modulePath+'index.html',
        controller: 'RegisterRetrieveCtrl'
      });  

  }]);

}());