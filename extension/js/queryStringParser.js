function QueryStringParser(){
	this.regExPlusSymbol = /\+/g;
	this.regExQuerySearch = /([^&=]+)=?([^&]*)/g;	

	this.getValues = function(url){
		var query = this.getQueryFromUrl(url);
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

	this.getQueryFromUrl = function(url){
		var queryIndex = url.indexOf("?");
		if(queryIndex >= 0 && (queryIndex+1) < url.length)
		{
			return url.substring(queryIndex+1);
		}
		return "";
	};
}