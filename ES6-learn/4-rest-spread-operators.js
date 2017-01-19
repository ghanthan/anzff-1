/**
 * http://usejsdoc.org/
 */


// rest-opeartor

function getItems(a,b,c,...rest){
	console.log(a);
	console.log(b);
	console.log(c);
// console.log(arguments[3]);
// console.log(arguments[4]);
	console.log(rest);
}
//getItems(1, 2, 3,4,5);




// spread operator

//var max=Math.max(10,20,40,20);

var nums=[10,20,40,30];

//var max=Math.max(nums[0],nums[1],nums[2],nums[3]);  // manual spreading

//var max=Math.max(...nums);

var arr1=[1,2];
var arr2=[...arr1,3,4,..."NAG"];



// imp-note : any iterable js-obj are spreadable



function f(a,b,c){
	console.log(a);
	console.log(b);
	console.log(c);
}

f(...[1,2,3]);


















