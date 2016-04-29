
$(document).ready(function() {
	console.log('i work')

	var r1s1 = $("#r1s1");
	var r1s6 = $("#r1s6");
	var red = $("#redbox");

	r1s1.on("click", function(){
		r1s6.html(red);
	});


});

