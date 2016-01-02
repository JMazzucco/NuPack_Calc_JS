describe('Markup Calculator', function() {

  beforeEach(function() {
    markupCalc.markupCategory = undefined;
    markupCalc.people = undefined;
    markupCalc.price = undefined;
  });

  describe('Flat Markup', function() {
    it('should markup price by of 5%', function() {
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
  describe('Flat Markup', function() {
    it('should add a flat markup to every given price', function() {
      markupCalc.price = 10;
      expect(addFlatMarkup()).toEqual(10.5);
    });
  });
});

