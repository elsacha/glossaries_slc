angular
  .module('app')
  .factory('AuthService', ['Contributor', '$q', '$rootScope', function(Contributor, $q,
      $rootScope) {
    function login(email, password) {
      return Contributor
        .login({email: email, password: password})
        .$promise
        .then(function(response) {
          $rootScope.currentUser = {
            id: response.user.id,
            tokenId: response.id,
            email: email
          };
        });
    }

    function logout() {
      return Contributor
       .logout()
//       .$promise
//       .then(function() {
//         $rootScope.currentUser = null;
//       });
    }

    function register(username, password, email) {
      return Contributor
        .create({
         username: username,
         password: password,
         email: email
       })
       .$promise;
    }

    return {
      login: login,
      logout: logout,
      register: register
    };
  }]);