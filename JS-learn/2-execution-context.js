/**
 * http://usejsdoc.org/
 */

/**
 * Execution-Context ------------------
 * 
 * stack-memory/frame with given args & locals to execute given-instructions
 * 
 * by default , JS-runtime has one 'global-execution-context', created for each
 * window initially
 * 
 * context : 2 phases
 * 
 * phase-1 : creation
 * 
 * all variables declared any-where will get hoisted( lifting-up ) to top of
 * context with default value ( undefined ).
 * 
 * phase-2 : execution
 * 
 * give instruction will execute in sequence.
 * 
 * 
 * imp-note :
 * 
 * every function invocation also creates new-execution-context which is child
 * of above context.
 * 
 * 
 * 
 */

//var v = 12;
//
//function f1() {
//
//	function f2() {
//		console.log(v);
//	}
//
//	//f2(); // f2-context ==> f1-context
//	
//	var v=13;
//	
//	//return f2;
//}



//var f2Ref=f1(); // f1-context ===> global-contextÏ
//f2Ref();  // f2-context ==> f1-context

//---------------------------------------

var notes="academy .js notes";

function teach(){
	//var notes="trainer .js notes";
	
	function learn(){
		//var notes="own .js notes";
		console.log('learning with '+notes);
	}
//	learn();
	return learn;
}



var learnFunc=teach(); // teach-context ==> global-context

learnFunc(); // learn-context ==> teach-context
learnFunc();




