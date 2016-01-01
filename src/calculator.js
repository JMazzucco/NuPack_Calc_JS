var flat = function(price) {
  var markupPercentage = 0.05;
  return price * (1 + markupPercentage);
};

var perPerson = function(price, people){
  var markupPercentage = 0.015;
  var totalPercentage = markupPercentage * people;
  return price * (1 + totalPercentage);
};
