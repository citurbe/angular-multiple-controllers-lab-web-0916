function ContactController(){
  var vm = this;
  vm.name = "Jerk";
  vm.email = "email@email.com";
  vm.phone = "914-865-7309";

  this.changeName = function() {
    this.name = 'Something else!'
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController);
