describe('AutoTrader HHS navigationChecks', function () {
    var $scope

    it('should go to home', function () {
        browser.get('http://localhost:5000/index.html#/');
        
        expect(browser.getCurrentUrl()).toBe('http://localhost:5000/index.html#/');
        expect(browser.getTitle("Auto's"));
    });

    it('checks the cars to be two', function () {
        browser.get('http://localhost:5000/index.html#/pagina1')
        expect(browser.getCurrentUrl()).toBe('http://localhost:5000/index.html#/pagina1');

        var car1Details = element(by.id('car-details-1'));
        expect(car1Details.isPresent());

        var car2Details = element(by.id('car-details-2'));
        expect(car2Details.isPresent());
    });

    it('buys the first car', function () {
        browser.get('http://localhost:5000/index.html#/pagina1')
        expect(browser.getCurrentUrl()).toBe('http://localhost:5000/index.html#/pagina1');
        
        var carDetails = element(by.id('car-details-1'));
        expect(carDetails.isPresent());

        var buyButton = element(by.id('buy-1'));
        buyButton.click();

        var carDetails = element(by.id('car-details-1'));
        expect(carDetails.isPresent()).toBe(false);
        expect(browser.getCurrentUrl()).toBe('http://localhost:5000/index.html#/pagina1')
    });

    it('adds a new car', function () {
        browser.get('http://localhost:5000/index.html#/pagina2')
        expect(browser.getCurrentUrl()).toBe('http://localhost:5000/index.html#/pagina2');

        var nameField = element(by.model('auto.naam'));
        var brandField = element(by.model('auto.merk'));
        var doorsField = element(by.model('auto.aantal_deuren'));
        var buildField = element(by.model('auto.bouwjaar'));
        var valueField = element(by.model('auto.originele_waarde'));
        var priceField = element(by.model('auto.prijs'));
        var saveButton = element(by.id('saveButton'));

        nameField.sendKeys('Test Auto');
        brandField.sendKeys('Testmerk');
        doorsField.sendKeys('5')
        buildField.sendKeys('2017');
        valueField.sendKeys('1000');
        priceField.sendKeys('2000');
        saveButton.click();

        expect(browser.getCurrentUrl()).toBe('http://localhost:5000/index.html#/pagina1');

        var carDetails = element(by.id('car-details-3'));
        expect(carDetails.isPresent());
    });

    it('change a car', function () {
        browser.get('http://localhost:5000/index.html#/pagina1')
        expect(browser.getCurrentUrl()).toBe('http://localhost:5000/index.html#/pagina1');

        var carDetails = element(by.id('car-details-3'));
        expect(carDetails.isPresent());

        var editButton = element(by.id('edit-3'));
        editButton.click();

        var nameField = element(by.model('auto.naam'));
        var brandField = element(by.model('auto.merk'));
        var saveButton = element(by.id('saveButton'));

        nameField.sendKeys('Test Auto Edit');
        brandField.sendKeys('Testmerk Edit');
        saveButton.click();

        expect(browser.getCurrentUrl()).toBe('http://localhost:5000/index.html#/pagina1');

        var carDetails = element(by.id('car-details-3'));
        expect(carDetails.isPresent());
    });
});

