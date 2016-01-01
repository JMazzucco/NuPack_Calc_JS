var flat = function(price) {
  var markupPercentage = 0.05;
  return price * (1 + markupPercentage);
};

var perPerson = function(price, people){
  var markupPercentage = 0.015;
  var totalPercentage = markupPercentage * people;
  return price * (1 + totalPercentage);
};

var pharma = function(price){
  var markupPercentage = 0.075;
  var markedupPrice = price * (1 + markupPercentage)
  var roundedPrice = Math.round(markedupPrice * 100) / 100
  return roundedPrice
};

var food = function(price){
  var markupPercentage = 0.13;
  var markedupPrice = price * (1 + markupPercentage)
  var roundedPrice = Math.round(markedupPrice * 100) / 100
  return roundedPrice
};

var electronics = function(price){
  var markupPercentage = 0.02;
  var markedupPrice = price * (1 + markupPercentage)
  var roundedPrice = Math.round(markedupPrice * 100) / 100
  return roundedPrice
};