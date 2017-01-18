/**
 * http://usejsdoc.org/
 */

/**
 * we can create func-obj in 2-ways
 * 
 * way-1 : function declaration / Named function
 * 
 * --> always hoisted to top of context with func-obj at context-creation-phase,
 * so we can call before/after declaration.
 * 
 * when to use : for default context's functions.
 * 
 * way-2 : function expression / anonymous function
 * 
 * --> func-obj will get created at context-execution-phase, so we can call
 * after expression.
 * 
 * when to use : to create function-obj based input-params or conditions at
 * context-execution-phase.
 * 
 */
// -------------------------------------------
// 1. function declaration
// console.log(add(12,13));
// function add(n1,n2){
// return n1+n2;
// }
// console.log(add(12,13));
// -------------------------------------------
// 2. function expression
//
// console.log(add(12,13));
//
// var add=function(n1,n2){
// return n1+n2;
// };
//
// //console.log(add(12,13));
// ---------------------------------------------

// e.g

// login();

// function login(){
//	
// var type="guest";
//	
// var func=null;
//	
// if(type==="admin"){
// func=function (){
// console.log('getting admin records..');
// }
// }else{
// func=function (){
// console.log('getting guest records..');
// }
// }
//	
// func();
//	
// }

// function f1(){
// console.log('no arg func');
// }
// //var f1=new Function();
//
//
//
// function f1(arg1){
// console.log('one arg func');
// }
// //var f1=new Function();
//
// f1(12);
// -------------------------------------------------------

//
// function f(){
//	
// //var func;
// if(true){
// func=function(){
// console.log('im a');
// }
// }else{
// func=function(){
// console.log('im b');
// }
// }
//	
// func();
//	
// }
// f();

// --------------------------------------------------
// function arguments

// function func(){
// console.dir(arguments);
// return arguments[1];
// }
//
// console.log(func(12,13,14,15));

// e.g
function sum() {

	var len = arguments.length, result = 0, i = 0;

	while (i < len) {
		result += arguments[i];
		i++;
	}

	return result;
}

// --------------------------------------------------

// function as values

function sayHello() {
	console.log('Hello..');
}

// sayHello();
var sayHi = sayHello;
// sayHi();

// --------------------------------------------------

// function as arg

function greetFunc(greet) {
	if (greet) {
		greet();
		return;
	}
	console.log('Hello..');
}

// greetFunc();
// greetFunc(function(){console.log('Ola...');});

// e.g

var nums = [ 1, 3, 5, 7, 9, 2, 4, 6, 8, 10 ];
// nums.sort();
nums.sort(function(a, b) {
	return b - a;
});

// console.log(nums);

// --------------------------------------------------

// function as return

function teach() {
	// ...
	console.log('teach...');
	function learn() {
		console.log('learn...');
	}

	return learn;

}

var learnFunc = teach();

learnFunc();
learnFunc();

// teach()();

//--------------------------------------------------

