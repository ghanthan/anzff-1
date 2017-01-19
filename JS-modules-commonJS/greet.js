/**
 * http://usejsdoc.org/
 */


//console.log('Hello...');

function greet(){
	console.log('hello..');
}
function sayName(){
	console.log('im greet-module');
}

//module.exports.greet=greet;
//module.exports.sayName=sayName;

module.exports={
		greet,
		sayName
};