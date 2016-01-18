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
