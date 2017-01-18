/**
 * http://usejsdoc.org/
 */

"use strict"

//
//function f(){
//	kk=10;
//}
//f();
//
//console.log(kk);


//
//var person={name:'Nag',age:32};
//Object.defineProperty(person, "name", {configurable:false,writable:false});

//Object.preventExtensions(person);
//Object.seal(person);
//Object.freeze(person);

//person.newProp='New-value';
//delete person.name;
//person.name="";

//-------------------------------------------------------


var person={
		_name:'Nag',
		_age:32,
		
		set name(newName){
			console.log('set name');
			if(newName){
				this._name=newName;
			}
		},
		get name(){
			console.log('get name');
			return this._name;
		},
		set num(n){
			
		},
		get num(){
			
		}
};

//person.name='New Nag';  // set  // write
//console.log(person.name); // get // read
//
//
//person.num=12;
//console.log(person.num);


//-------------------------------------------------------


var person={name:"Nag",age:12};
//
//if(person.name){
//	console.log('name property exist in person-obj');
//}


//if("name" in person){
//	console.log('name property exist in person-obj');
//}

for(var p in person){
	if(person.hasOwnProperty(p)){
	console.log(p+"==>"+person[p]);
	}
}




