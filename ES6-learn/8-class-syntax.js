/**
 * http://usejsdoc.org/
 */


// es5

//function Person(name,age){
//	this.name=name;
//	this.age=age;
//}
//Person.prototype.sayName=function(){
//	//..
//}
//Person.prototype.sayAge=function(){
//	//..
//}


class Person{

	
	constructor(name,age){
		console.log('Person()');
		this.name=name;
		this.age=age;
	}
	
	sayName(){
		//..
		console.log('im '+this.name);
	}
	sayAge(){
		console.log('im '+this.age+" old");
	}
	
}

class Employee extends Person{
	
	constructor(name){
		super(name);
	}
	
	
}
//
//var p1=new Person('Nag',32);
//var p2=new Person('Ria',1);


var e=new Employee();








