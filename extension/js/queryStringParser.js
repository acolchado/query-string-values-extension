function QueryStringParser(){
	this.regExPlusSymbol = /\+/g;
	this.regExQuerySearch = /([^&=]+)=?([^&]*)/g;

	this.getValues = function(url, type){
		var query = this.getQueryFromUrl(url, type);
		var hash = this.getQueryFromUrl(url, type);
		var values = {};
		var match;
		while (!!(match = this.regExQuerySearch.exec(query))){
			values[this.decode(match[1])] = this.decode(match[2]);
		}

		return values;
	};

	this.decode = function(value){
		return decodeURIComponent(value.replace(this.regExPlusSymbol, " "));
	};

	this.getQueryFromUrl = function(url, type){
    var anchor = document.createElement('a');
    anchor.href = url;
    if (anchor.search !== "" && type === "query") return anchor.search.substring(1);
    if (anchor.hash !== "" && type === "hash") return anchor.hash.substring(1);
    return "";
	};
}