/**
 * http://usejsdoc.org/
 */

//----------------------------------------------

/**
 *   'this' ==> owner of execution-context
 *   
 *   imp-note : every context must execute by one-object( this ) in .js lang
 *   
 *   
 *   imp-note : every js-runtime has one global-obj by default.
 *   
 *   	e.g
 *   
 *      browser ==> window
 *      node    ==> process
 *      
 *      global-obj ==> js activation object.
 *      
 *      
 *      by default all global-variables/global-context variables
 *      will become properties of global obj at global-context creation-phase.
 * 
 * 
 */

//----------------------------------------------


// why we need 'this' keyword

var pname = 'G';

var person = {
	pname : 'Nag',
	sayName : function() {
		 var pname='A';
		// console.log('im '+pname);
		// console.log('im '+person.pname);
		console.log('im ' + this.pname);
		// console.log('im '+person.myName);
	}
};

// person.sayName();

var p = person;
person = {
	pname : 'Ria'
};

//p.sayName();


//----------------------------------------------


//var p1={name:'Nag',sayName:function(){console.log('im '+this.name);}};
//var p2={name:'Ria',sayName:function(){console.log('im '+this.name);}};

//
//function sayNameForAll(){
//	console.log(this);
//	console.log('im '+this.name);
//}
//
//var p1={name:'Nag',sayName:sayNameForAll};
//var p2={name:'Ria',sayName:sayNameForAll};


//p1.sayName();
//p2.sayName();    //  method-invocation   ( this ==> invoker-obj )
//sayNameForAll(); //  function-invocation ( this ==> global-obj )


//----------------------------------------------



// from third-party

var greetUtil={
		sayName:function(message,from){
			console.log(message + ' im '+this.name+":"+from);
		}
};


// persons

var p1={name:'Nag'};
var p2={name:'Ria'};

//employees

var e1={name:'emp1'};
var e2={name:'emp2'};

// dynamic func binding


// way-1
//greetUtil.sayName.call(p1,"Hello","CHN");
//greetUtil.sayName.call(e1,"Dude","BLR");
//
//
////way-2
//greetUtil.sayName.apply(p1,["Hello","CHN"]);
//greetUtil.sayName.apply(e1,["Dude","BLR"]);


// way-3
//var newF=greetUtil.sayName.bind(p1);
//// on event
//newF("Hi","Universe");
//
//var newF2=greetUtil.sayName.bind(e1, "Dude","CTS");
//// when some-one comes;
//newF2();
//



//----------------------------------------------


//function Person(name,age){
//	this.name=name;
//	this.age=age;
//	
//	this.sayName=function(){
//		console.log('im '+this.name);
//	};
//	
//	this.sayAge=function(){
//		console.log('im '+this.age+" old");
//	};
//}
//
//var p1=new Person('Nag', 32);
//var p2=new Person('Ria', 1);





//----------------------------------------------

/**
 * 
 *  in .js-lan , we can invoke in 4 ways
 *  
 *  
 *  1. function invocation ( this ==> global-obj )
 *  2. method invocation   ( this ==> invoker-obj )
 *  3. constructor invocation ( this ==> new-obj )
 *  4. call/apply/bind invocation ( this ==> arg-obj )
 *  
 * 
 */









