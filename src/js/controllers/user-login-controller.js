app.controller("LoginController", function($state, localStorageService) {

    this.userInfo = [];

    this.inputInfo = {
        userName: '',
        passWord: '',
    };

    this.submit = function() {
        this.userInfo.push(this.inputInfo);
        this.setInfo(this.userInfo);
        this.userinfo = this.getInfo();
    };
    this.setInfo = function(userInfo) {
        localStorageService.set('userInfo', this.userInfo);
    };

    this.getInfo = function() {
        return localStorageService.get('userInfo') || [];
    };


}).filter('currentdate', ['$filter', function($filter) {
    return function() {
        return $filter('date')(new Date(), 'MMM dd - hh:mma');
    };
}]);
