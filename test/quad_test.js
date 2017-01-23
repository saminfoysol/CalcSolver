/* eslint-env node, mocha */
var assert = require("assert");
var quad = require("../lib/quadEquation");

describe("QuadEquation", function() {
	describe("#quadEquation()", function() {
		it("solutions", function() {
			assert.equal("Solutions: 2 and -2", quad.quadEquation(1, 0, -4));
		});
	});
});