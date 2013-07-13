describe("queryStringParser", function() {
	var parser = null;

	beforeEach(function() {
		parser = new QueryStringParser();
	});

	afterEach(function() {
		parser = null;
	});

	describe("getValues()", function(){
		it("should parse one value", function() {
			evaluateItem("http://github.com/?me=you", {me: "you"});
		});

		it("should parse 2 values", function() {
			evaluateItem("http://github.com/?me=you&yomama=andyourcousintoo", {me: "you", yomama: 'andyourcousintoo'});
		});

		it("should parse multi values", function() {
			evaluateItem("http://github.com/?me=you&yomama=andyour,cousintoo", {me: "you", yomama: 'andyour,cousintoo'});
		});

		it("should parse with a + in the values", function() {
			evaluateItem("http://github.com/?me=you&yomama=andyour+cousintoo", {me: "you", yomama: 'andyour cousintoo'});
		});

		it("should parse with an encoded value", function() {
			evaluateItem("http://github.com/?me=you%20too&yomama=andyour%20%26%20cousintoo", {me: "you too", yomama: 'andyour & cousintoo'});
		});

		it("should return empty object when there is no query", function() {
			evaluateItem("http://github.com", {});
		});

		it("should return empty object when there is no query", function() {
			evaluateItem("http://github.com/", {});
		});

		it("should return empty object when there is no query", function() {
			evaluateItem("http://github.com/?", {});
		});

		it("should return a key but no value", function() {
			evaluateItem("http://github.com/?me=", {me: ''});
		});

		function evaluateItem(item, expected){
			var result = parser.getValues(item);
			expect(result).toEqual(expected);
		}
	});

	describe("decode()", function(){
		it("should replace + with space", function() {
			var item = "me+you";
			var expected = "me you";
			var result = parser.decode(item);
			expect(result).toBe(expected);
		});

		it("should replace %26 and %20 with & and space", function() {
			var item = "me%20%26%20you";
			var expected = "me & you";
			var result = parser.decode(item);
			expect(result).toBe(expected);
		});

		// More decoding tests to be added
	});

	describe("getQueryFromUrl", function() {
		it("should get query string from url when provided", function() {
			var item = "http://www.github.com/?test=1";
			var expected = "test=1";
			var result = parser.getQueryFromUrl(item);
			expect(result).toBe(expected);
		});

		it("should get query string from url when query string provided with multiple options", function() {
			var item = "http://www.github.com/?test=1&test2=2";
			var expected = "test=1&test2=2";
			var result = parser.getQueryFromUrl(item);
			expect(result).toBe(expected);
		});

		it("should get empty query string from url when query string provided in hash", function() {
			var item = "http://www.github.com/#test=1";
			var expected = "";
			var result = parser.getQueryFromUrl(item);
			expect(result).toBe(expected);
		});

		it("should get empty query string from url when question mark is the last character", function() {
			var item = "http://www.github.com/?";
			var expected = "";
			var result = parser.getQueryFromUrl(item);
			expect(result).toBe(expected);
		});
	});
});