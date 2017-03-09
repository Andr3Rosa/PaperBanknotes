var autoApp = angular.module('AutoApp');

autoApp.controller('Pagina1Controller', ['$scope', '$http', function ($scope, $http) {
    $scope.cars = [];
    $http.get("/api/car").then(function (response) {
        // gelukt
        $scope.cars = response.data;
    }, function (response) {
        // mislukt

    });

    //$http.post

    //$http.put

    //$http.delete

}]); 