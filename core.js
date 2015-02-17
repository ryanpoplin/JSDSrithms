// variable and basic type prep...

(function(JS) {

	"use strict";

	console.log('\n');

	console.log(JS);

	// some of the different types of values in JavaScript...
	var num = 20;
	num += 4;
	console.log(num);

	var price = 1.50;
	console.log(price);

	var name = 'Poplin';
	console.log(name);

	var trueValue = true;
	console.log(trueValue);

	// no value...
	var nullValue = null;
	console.log(nullValue);

	// ready to be assigned...
	var und;
	console.log(und);

}("JavaScript..."));

// variable scope prep...

testGlobalVariable = 'Standard Global...';

(function() {

	"use strict";

	console.log('\n');

	var testGlobalVariable = 'Top of the functional scope...';
	
	function testFunction() {

		var testFunctionVariable = 'Local...';

		return testFunctionVariable;

	}

	function anotherTestFunction() {

		// illegal with strict usage and proper engine interpretation...
		// anotherGlobalVariable = 'Global...';

		// return anotherGlobalVariable;

	}

	console.log(testGlobalVariable);
	console.log(testFunction());
	// console.log(anotherTestFunction());
	
	// cannot retreive this value, it's locked in its functional scope...
	// console.log(testFunctionVariable);
	// console.log(anotherGlobalVariable);

}());

// operators prep...

(function() {

	"use strict";
	
	console.log('\n');

	var num = 0;

	num = num + 2;

	num = num * 3;

	num = num / 2;

	num++;
	++num;
	num--;
	--num;

	num += 1;
	num -= 2;
	num *= 14;
	num /= 22;
	num %= 2;

	var testNum = 24;

	// (x == || === y) returns (true || false)
	console.log('testNum == 1 : ' + (testNum == 1));
	console.log('testNum === 1 : ' + (testNum === 1));
	console.log('testNum != 1 : ' + (testNum != 1));
	console.log('testNum !== 1 : ' + (testNum !== 1));
	console.log('testNum > 1 : ' + (testNum > 1));
	console.log('testNum < 1 : ' + (testNum < 1));
	console.log('testNum >= 1 : ' + (testNum >= 1));
	console.log('testNum <= 1 : ' + (testNum <= 1));

	console.log('true && false : ' + (true && false));
	console.log('true || false : ' + (true || false));
	console.log('!true : ' + (!true));

	console.log('5 & 1:', (5 & 1));
	console.log('5 | 1:', (5 | 1));
	console.log('~ 5:', (~5));
	console.log('5 ^ 1:', + (5 ^ 1));
	console.log('5 << 1:', + (5 << 1));
	console.log('5 >> 1:', + (5 >> 1));

	

}());