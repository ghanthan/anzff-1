/**
 * http://usejsdoc.org/
 */

/**
 * 
 *  data-types
 *  
 *  1. simple/primitives ==> values
 *  
 *     a. string
 *     b. number
 *     c. boolean
 *     d. undefined
 *     e. null
 *  
 *  2. complex/references ==> objects
 * 
 * 
 */



// 1. simple types


//-------------------------------------------

// a. string

var name="nag";
var selection='a';

//-------------------------------------------

// b. number

var count=10;
var cost=10.00;

//-------------------------------------------

// c. boolean

var found=false;

/**
 * 
 *  imp-note :JS-lang falsy values
 *  
 *  false,0,"",undefined,null,NAN
 *  
 * 
 */

//-------------------------------------------
// d. undefined
var v;

//-------------------------------------------

// e. null
var person=null;

//-------------------------------------------


// 2. Reference types ==> Objects

/**
 *  How to create objects in .js-lang ?
 *  
 *  var ref=new ConstructorFunction();
 *  
 *  e.g
 *  
 *      Object
 *      Array
 *      EventEmitter
 *     
 * 
 */


var person=new Object();
person.name="Nag";
person.age=32;
person.doWork=function(){
	console.log('Teching .JS');
};

delete person.age;

//-------------------------------------------


// How to access .js obj's properties ?

/**
 *   2-ways
 *   
 *   way-1 : '.'  ==> for valid identifier property
 *   way-2 : '[]' ==> for invalid identifier property
 * 
 */

var person=new Object();
person.name="Nag";
person['full-name']="Naga N";

//console.log(person.name);
//console.log(person['name']);

//console.log(person['full-name']);


//-------------------------------------------

// literal-style objects


//-------------------------------------------

// 1. Object ==> object wrapper


var person=new Object();
person.name="Nag";
person.age=32;
person.doWork=function(){
	console.log('Teching .JS');
};


// or

var person={
		name:'Ria',
		age:32,
		doWork:function(){
			console.log('Teaching .JS');
		}
};


//-------------------------------------------

//2. Array


var arr=new Array();
arr.push("item1");
arr.push("item2");
arr[2]="item3";

// or

var arr=["item1","item2","item3"];

//-------------------------------------------

// 3. RegExp

var ssn=new RegExp("\\d{3}-\\d{2}-\\d{4}");

// or

var ssn=/\d{3}-\d{2}-\d{4}/;

//-------------------------------------------

// 4. Function

var add=new Function("n1","n2","var result=n1+n2;return result;");

// or

function add(n1,n2){
	var result=n1+n2;
	return result;
}

add.prop1=12;
add.prop2=13;






