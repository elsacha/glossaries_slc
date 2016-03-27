//var app = angular
//  .module('app', [
//    'lbServices',
//    'ui.router'
//  ])
//  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
//      $urlRouterProvider) {
//    $stateProvider
//      .state('engrus_search', {
//        url: '',
//        templateUrl: 'views/engrus_search.html',
//        controller: 'EngRusController'
//      })
//      .state('result', {
//        url: 'engrus_result',
//        templateUrl: 'views/engrus_result.html',
//        controller: 'EngRusController'
//      });
//    
//
//    $urlRouterProvider.otherwise('');
//  }]);

var app = angular.module('app', ['lbServices', 'ngRoute']);

app.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'views/engrus_search.html',
        controller: 'EngRusController'
    })
    
    .when('/engrus_result', {
        templateUrl: 'views/engrus_result.html',
        controller: 'EngRusController'
    })
    
    .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignUpController',
        controllerAs: 'auth'
      })
    .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
    })
    
});

//var app = angular.module('app', ['lbServices', 'ui.router']);
//
//app.config(function($stateProvider, $urlRouterProvider) {
//    
//    $urlRouterProvider.otherwise('/');
//    
//    $stateProvider
//        
//        .state('search', {
//            url: '/',
//            templateUrl: 'views/engrus_search.html',
//            controller: 'EngRusController'
//        })
//    
//        
//        .state('result', {
//            url: 'engrus_result',
//            templateUrl: 'views/engrus_result.html',
//            controller: 'EngRusController'
//        });
//        
//});