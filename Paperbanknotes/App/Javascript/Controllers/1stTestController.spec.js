describe('MyController', function() {
    var $httpBackend, $rootScope, createController, authRequestHandler;
    beforeEach(module('MyApp'));

    beforeEach(inject(function($injector) {
        
        $httpBackend = $injector.get('$httpBackend');
        authRequestHandler = $httpBackend.when('GET', '/auth.py')
                               .respond({userId: 'userX'}, {'A-Token': 'xxx'});

        
        $rootScope = $injector.get('$rootScope');
       
        var $controller = $injector.get('$controller');

        createController = function() {
            return $controller('MyController', {'$scope' : $rootScope });
        };
    }));


    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });


    it('should fetch authentication token', function() {
        $httpBackend.expectGET('/auth.py');
        var controller = createController();
        $httpBackend.flush();
    });


    it('should fail authentication', function() {

        
        authRequestHandler.respond(401, '');

        $httpBackend.expectGET('/auth.py');
        var controller = createController();
        $httpBackend.flush();
        expect($rootScope.status).toBe('Failed...');
    });


    it('should send msg to server', function() {
        var controller = createController();
        $httpBackend.flush();

        $httpBackend.expectPOST('/add-msg.py', 'message content').respond(201, '');
        $rootScope.saveMessage('message content');
        expect($rootScope.status).toBe('Saving...');
        $httpBackend.flush();
        expect($rootScope.status).toBe('');
    });


    it('should send auth header', function() {
        var controller = createController();
        $httpBackend.flush();

        $httpBackend.expectPOST('/add-msg.py', undefined, function(headers) {
            return headers['Authorization'] === 'xxx';
        }).respond(201, '');

        $rootScope.saveMessage('whatever');
        $httpBackend.flush();
    });
});