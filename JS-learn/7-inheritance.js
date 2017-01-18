
/**
 * 
 *  .js-lag supports inheritance with prototypes
 *  
 *   obj ===> parent-obj ( prototype )
 * 
 */

function Person(name,age){
	this.name=name;
	this.age=age;
//	this.sayName=function(){
//		console.log('im '+this.name);
//	};
//	
//	this.sayAge=function(){
//		console.log('im '+this.age+" old");
//	};
}

Person.prototype.sayName=function(){
console.log('im '+this.name);
};

Person.prototype.sayAge=function(){
console.log('im '+this.age+" old");
};


var p1=new Person('Nag', 32);
var p2=new Person('Ria', 1);



var p11=Object.create(p1);


//--------------------------------------------------

//
//
//function Employee(name,age,salary){
//	Person.call(this, name,age);
//	this.salary=salary;
//}
//Employee.prototype=new Person();
//
//Employee.prototype.work=function(){
//	console.log(this.name+" working on "+this.salary);
//};
//
//
//var e1=new Employee('Emp1', 32, 1000);
//var e2=new Employee('Emp2', 30, 2000);

//--------------------------------------------------



















