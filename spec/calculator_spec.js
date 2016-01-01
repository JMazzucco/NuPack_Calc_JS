describe('Markup', function() {
  describe('Flat Markup', function() {
    it('should markup price by of 5%', function() {
      expect(flat(10)).toEqual(10.5);
    });
  });

  describe('Markup Per Person', function() {
    it('should increase price by 1.5% for each person', function() {
      expect(perPerson(10, 3)).toEqual(10.45);
    });
  });

  describe('Pharmaceuticals Markup', function() {
    it('should increase price by 7.5%', function() {
      expect(pharma(10)).toEqual(10.75);
    });
  });


});



// * If pharmaceuticals are involved, there is an immediate 7.5% markup
// * For food, there is a 13% markup
// * Electronics require a 2% markup

// Matcher examples:

// expect('Hello World!').toEqual('Hello World!');
// expect('Hello World!').not.toEqual('Goodbye!');
// expect('Hello World!').toNotEqual('Hi!');
// expect([1, 2, 3]).toEqual([1, 2, 3]);

// expect(false).toBeFalsy();

// expect(true).toBeTruthy();
// expect({}).toBeDefined();

// expect(null).toBeNull();
// expect([1, 2, 3]).toContain(2);


