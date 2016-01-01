var markupPercentage;

var percentages = {
  flat: 0.05,
  perPerson: 0.015,
  pharma: 0.075,
  food: 0.13,
  electronics: 0.02
}


var flat = function(price) {
  markupPercentage = percentages.flat;
  return price * (1 + markupPercentage);
};

var perPerson = function(price, people){
  markupPercentage = percentages.perPerson;
  var totalPercentage = markupPercentage * people;
  return price * (1 + totalPercentage);
};

var pharma = function(price){
  markupPercentage = percentages.pharma;
  var markedupPrice = price * (1 + markupPercentage)
  var roundedPrice = Math.round(markedupPrice * 100) / 100
  return roundedPrice
};

var food = function(price){
  markupPercentage = percentages.food;
  var markedupPrice = price * (1 + markupPercentage)
  var roundedPrice = Math.round(markedupPrice * 100) / 100
  return roundedPrice
};

var electronics = function(price){
  markupPercentage = percentages.electronics;
  var markedupPrice = price * (1 + markupPercentage)
  var roundedPrice = Math.round(markedupPrice * 100) / 100
  return roundedPrice
};