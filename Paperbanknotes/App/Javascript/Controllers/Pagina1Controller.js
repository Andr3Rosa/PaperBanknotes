var autoApp = angular.module('AutoApp')

autoApp.controller('Pagina1Controller', ['$scope', '$http', '$location', function ($scope, $http, $location) {
    $scope.cars = [];
    $http.get("/api/car").then(function (response) {
        // gelukt
        $scope.cars = response.data;
    }, function (response) {
        // mislukt
    })

    $scope.removeCar = function (car) {
        var temporary = car;
        
        $http.delete("/api/car/"+ temporary.id).then(function (response) {
                
                $http.get("/api/car").then(function (response) {
                    // gelukt
                    $scope.cars = response.data;
                }, function (response) {
                    // mislukt
                })
            
        }, function (response) {
            // error
        });
    };

    $scope.edit = function (car) {
        $location.path('/wijzig/' + car.id);
    }
}]);