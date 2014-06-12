window.onload = function(){
	chrome.tabs.getSelected(null,function(tab) {
		window.processTabUrl(tab.url);
		var newRow = document.getElementById("addRow");
    newRow.addEventListener('click', function () { addRow("query-values", "", "", tab.url) });

		var goLink = document.getElementById("goLink");
    goLink.addEventListener('click', function () { new_page(tab.url) });

    //TODO: add ability to parse #hash value query parameters

    //TODO: add ability to copy the link with ZeroCopy.js
		//var copyLink = document.getElementById("copyLink");
    //copyLink.addEventListener('click', function () { new_link(tab.url) });
  });
};

window.new_page = function (tabUrl) {
  window.open(window.new_link(tabUrl), '_blank');
};

window.new_link = function (tabUrl) {
  var qs = {},
      key = '',
      val = '',
      new_url = document.createElement('a'),
      table = document.getElementById('query-values'),
      cells = table.getElementsByTagName('td');

  for (var i = 0, len = cells.length; i < len; i += 2){
    key = cells[i].innerHTML;
    val = cells[i + 1].innerHTML.replace("&nbsp;", "");
    qs[key] = val;
  }

  new_url.href = tabUrl;
  new_url.search = window.toQueryString(qs);
  return new_url.href;
};

window.toQueryString = function (obj) {
  var parts = [];

  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      parts.push(encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]));
    }
  }

  return parts.join("&");
};

window.addRow = function (table_id, name, value, tabUrl) {
	var table = document.getElementById(table_id),
	    row = document.createElement("tr"),
	    colName = document.createElement("td"),
	    colValue = document.createElement("td");

  colName.contentEditable = true;
  colValue.contentEditable = true;

  if (!name) name = "";
  if (!value) value = "&nbsp;";

	colName.innerHTML = name;
	colValue.innerHTML = value;

	row.appendChild(colName);
	row.appendChild(colValue);
	table.appendChild(row);

  var open = function (e) {
    var key = e.which || e.keyCode;
    if (key == 13) window.new_page(tabUrl);
  };

  colValue.addEventListener('keypress', open);
  colName.addEventListener('keypress', open);
};

window.processTabUrl = function(tabUrl) {
	var query = tabUrl;
	var parser = new QueryStringParser();
	var values = parser.getValues(query);
	var itemsFound = false;

	if(values!==null){
		var table = document.getElementById("query-values");
		for(var name in values){
			itemsFound = true;
      addRow("query-values", name, values[name], tabUrl);
		}
	}

	var elementToShow = (itemsFound) ?
		document.getElementById("scrollable") :
		document.getElementById("message");

	elementToShow.className += " show";
};