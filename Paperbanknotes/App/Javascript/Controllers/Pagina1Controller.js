var autoApp = angular.module('AutoApp');

autoApp.controller('Pagina1Controller', ['$scope', '$http', function ($scope, $http) {
    $scope.cars = [];
    $http.get("/api/car").then(function (response) {
        // gelukt
        $scope.cars = response.data;
    }, function (response) {
        // mislukt
    });

    $scope.removeCar = function (car) {
        console.warn("Car = " + car);
        $http.delete("/api/car", car).then(function (response) {
            // success
        }, function (response) {
            // error
        });
    };
}]);