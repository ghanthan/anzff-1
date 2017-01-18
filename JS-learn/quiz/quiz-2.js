/**
 * http://usejsdoc.org/
 */


var trainer={
		name:'Nag',
		doTeach:function(){
			
			console.log(this.name+" teaching .js");
			var self=this;
			function doLearn(){
				//console.log(this.name +' learning .js from '+ trainer.name); // will break if reference chang
				console.log(this.name +' learning .js from '+ self.name);
			}
			
			//doLearn();
			
			var emp={name:'EMP'};
			doLearn.call(emp);
		}
};


trainer.doTeach();

var newTnr={name:'Ria'};
trainer.doTeach.call(newTnr);

//var t=trainer;
//trainer=newTnr;
//t.doTeach();



