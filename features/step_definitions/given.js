module.exports = function given() {	

	this.Given(/^I visit "([^"]*)"$/, function (url) {
		browser.deleteCookie()		
		browser.url(url);
		//var get_url = browser.getUrl();
		//get_url = get_url.substring(0, get_url.length - 1);
		//expect(url).to.equal(get_url,'LOL- ERoooooRRRr')
	});
	
	this.Given(/^I click on the button "([^"]*)"$/, function (selector) {
		browser.click(selector);
	});

	this.Then(/^I expect that element "([^"]*)?"( not)* matches the text "([^"]*)?"$/, function(element, falseCase, expectedText, done){ 
		browser.waitForVisible(element, 3000);
		let command = 'getValue';
		if (browser.getAttribute(element, 'value') === null) {
			command = 'getText';
		}
		let doneCallback = done;
		let parsedExpectedText = expectedText;
		let boolFalseCase = !!falseCase;
		if (!doneCallback && typeof parsedExpectedText === 'function') {
			doneCallback = parsedExpectedText;
			parsedExpectedText = '';

			boolFalseCase = !boolFalseCase;
		}
		if (parsedExpectedText === undefined && falseCase === undefined) {
			parsedExpectedText = '';
			boolFalseCase = true;
		}
		const text = browser[command](element);
		if (boolFalseCase) {
			parsedExpectedText.should.not.equal(text);
		} else {
			parsedExpectedText.should.equal(text);
		}
		doneCallback();
	});

};
