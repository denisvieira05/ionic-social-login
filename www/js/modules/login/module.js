(function() {

    'use strict';

    angular.module('myApp.login', [
      'myApp.login.controllers',
      'myApp.login.services',
      // 'myApp.login.filters',
      // 'myApp.login.directives',
      'ui.router'
    ])

    .config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {

      var modulePath = 'js/modules/login/view/';
     
      $stateProvider
        .state('login', {
          url: '/login',
          templateUrl: modulePath+'index.html',
          controller: 'LoginRetrieveCtrl'
        });
      
     
    }]);

}());