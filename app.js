(function() {
  'use strict';

  //=============Module and dependency injector==============\\
  angular.module('StemsAppp', ['GreenSheets', 'ui.router'])
  .config(MainRouter)

//=============UI Router==============\\
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
      url: "/clients/:lname",
      templateUrl: "clientProfile.html"
    })
  $urlRouterProvider.otherwise('/')
}

}()); //End of iife
