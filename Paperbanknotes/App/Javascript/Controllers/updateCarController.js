var autoApp = angular.module('AutoApp')

autoApp.controller('updateCarController', ['$scope', '$location', '$http', '$routeParams', function ($scope, $location, $http, $routeParams) {
    autoId = $routeParams.id;
    $http.get("/api/car/"+ autoId).then(function (response) {
        // gelukt
        $scope.auto = response.data;

    }, function (response) {
        // mislukt
    })

    $scope.update = function (auto) {
        var temp = auto;
        $http.put("/api/car/" + auto.id, auto).then(function (response) {
            $location.path('/pagina1');
        }, function (response) {
            $location.path('/pagina1');
        });
    };
}]);