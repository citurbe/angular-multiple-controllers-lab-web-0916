function StaffController() {
  var vm = this;
  vm.name = "Jerk";
  vm.email = "email@email.com";
  vm.phone = "914-865-7309";
}

angular
  .module('app')
  .controller('StaffController', StaffController);
