describe('New Car Controller', function () {
    var httpBackend, rootScope, controller, scope;
    beforeEach(module('AutoApp'));

    beforeEach(inject(function ($httpBackend, $rootScope, $controller, $routeParams) {

        httpBackend = $httpBackend

        // Get hold of a scope (i.e. the root scope)
        rootScope = $rootScope
        // The $controller service is used to create instances of controllers
        controller = $controller
        // $location = $injector.get('$location');
        //$http = $injector.get('$http');
        scope = rootScope.$new();

    }));


    afterEach(function () {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });


    it("test carController", inject(function ($http) {
        httpBackend.expectGET("/api/car", "auto").respond(true);

        var scope = rootScope.$new();
        ctrl = controller('newCarController', { $scope: scope, $routeParams: { id: 1 } });

        httpBackend.flush();
        expect(scope.auto).toBe("id: 1, naam: auto");
    }));
});
        