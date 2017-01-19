/**
 * http://usejsdoc.org/
 */

(function() {

	var i=0;
	
	var o = {
		doWork : function() {
			console.log('im A');
		}
	};
	
	myApp.b.doWork();
	myApp.c.doWork();
	
	myApp.a=o; // export / abstract
	
	

})();