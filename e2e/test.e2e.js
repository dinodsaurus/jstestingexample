"use strict";
/* global describe, browser, it, expect, element, by, beforeEach */
describe("E2E testing", function() {
  browser.ignoreSynchronization = true;
  beforeEach(function () {
    browser.driver.get('http://localhost:9000/');
  },10000);

  it("should check the title", function () {
    var titlePromise = browser.getTitle();
    expect(titlePromise).toEqual("javascripttesting");
  });

  it("should test the button", function () {
    var el = element(by.css(".btn-success"));
    el.click();
    expect(el.getAttribute("class")).toMatch("active");
  });
});
