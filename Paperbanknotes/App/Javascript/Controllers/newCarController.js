var autoApp = angular.module('AutoApp');

autoApp.controller('newCarController', ['$scope', function ($scope) {
    $scope.save = function () {
        var auto = $scope.auto;
    };
}]);