/* eslint-env node, mocha */
var assert = require("assert");
var trap = require("../lib/trapezoidal");

describe("Trapezoidal", function() {
	describe("#trapezoidal()", function() {
		it("rectangle", function() {
			assert.equal(50, trap.trapezoidal(0, 10, 1, "x"));
		});
	});
});
