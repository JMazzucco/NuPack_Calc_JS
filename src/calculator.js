var markupCalc = {
  people: undefined,
  markupCategory: undefined,
  price: undefined,

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


var addFlatMarkup = function(){
  markupCalc.markupCategory = 'flat';
  return markupCalc.priceWithMarkup();
};