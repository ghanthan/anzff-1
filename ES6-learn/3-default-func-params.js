/**
 * http://usejsdoc.org/
 */


function func(a=0,b=10){
	
	//	if(!a){
	//		a=0;
	//	}
	//	if(!b){
	//		b=10;
	//	}
	
	//	a=a||0;
	//	b=b||10;
	
	
	console.log(a);
	console.log(b);
}

func();
func(1);
func(undefined,100);
func(10,100);