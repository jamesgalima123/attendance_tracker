angular.module('myApp')
.controller('RootController', function($scope,$location,UserService) {
    var root = this;
    root.isLoginPage = false;
    //check if already logged in
    function checkIfLoggedIn(){
        let token = localStorage.getItem('token');
        //initialize logged in user infos if token is available
        if(token){
            try{
                UserService.init(token);
                root.user = {'fullname':UserService.getFullName(),'role_title':UserService.getRoleTitle()};
                if($location.path() === '/login'){
                    $location.path('/home')
                }
            }catch(e){
            }
        }else{
            $location.path('/login');
        }
    }
    function checkPage() {
        root.isLoginPage = ($location.path() === '/login');
    }
    root.logOut = function(){
        localStorage.clear();
        $location.path('/login');
    };
    root.profile = function(){
        $location.path('/profile');
    };
    // Listen for route changes and update
    $scope.$on('$routeChangeSuccess', function() {
        checkPage();
        checkIfLoggedIn();
    });
    

});