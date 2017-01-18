/**
 * http://usejsdoc.org/
 */

/**
 * 
 * closure :
 * 
 * A closure is a function having access to the parent scope, even after the
 * parent function has closed.
 * 
 * 
 * why/when we need closures ?
 * 
 * 1. to abstract public-members of any module.
 * 2. while executing functions async ( callbacks ),
 *    to access parent-scoped data.
 * 
 */

function teach(sub) {

	console.log('teaching ' + sub + " start");
	var notes = sub + "-notes";
	var i = 100;

	function xyz() {
		console.log(i);
		return 10;
	}

	function learn() {
		console.log('learning ' + sub + " with " + notes);
	}

	return learn;
}

var learnFunc = teach('.js'); // teach-context with args + locals

learnFunc();
learnFunc();
