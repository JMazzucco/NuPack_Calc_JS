describe('Get Array Of Final Prices', function() {
    it('should return an array of 3 marked up prices', function() {
      getArrayOfFinalPrices

      expect(markupCalc.markup()).toEqual(0.5);
    });
  });