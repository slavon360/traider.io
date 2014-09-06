var app = angular.module('ecom', []);
app.controller('restCtrl', function($scope, $http) {
    /*
    $http['']('').then(function(obj) {        
        console.log(obj);
    }, function(e) {
        console.log(e);
    });
    */
    //Create Update Delete GetAll GetOne
    var url, method;

    $scope.data = {
        brand: ''
    };

    $scope.Create = function() {
        url = '/addProduct';
        method = 'post';
    };

    $scope.Update = function() {
        url = '/editProduct';
        method = 'post';
        $scope.data.id = '540b00e468946074049b36bb';
    };

    $scope.Remove = function() {
        url = '/removeProduct';
        method = 'post';
        $scope.data = {
            id: '540b357e3903336c1bb3969e'
        };
    };

    $scope.GetOne = function() {
        url = '/getProduct';
        method = 'get';
        $scope.data = {
            id: '540b5c0e91cba39419322c41'
        };
    };

    $scope.makeAjax = function() {
        console.log($scope.data);
        /*
        $http[method](url, $scope.data).then(function(obj) {
            console.log(obj.data.message);
        }, function(e) {
            console.log(e);
        });
*/


        $http({
            url: url,
            method: 'GET',
            data:{id: "540b5c0e91cba39419322c41"}
        }).then(function(obj) {
            console.log(obj.data.message);
        }, function(e) {
            console.log(e);
        });

    };
});