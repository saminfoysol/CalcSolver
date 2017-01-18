/* approximation using trapezoidal rule */
var math = require("mathjs");

var areaTrapezoid = function(a, b, h) {
	var mid = (a + b) / 2;
	return mid * h;
};

var trapezoidal = function(lowerBound, upperBound, interval, equation) {
	var i = lowerBound;
	var area = 0;
	while (i < upperBound) {
		var leftVal = math.eval(equation, {x: i});
		var rightVal = math.eval(equation, {x: i + interval});
		var inc = areaTrapezoid(leftVal, rightVal, interval);
		area += inc;
		i += interval;
	}
	return area;
};


module.exports.trapezoidal = trapezoidal;
