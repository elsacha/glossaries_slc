'use strict';
 
// access User model
angular
  .module('app').controller('LoginCtrl', function($scope, Contributor, $location) {
  $scope.login = function() {
      console.log("attempting login");
      //change username and passoword with data from login form
    $scope.loginResult = Contributor.login({"username": $scope.user.name, "password": $scope.user.password},
      function(user) {
        // success
        console.log("success login" + user.id);
      }, function(res) {
        // error
        console.log("error login");
      });
  }
})

 .controller('SignUpController', 
      function($scope, Contributor, AuthService, $location) {
    $scope.register = function() {
      AuthService.register($scope.user.email, $scope.user.email, $scope.user.password)
        .then(function() {
          //$state.transitionTo('sign-up-success'); //try to do with states
          console.log("user registered");
        });
    };
  });
 