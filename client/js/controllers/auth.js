'use strict';
 
// access User model
angular
  .module('app').controller('LoginCtrl', function($scope, Contributor, $location) {
  $scope.login = function() {
      console.log("attempting login");
      //change username and passoword with data from login form
    $scope.loginResult = Contributor.login({"username": "Usernane", "password": "Password"},
      function(user) {
        // success
        console.log("success login" + user.id);
      }, function(res) {
        // error
        console.log("error login");
      });
  }
});
 