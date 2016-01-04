var arrayOfJobs = [];

var clearFields = function() {
  document.getElementById('price').value = "";
  document.getElementById('workers-needed').value = "";
  document.getElementById('markupCategory').value = "";
}

document.getElementById('save').onclick = function() {
  var price = document.getElementById('price').value
  var people = document.getElementById('workers-needed').value
  var markupCategory = document.getElementById('markupCategory').value

  var job = {price: price, markupCategory: markupCategory, people: people }

  clearFields();
  arrayOfJobs.push(job);
  }

var displayTotalPrices = function(array) {
  for (var i=0; i < array.length; i++){
    var newListItem = document.createElement("li");
    newListItem.innerHTML = array[i] +"<br/>";
    document.getElementById('results-list').appendChild(newListItem);
  };
};

document.getElementById('done-btn').onclick = function() {
  var totalPrices = arrayOfTotalPrices(arrayOfJobs);
  document.getElementById('results-list').innerHTML = "";
  displayTotalPrices(totalPrices);
  arrayOfJobs = [];
};