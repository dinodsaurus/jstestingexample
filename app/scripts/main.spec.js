/*global describe, it, dino, w */
"use strict";

(function () {
    describe("Jasmine html testing", function () {
      it("testing a function", function () {
        var n = app.name();
        expect(n).toBe("MOP2015");
      });
      it("testing a function2", function () {
        var n = app.name();
        expect(n).toBe("MOP2015!");
      });
    });
})();
