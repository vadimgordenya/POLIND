$(window).on('load', function() {
    var $preloader = $(".loader__wrapp");
    $preloader.delay(2000).fadeOut('slow');
}); 
$(document).ready(function(){
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
