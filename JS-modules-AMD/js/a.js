/**
 * http://usejsdoc.org/
 */


define('js/a',['js/b','js/c'],function(bmod,cmod){
	

	var i=0;
	
	bmod.doWork();
	cmod.doWork();
	
	var o = {
		doWork : function() {
			console.log('im A');
		}
	};
	
	return o;
	
	
});