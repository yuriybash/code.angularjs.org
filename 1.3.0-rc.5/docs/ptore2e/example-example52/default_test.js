describe("", function() {
  var rootEl;
  beforeEach(function() {
    rootEl = browser.rootEl;
    browser.get("examples/example-example52/index.html");
  });
  
  it('should select Greetings!', function() {
    expect(element(by.id('greet')).getAttribute('selected')).toBeFalsy();
    element(by.model('selected')).click();
    expect(element(by.id('greet')).getAttribute('selected')).toBeTruthy();
  });
});