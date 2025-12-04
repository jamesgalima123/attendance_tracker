angular.module('myApp')
  .service('UserService', function($http) {
    let firstname,lastname;
    this.init = function(token){
        try{
            let decoded = jwt_decode(token);
            let user = JSON.parse(decoded.user);
            firstname = user.firstname;
            lastname = user.lastname;
        }catch(e){
            console.log(e);
        }
    };
    this.logIn = function($scope,payload) {
      return $http.post($scope.apiUrl + '/web/generateotpemail',payload);
    };
    this.getFullName = function(){
        return firstname + " " + lastname;
    };
    // this.addItem = function(item) {
    //   items.push(item);
    // };
  });