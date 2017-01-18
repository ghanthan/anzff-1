/**
 * http://usejsdoc.org/
 */
function sessionStart(){
	function Trainer(name){
		this.name=name;
		this.doTeach=function(sub){
			console.log(this.name+" teaching "+sub);
			var self=this;
			function doLearn(){
				console.log(this.name+" learning "+sub+" from "+self.name);
			}
			return doLearn;
		};
	}
	function Employee(name){
		this.name=name;
	}
	var e1=new Employee('emp1'); // constructor invocation
	var e2=new Employee('emp2');
	var tnr=new Trainer('Nag'); // constructor-invocation
	var learnFunc=tnr.doTeach('.js'); // method-invocation
	learnFunc.call(e1); // call/apply/bind invocationÏ
	learnFunc.call(e2);
	
	var javaLearnFunc=tnr.doTeach("java");
	
}
sessionStart(); // function invocation ( this ==> global-obj)