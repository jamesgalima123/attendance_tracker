angular.module('myApp')
  .service('UserService', function($http) {
    const roles = ['Super Admin','Admin','Employee'];
    let firstname,lastname;
    let role_id;
    this.init = function(token){
        try{
            let decoded = jwt_decode(token);
            let user = JSON.parse(decoded.user);
            firstname = user.firstname;
            lastname = user.lastname;
            role_id = user.role_id;
        }catch(e){
            console.log(e);
        }
    };
    this.logIn = function($scope,payload) {
      return $http.post($scope.apiUrl + '/web/generateotpemail',payload);
    };
    this.getFullName = function(){
        let fullname = firstname + ' ' + lastname;
        return Utils.capitalizeFirstLetter(fullname);
    };
    this.getRoleTitle = function(){
      return roles[role_id];
    };
    // this.addItem = function(item) {
    //   items.push(item);
    // };
  });