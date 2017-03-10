var autoApp = angular.module('AutoApp')

autoApp.controller('newCarController', ['$scope','$http', function ($scope, $http) {
    $scope.welkombericht.me = "yayyayaya";

   // $scope.save() = function (auto) {
    //    var temp = auto;
   //     $http.create("/api/car/" + auto).then(funciton (response){
        //gelukt
   // }, function(response){
        //mislukt

  //  }, function(response){
        //error
  //  });
    }]);