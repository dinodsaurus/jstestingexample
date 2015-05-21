"use strict";
/* global browser */
exports.config = {
  baseUrl: "http://localhost:9000",
  seleniumAddress: "http://127.0.0.1:4444/wd/hub",
  capabilities: {
    "browserName": "chrome"
  },
  onPrepare:function(){
    browser.driver.manage().window().setSize(1280,900);
    browser.driver.manage().window().setPosition(0,0);
  }
};
