describe('updateCarController', function () {
    var $httpBackend, $rootScope, $controller;
    //beforeEach(module('AutoApp'));

    beforeEach(inject(function ($injector) {

        $httpBackend = $injector.get('$httpBackend');

        // Get hold of a scope (i.e. the root scope)
        $rootScope = $injector.get('$rootScope');
        // The $controller service is used to create instances of controllers
        $controller = $injector.get('$controller');
       // $location = $injector.get('$location');
       //$http = $injector.get('$http');
        $scope = $rootScope.$new();

        //$httpBackend
           // .when("GET")
           // .respond(200, { id: 1, naam: "S model", merk: "Tesla",bouwjaar: 2014, aantal_deuren:5, originele_waarde: 81100, prijs:90000});
//        $httpBackend
 //           .expect("GET", "http://localhost/api/car/1");

    }));
    

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });


    it("get chosen car id", inject(function ($http) {
        $httpBackend.expectGET("http://localhost/api/car/1").respond("pig");
        ctrl = $controller('updateCarController', { $scope: $scope });

        //httpMock.expectGET("/data").respond("pig");
        //ctrl = controllerService('cDashboard', { $scope: scope });
        httpMock.flush();
        expect($scope.data).toBe("pig");
    }));
});