var autoApp = angular.module('AutoApp')

autoApp.controller('updateCarController', ['$scope', '$location', '$http', function ($scope, $location, $http) {

    $scope.update = function (auto) {
        var temp = auto;
        $http.put("/api/car", auto).then(function (response) {
            $location.path('/pagina1');
        }, function (response) {
            $location.path('/pagina1');
        });
    };
}]);