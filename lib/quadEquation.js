/* Function solves quadratic formula */

var math = require("mathjs");

var quadEquation = function(a, b, c){
	//format ax^2 + bx + c
	//input should be all doubles

	if ((b*b) - (4*a*c) > 0){ //non imaginary case
		if (b==0){
			//simplifies formula to just sqrt(-c/a)
			var sol = (-c)/a;
			var sol1 = "sqrt " + sol.toString();
			var sol2 = "-sqrt " + sol.toString();
			console.log("Solutions: " + sol1 + " and " + sol2);
		}
		else{
			//Update later to clean up for when the sqrt == a whole number
			
			var sol1 = "(" + (-b).toString() + " + sqrt " + ((b*b)-(4*a*c)).toString() + ")";
			var sol1 = sol1 + " / " + (2*a).toString();

			var sol2 = "(" + (-b).toString() + " - sqrt " + ((b*b)-(4*a*c)).toString() + ")";
			var sol2 = sol2 + " / " + (2*a).toString();

			console.log("Solutions: " + sol1 + " and " + sol2)

		}
	}

	else if ((b*b) < (4*a*c)){ //imaginary number case
		//this works but can be better imo. Update later to account for when sqrt == a whole number
		var sol = (-b).toString();

		var sol1 = sol + " + " + "sqrt" + '(' + math.abs(b*b - (4*a*c)).toString() + ')';
		sol1 = sol1 + " i " + '/' + (2*a).toString();

		var sol2 = sol + " - " + "sqrt" + '(' + math.abs(b*b - (4*a*c)).toString() + ')';
		sol2 = sol2 + " i " + '/' + (2*a).toString();

		console.log("Solutions: "+ sol1 + " and " + sol2);

	}

};

quadEquation(1.0, 3.0, 2.0);

module.exports.quadEquation = quadEquation;

