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
