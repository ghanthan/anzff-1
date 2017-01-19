/**
 * http://usejsdoc.org/
 */


// es5
//var person={
//		name:"Nag",
//		sayName:function(){
//			console.log('im '+this.name);
//		}
//};


// es6

//var person={
//		name:"Nag",
//		sayName(){
//			console.log('im '+this.name);
//		}
//};


// dynamic properties

//var prop="my-name";
//
//var person={
//		[prop]:"Nag",
//		["say-"+prop](){
//			console.log('im '+this[prop]);
//		}
//};
//
//person['say-'+prop]();




var name="Nag";
var age=32;

var person={
		name:name,
		age:age
};

var person={name,age};











