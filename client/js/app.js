angular
  .module('app', [
    'lbServices',
    'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
      $urlRouterProvider) {
    $stateProvider
      .state('engrus', {
        url: '',
        templateUrl: 'views/engrus_result.html',
        controller: 'EngRusController'
      });

    $urlRouterProvider.otherwise('engrus');
  }]);