/**
 * http://usejsdoc.org/
 */


var trainer={
		name:'Nag',
		doTeach(sub){
			var notes=sub+"-notes";
			var self=this;
			function doLearn(){
//				var msg="learning "+sub+" with "+notes+" from "+self.name;
//				var msg=`learning ${sub} with ${notes} from ${self.name}`;
//				var htmlTemplate="<div>" +
//						"<ul>" +
//						"<li>" +
//							self.name+
//						"</li>" +
//						"</ul>" +
//						"</div>";
				
				var htmlTemplate=`
					<div>
						<ul>
							<li>${self.name}</li>
						</ul>
					</div>
				`;
				console.log(htmlTemplate);
			}
			return doLearn;
		}
};

trainer.doTeach(".js")();