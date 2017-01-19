/**
 * http://usejsdoc.org/
 */


console.log('main.js');


require(null,['js/a','js/b'],function(amod,bmod){
	
	amod.doWork();
	
});