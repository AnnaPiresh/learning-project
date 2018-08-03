module.exports ={
  before: function(browser){
    browser.url(browser.globals.magentoURI);
  },

  after: function (browser) {
    browser.end();
  },

   'Sign in with invalid password': function (browser) {
    browser
      .waitForElementVisible('.account-cart-wrapper a[href*="account"]', browser.globals.smallWait)
      .click('.account-cart-wrapper a[href*="account"]')
      .waitForElementVisible('div#header-account', browser.globals.tinyWait)
      .click('a[href*="login"]')
      .waitForElementVisible('#email', browser.globals.smallWait)
      .clearValue('#email')
      .setValue('#email', 'mrtest377@yopmail.com')
      .clearValue('#pass')
      .setValue('#pass', 'test-pass')
      .waitForElementVisible('#send2', browser.globals.tinyWait)
      .click('#send2')
      .waitForElementVisible('.error-msg', browser.globals.smallWait);

    browser.assert.containsText('.error-msg', 'Invalid login or password.');
  },

  'Sign in with invalid email': function(browser){
    //ToDo: write test for sign in with invalid email
  },

  'Successful sign in to a website': function(browser){
    //ToDo: write test for successful sign in
    //pass for the account above 'QA92837465'
  }
};