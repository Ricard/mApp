var nameApp = angular.module('starter', ['ionic']);

nameApp.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home.html',
      controller: 'HomeCtrl'
    })
    .state('planol', {
      url: '/',
      templateUrl: 'planol.html',
      controller: 'HomeCtrl'
    })
    .state('vegetables', {
      url: '/',
      templateUrl: 'vegetables.html'
      // ,
      // controller: 'HomeCtrl'
    });
  $urlRouterProvider.otherwise("/");

});


nameApp.controller('HomeCtrl', function($scope, $state, $window) {
  // $scope.dev_width = $window.innerWidth;
  // $scope.dev_height = $window.innerHeight;
  $scope.seats4 = [0,1,2,3];

  $scope.anar = function (where) {
    $state.go(where);
  };
});
