(function() {
  'use strict';
  angular.module('StemsAppp', ['GreenSheets', 'ui.router'])
  .config(MainRouter)

//ui-router
function MainRouter($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "home.html"
    })
    .state('clients', {
      url: "/clients",
      templateUrl: "clients.html"
    })
    .state('todo', {
      url: "/todo",
      templateUrl: "todo.html"
    })
    .state('clientProfile', {
      url: "/clients/:index",
      templateUrl: "clientProfile.html"
    })
  $urlRouterProvider.otherwise('/')
}

}());
