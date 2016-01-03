var markupCalc = {
  price: undefined,
  people: undefined,
  markupCategory: undefined,

  percentages: {
    'flat': 0.05,
    'perPerson': function(people){
      return (0.012 * people)
    },
    'pharma': 0.075,
    'food': 0.13,
    'electronics': 0.02
  },

  priceWithMarkup: function(){
    if (this.people) {
      var markupPercent = this.percentages.perPerson(this.people);
    } else {
      var markupPercent = this.percentages[this.markupCategory]
    };
    var totalPrice = this.price * (1 + markupPercent);
    return Math.round(totalPrice * 100) / 100
  }
};

var setPropertiesAndGetMarkup = function(price, markupCategory, people){
  markupCalc.price = price;
  markupCalc.people = people || undefined;
  markupCalc.markupCategory = markupCategory;
  return markupCalc.priceWithMarkup();
};



//how to call a nested function so that it can be tested?


var addFlatMarkupToAllJobs = function(price){
  return setPropertiesAndGetMarkup(price, 'flat')
};


var getUserInputAndAddMarkups = function(price, markupCategory, people){
  people = people || undefined;

  var priceWithFlatMarkup = addFlatMarkupToAllJobs(price);
  return obj;
};





