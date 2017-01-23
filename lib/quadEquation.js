/* Function solves quadratic formula */

var math = require("mathjs");

var quadEquation = function(a, b, c){
	//format ax^2 + bx + c
	//input should be all doubles
	//Update later to possibly simplify fractions

	if ((b*b) - (4*a*c) > 0){ //non imaginary case
		if (b==0){

			//simplifies formula to just sqrt(-c/a)
			var sol = (-c)/a;
			if (math.sqrt(sol) % 1.0 == 0.0){
				var sol1 = math.sqrt(sol).toString();
				var sol2 = (math.sqrt(sol) * (-1)).toString();
			}
			else{
				var sol1 = "sqrt " + sol.toString();
				var sol2 = "-sqrt " + sol.toString();
			}
			return("Solutions: " + sol1 + " and " + sol2);
		}
		else{
			
			var root = (b*b)-(4*a*c);

			//check if b*b - 4*a*c is whole
			if (math.sqrt(root) % 1.0 == 0.0){
				var sol1 = ((-b) + math.sqrt(root)) / (2*a);
				sol1 = sol1.toString();

				var sol2 = ((-b) - math.sqrt(root)) / (2*a);
				sol2 = sol2.toString();
			}

			else {
			var sol1 = "(" + (-b).toString() + " + sqrt " + ((b*b)-(4*a*c)).toString() + ")";
			sol1 = sol1 + " / " + (2*a).toString();

			var sol2 = "(" + (-b).toString() + " - sqrt " + ((b*b)-(4*a*c)).toString() + ")";
			sol2 = sol2 + " / " + (2*a).toString();
			}

			return("Solutions: " + sol1 + " and " + sol2)

		}
	}

	else if ((b*b) < (4*a*c)){ //imaginary number case

		var root = (b*b)-(4*a*c);

		var sol = (-b).toString();

		if (math.sqrt(root) % 1.0){
			var sol1 = sol + " + " + math.sqrt(math.abs(b*b - (4*a*c)).toString());
			sol1 = sol1 + "i /" + (2*a).toString();

			var sol2 = sol + " + " + math.sqrt(math.abs(b*b - (4*a*c)).toString());
			sol2 = sol2 + "i /" + (2*a).toString();
		}

		else{

			var sol1 = sol + " + " + "sqrt" + '(' + math.abs(b*b - (4*a*c)).toString() + ')';
			sol1 = sol1 + " i " + '/' + (2*a).toString();

			var sol2 = sol + " - " + "sqrt" + '(' + math.abs(b*b - (4*a*c)).toString() + ')';
			sol2 = sol2 + " i " + '/' + (2*a).toString();
		}

		return("Solutions: "+ sol1 + " and " + sol2);

	}

};

//quadEquation(1.0, 0.0, -4.0);

module.exports.quadEquation = quadEquation;

