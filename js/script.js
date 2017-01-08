$(document).ready(function(){
        	$(".loader__wrapp").css("display", "none");
    	

	$(".tab__first").click(function(){
		$(".first").css("display","inline-block");
		$(".second").css("display","none");
		$(".last").css("display","none");
	});
	$(".tab__second").click(function(){
		$(".first").css("display","none");
		$(".second").css("display","inline-block");
		$(".last").css("display","none");
	});
	$(".tab__last").click(function(){
		$(".first").css("display","none");
		$(".second").css("display","none");
		$(".last").css("display","inline-block");
	});

});
