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
      AuthService.register($scope.user.name, $scope.user.password, $scope.user.email)
        .then(function() {
          //$state.transitionTo('sign-up-success'); //try to do with states
          console.log("user registered");
        });
    };
  })
 
.controller('AuthLogoutController', 
      function($scope, Contributor, $location) {
    $scope.logout = function() {
        console.log("attempting logout");
        $scope.logoutResult = Contributor.logout(
        
//        function() {
//        // success
//        console.log("user logged out");
//        }, function() {
//        // error
//        console.log("error logout");
//      }
        );
    }
});