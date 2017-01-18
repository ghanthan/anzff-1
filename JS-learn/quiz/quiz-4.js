

function Person(n,a){
	this.name=n;
	this.age=a;
	
	var self=this;
	
	function incAge(){
		self.age++;
		console.log(self.name+"=>"+self.age);
	}
	
	setInterval(incAge,1000);
	
}


var p=new Person("Ria", 0);