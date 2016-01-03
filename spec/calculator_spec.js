describe('Markup Calculator', function() {

  beforeEach(function() {
    markupCalc.markupCategory = undefined;
    markupCalc.people = undefined;
    markupCalc.price = undefined;
  });

  describe('Flat Markup', function() {
    it('should increase price by 5%', function() {
      markupCalc.markupCategory = 'flat';
      markupCalc.price = 10;
      expect(markupCalc.priceWithMarkup()).toEqual(10.5);
    });
  });

  describe('Markup Per Person', function() {
    it('should increase price by 1.5% for each person', function() {
      markupCalc.markupCategory = 'perPerson';
      markupCalc.people = 3;
      markupCalc.price = 10;
      expect(markupCalc.priceWithMarkup()).toEqual(10.36);
    });
  });

  describe('Pharmaceuticals Markup', function() {
    it('should increase price by 7.5%', function() {
      markupCalc.markupCategory = 'pharma';
      markupCalc.price = 10;
      expect(markupCalc.priceWithMarkup()).toEqual(10.75);
    });
  });

  describe('Food Markup', function() {
    it('should increase price by 13%', function() {
      markupCalc.markupCategory = 'food';
      markupCalc.price = 10;
      expect(markupCalc.priceWithMarkup()).toEqual(11.30);
    });
  });

  describe('Electronics Markup', function() {
    it('should increase price by 2%', function() {
      markupCalc.markupCategory = 'electronics';
      markupCalc.price = 10;
      expect(markupCalc.priceWithMarkup()).toEqual(10.20);
    });
  });

});

describe('Markup Manager', function() {
  describe('Set Properties And Add Markup', function() {
    it('should return price with Flat markup', function() {
      expect(setPropertiesAndGetMarkup(10, 'flat')).toEqual(10.5);
    });

    it('should return price with Per Person markup', function() {
      expect(setPropertiesAndGetMarkup(10, 'perPerson', 3)).toEqual(10.36);
    });

    it('should return price with Pharmaceuticals markup', function() {
      expect(setPropertiesAndGetMarkup(10, 'pharma')).toEqual(10.75);
    });

    it('should return price with Food markup', function() {
      expect(setPropertiesAndGetMarkup(10, 'food')).toEqual(11.30);
    });

    it('should return price with Electronics markup', function() {
      expect(setPropertiesAndGetMarkup(10, 'electronics')).toEqual(10.20);
    });

  });

  describe('Add Flat Markup to all jobs', function() {
    it('should add a Flat Markup for Pharmaceuticals', function() {
      expect(getUserInputAndAddMarkups(10, 'pharma')).toEqual(10.5);
    });

    it('should add a Flat Markup for Electronics', function() {
      expect(getUserInputAndAddMarkups(10, 'food')).toEqual(10.5);
    });

    it('should add a Flat Markup for Food', function() {
      expect(getUserInputAndAddMarkups(10, 'electronics')).toEqual(10.5);
    });
  });


});
