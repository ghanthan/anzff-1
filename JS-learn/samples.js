/**
 * http://usejsdoc.org/
 */


// #1

function foo(b) {
  var a = 10;
  return a + b + 11;
}

function bar(x) {
  var y = 3;
  return foo(x * y);
}

console.log(bar(7));

//#2

function foo(){
	
}

function bar(){
	foo();
}

function baz(){
	bar();
}

baz();



//#3

function foo(){
	throw new Error('oops');
}

function bar(){
	foo();
}

function baz(){
	bar();
}

baz();


//# 4

//function foo(){
//	foo();
//}
//foo();

// #5


function big(){
	var i=0;
	while(i<5){
		console.log('im big..');
		i++;
	}
}

function small(){
	console.log('im quick');
}

big();
small();


//#6


//<button class="odd">button-1</button>
//<button class="even">button-2</button>

console.log('start..');

//
$.on('.odd','click',function handler1(){
	console.log('click event handled on .odd eleemnts');
});
$.on('.even','click',function handler2(){
	console.log('click event handled on .event eleemnts');
});

console.log('continue with other work....');
var i=0;
while(i<10){
	console.log('break..');
	i++;
}






















