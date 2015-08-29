(function() {

    'use strict';

    angular.module('myApp.dashboard', [
      'myApp.dashboard.controllers',
      //'myApp.dashboard.services',
      // 'myApp.dashboard.filters',
      // 'myApp.dashboard.directives',
      'ui.router'
    ])

    .config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {

      var modulePath = 'js/modules/dashboard/view/';
     
      $stateProvider
        .state('dashboard', {
          url: '/',
          templateUrl: modulePath+'index.html',
          controller: 'LoginRetrieveCtrl'
        });
      
     
    }]);

}());