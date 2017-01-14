/* approximation using simpson's rule */
var math = require("mathjs");

var simpsons = function(upperBound, lowerBound, numIntervals, equation){
	var deltax = (upperBound - lowerBound) / numIntervals;
	var values = [];
	var i = lowerBound;
	var counter = 0;
	while (i <= upperBound) {
		var mult;
		if (i === lowerBound || i === upperBound) {
			mult = 1;
		}
		else {
			if (counter % 2 === 0) {
				mult = 2;
			}
			else {
				mult = 4;
			}
		}
		values.push({
			mult: mult,
			val: math.eval(equation, {x: i})
		});
		counter++;
		i += deltax;
	}
	var total = 0;
	for (var k = 0; i < values.length; i++) {
		var v = values[k];
		total += v.mult * v.val;
	}
	return (deltax / 3) * total;
};

module.exports.simpsons = simpsons;
