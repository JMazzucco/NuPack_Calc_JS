describe('Markup Calculator', function() {

  beforeEach(function() {
    markupCalc.markupCategory = undefined;
    markupCalc.people = undefined;
    markupCalc.price = undefined;
  });

  describe('Flat Markup', function() {
    it('should return 5% of given price', function() {
      markupCalc.markupCategory = 'flat';
      markupCalc.price = 10;
      expect(markupCalc.markup()).toEqual(0.5);
    });
  });

  describe('Markup Per Person', function() {
    it('should return 1.5% of given price', function() {
      markupCalc.markupCategory = 'perPerson';
      markupCalc.people = 3;
      markupCalc.price = 10;
      expect(markupCalc.markup()).toEqual(0.36);
    });
  });

  describe('Pharmaceuticals Markup', function() {
    it('should return 7.5% of given price', function() {
      markupCalc.markupCategory = 'pharma';
      markupCalc.price = 10;
      expect(markupCalc.markup()).toEqual(0.75);
    });
  });

  describe('Food Markup', function() {
    it('should return 13% of given price', function() {
      markupCalc.markupCategory = 'food';
      markupCalc.price = 10;
      expect(markupCalc.markup()).toEqual(1.30);
    });
  });

  describe('Electronics Markup', function() {
    it('should return 2% of given price', function() {
      markupCalc.markupCategory = 'electronics';
      markupCalc.price = 10;
      expect(markupCalc.markup()).toEqual(0.20);
    });
  });

});

describe('Markup Manager', function() {
  describe('Set Properties And Add Markup', function() {
    it('should return Flat markup amount', function() {
      expect(setPropertiesAndGetMarkup(10, 'flat')).toEqual(0.5);
    });

    it('should return Per Person markup amount', function() {
      expect(setPropertiesAndGetMarkup(10, 'perPerson', 3)).toEqual(0.36);
    });

    it('should return Pharmaceuticals markup amount', function() {
      expect(setPropertiesAndGetMarkup(10, 'pharma')).toEqual(0.75);
    });

    it('should return Food markup amount', function() {
      expect(setPropertiesAndGetMarkup(10, 'food')).toEqual(1.30);
    });

    it('should return Electronics markup amount', function() {
      expect(setPropertiesAndGetMarkup(10, 'electronics')).toEqual(0.20);
    });
  });

  describe('Add markups and add them to given price', function() {
    it('should add the flat, perPerson and pharma markups to the given price', function() {
      expect(getUserInputAndAddMarkups(10, 'pharma', 1)).toEqual(11.37);
    });

    it('should add the flat and food markups to the given price', function() {
      expect(getUserInputAndAddMarkups(10, 'food')).toEqual(11.80);
    });
  });


  describe('Create an instance of getUserInputAndAddMarkups function for each job in given array ', function() {

    var arrayOfJobs = [
          {price: 10, markupCategory: 'pharma'},
          {price: 20, markupCategory: 'food', people: 1},
          {price: 50, markupCategory: 'electronics', people: 2}
        ];
    it('should return an array of 3 instances of getUserInputAndAddMarkups function', function() {
      expect(createJobInstances(arrayOfJobs)).toEqual([11.25, 23.84, 54.7]);
    });

  });
});
