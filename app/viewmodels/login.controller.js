angular.module('myApp')
  .controller('LoginController', function($location,UserService,$scope) {
    var vm = this;
    
    vm.username = '';
    vm.password = '';
    vm.error = '';
    //log in function
    vm.login = function() {
          console.log($scope.apiUrl);

      UserService.logIn($scope,{
        'username': vm.username,
        'password': vm.password
      }).then(function(response){
        if(response.data.token){
          localStorage.setItem("token",response.data.token);
          $location.path('main');
        }else{
          vm.error = "Invalid username or password";
        }
      });
      // Simple hardcoded authentication for demo
      // if (vm.username === 'admin' && vm.password === 'admin') {
      //   vm.error = '';
      //   alert('Login Successful!');
      //   $location.path('/home'); // Redirect to home route
      // } else {
      //   vm.error = 'Invalid username or password';
      // }
    };
  });