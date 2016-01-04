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

  markup: function(){
    if (this.people) {
      var markupPercent = this.percentages.perPerson(this.people);
    } else {
      var markupPercent = this.percentages[this.markupCategory]
    };
    var totalPrice = this.price * (markupPercent);
    return Math.round(totalPrice * 100) / 100
  }
};

var setPropertiesAndGetMarkup = function(price, markupCategory, people){
  markupCalc.price = price;
  markupCalc.people = people || undefined;
  markupCalc.markupCategory = markupCategory;
  return markupCalc.markup();
};

var getUserInputAndAddMarkups = function(price, markupCategory, people){
  people = people || undefined;

  // console.log(price +" "+markupCategory+" "+people);

  var flatMarkup = setPropertiesAndGetMarkup(price, 'flat');
  var materialMarkup = setPropertiesAndGetMarkup(price, markupCategory);
  var perPersonMarkup = 0;


  if (people > 0) {
     perPersonMarkup = setPropertiesAndGetMarkup(price, 'perPerson', people);
  };

  var priceFloat = parseFloat(price);
  var flatMarkupFloat = parseFloat(flatMarkup);
  var materialMarkupFloat = parseFloat(materialMarkup);
  var perPersonMarkupFloat = parseFloat(perPersonMarkup);

  var priceWithMarkups = priceFloat + flatMarkupFloat + materialMarkupFloat + perPersonMarkupFloat;

  return Math.round(priceWithMarkups * 100) / 100;
};

var createJobInstances = function(arrayOfJobs) {
  var jobs = [];

  for (var i = 0; i<arrayOfJobs.length; i++) {
    var price = arrayOfJobs[i].price;
    var markupCategory = arrayOfJobs[i].markupCategory;
    var people = arrayOfJobs[i].people || undefined;
    var job = getUserInputAndAddMarkups (price, markupCategory, people);

    jobs.push(job);
  };

  return jobs;
};
