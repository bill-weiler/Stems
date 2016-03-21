(function() {
  'use strict';
  angular.module('StemsAppp', ['GreenSheets', 'ui.router'])
  .config(MainRouter)

//ui-router
function MainRouter($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "home.html",
    })
    .state('clients', {
      url: "/clients",
      templateUrl: "clients.html",
    })
    .state('to-do', {
      url: "/todo",
      templateUrl: "to-do.html",
    })
  $urlRouterProvider.otherwise('/')
}

}());
