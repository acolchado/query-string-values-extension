window.onload = function(){
	chrome.tabs.getSelected(null,function(tab) {
		window.processTabUrl(tab.url);
	});
};

window.processTabUrl = function(tabUrl) {
	var query = tabUrl;
	var parser = new QueryStringParser();
	var values = parser.getValues(query);
	var itemsFound = false;

	if(values.length){
		var table = document.getElementById("query-values");


		for(var i = 0, len = values.length; i< len; i++){
			itemsFound = true;
			var row = document.createElement("tr");
			var colName = document.createElement("td");
			var colValue = document.createElement("td");

      for(var key in values[i]){
        colName.innerHTML = key;
        colValue.innerHTML = values[i][key] || "&nbsp;";
      }

			row.appendChild(colName);
			row.appendChild(colValue);
			table.appendChild(row);
		}
	}

	var elementToShow = (itemsFound) ? 
		document.getElementById("scrollable") :
		document.getElementById("message");

	elementToShow.className += " show";
};