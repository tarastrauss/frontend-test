(function() {
  "use strict";

  angular
    .module("statesApp")
    .factory("loginService", loginService);

  loginService.$inject = ["$log", "$http", '$rootScope', "$state"];

  function loginService($log, $http, $rootScope, $state) {
    var login = {
      loginUser: loginUser,
      currentUser: "",
      error: "",
      logout: logout
    }

    return login;

    function loginUser(username, password) {
      return $http({
        url:     "/login",
        method:  "POST",
        headers: {"Content-Type": "application/json"},
        data: angular.toJson({
          user: username,
          password: password
        })
      }).then(function(data) {
          console.log("the login was: ", data.data.result);
          if (data.data.result == true) {
            login.currentUser = username;
            $state.go('homePage');
          }
      });
    }

    function logout() {
      return $http({
        url:     "/logout",
        method:  "GET",
        headers: {"Content-Type": "application/json"},
      }).then(function(data) {
          console.log("the logout was: ", data.data.result);
          if (data.data.result == true) {
            login.currentUser = "";
            $state.go('landingPage');
          }
      });
    }

  }

})();
