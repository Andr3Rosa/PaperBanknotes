describe('New Car Controller', function () {
    var httpBackend, rootScope, controller, scope;
    beforeEach(module('AutoApp'));

    beforeEach(inject(function ($httpBackend, $rootScope, $controller, $routeParams) {

        httpBackend = $httpBackend

        // Get hold of a scope (i.e. the root scope)
        rootScope = $rootScope
        controller = $controller
        scope = rootScope.$new();

    }));


    afterEach(function () {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });


    it("test carController", inject(function ($http) {
        httpBackend.expectPOST("/api/car", "auto").respond(true);
        httpBackend.expectGET("App/Partials/Home.html").respond("nvt");
        httpBackend.expectGET("App/Partials/Pagina1.html").respond("nvt");

        var scope = rootScope.$new();
        ctrl = controller('newCarController', { $scope: scope, $routeParams: { id: 1 } });
        scope.save("auto")

        httpBackend.flush();
        expect(httpBackend.post).toHaveBeenCalled();
    }));
});
        