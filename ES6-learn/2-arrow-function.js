/**
 * http://usejsdoc.org/
 */


/**
 * 
 *  arrow function
 *  
 *  
 *  -->  in which context they created , 
 *       with that context-owner only they execute any-where
 *       
 *  -->  are not bindable with any other objects.
 *  
 *       
 *  
 *  
 *  
 * 
 * 
 */

//"use strict"

// var getPrice=function(){return 100;};

// let getPrice=()=>100;

// let getPrice=(price)=>price;

// let getPrice=(price)=>price*10;

// let getPrice=(price,tax)=>price*tax;

// let getPrice=(price,tax)=>{var i=10;return price*tax+i};

// ------------------------------------------

var trainer = {
	name : 'Nag',
	doTeach : function() {
		console.log('teach start...');

		//var self = this;

//		function answerQues(ques) {
//			console.log(this);
//			console.log(this.name+ ' answering question-'+ques);
//		}

		var answerQues=(ques)=>{console.log(this.name+" answering question -"+ques)};

		console.log('teach ends...can ask ques with returned func..');
		
		return answerQues;
	}
};

var answerQuesFunc = trainer.doTeach();
//answerQuesFunc('what is arrow func?');


var newTrainer={name:'Ria'};
var e1 = {
	name : 'E1',
	work : function() {
		console.log(this.name + " learning...got ques");
		answerQuesFunc('what is arrow func?');
	}
};

e1.work();
