(function() {
  angular.module('statesApp', ["ui.router"]);

})();

(function() {
  "use strict";

  angular
    .module("statesApp")
    .config(AppRoutes);

  AppRoutes.$inject = ["$stateProvider", "$urlRouterProvider"];

  function AppRoutes($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state("landingPage", {
        url: "/",
        views: {
          content: {
            templateUrl: "/templates/landing.html"
          }
        },
        controller: "StatesController",
        controllerAs: "vm"
      }).state("homePage", {
        url: "/home",
        views: {
          nav: {
            templateUrl: '/templates/navbar.html'
          },
          content: {
            templateUrl: "/templates/home.html"
          }
        },
        controller: "StatesController",
        controllerAs: "vm"
      })

    $urlRouterProvider.otherwise("/");

  }

})();

(function() {
  "use strict";

  angular
      .module("statesApp")
      .controller("StatesController", StatesController);

  StatesController.$inject = ["$log", "loginService"];


  function StatesController($log, loginService) {
    var vm = this;

    vm.message = "fun";

    vm.username;
    vm.password;

    vm.loginService = loginService;

    vm.login = function(){
      $log.log("username:", vm.username);
      $log.log("password:", vm.password);
      loginService.loginUser(vm.username, vm.password);
    }

  }
})();

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
