var arrayOfJobs = [];

document.getElementById('save').onclick = function() {
		var price = document.getElementById('price').value
		var people = document.getElementById('workers-needed').value
		var markupCategory = document.getElementById('markupCategory').value

		var job = {price: price, markupCategory: markupCategory, people: people }
		arrayOfJobs.push(job);

		document.getElementById('price').value = "";
		document.getElementById('workers-needed').value = "";
		document.getElementById('markupCategory').value = "";

		return arrayOfJobs;
	}

document.getElementById('done-btn').onclick = function() {
		var arrayOfFinalPrices = arrayOfTotalPrices(arrayOfJobs);
		document.getElementById('results-list').innerHTML = "";
		for (var i=0;i<arrayOfFinalPrices.length; i++){
			 var newListItem = document.createElement("li");
			 newListItem.innerHTML = arrayOfFinalPrices[i] +"<br/>";
       document.getElementById('results-list').appendChild(newListItem);
		};

		arrayOfJobs = [];
};