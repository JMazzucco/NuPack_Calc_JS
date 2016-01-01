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
});

// * For each person that needs to work on the job, there is a markup of 1.2%

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


