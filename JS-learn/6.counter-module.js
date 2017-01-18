/**
 * http://usejsdoc.org/
 */



var counter=(function(){
	
	// private
	var count=0;
	
	// public ( closure )
	function doCount(){
		count++;
	}
	function getCount(){
		return count;
	}
	
	return {
		doCount:doCount,
		getCount:getCount
	};
	
})();

//var counter=init();



