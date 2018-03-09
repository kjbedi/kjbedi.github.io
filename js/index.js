//on resize
$( window ).resize(function() {
	$("#step1").center();
	$(".spinner").center();
	// $(".roulette").center();
	$("#info").verticalcenter();
});

//on ready
$(document).ready(function(){
	
    $("#step1").fadeIn(3000);
    $("#step1").center();
	$("#step1").fadeOut(3000);
	$("#step2").center();
	$("#step2").delay(6000).fadeIn(3000);
	$("#step2").fadeOut(3000);
	$(".main").delay(12000).fadeIn(3000);
 setTimeout(
    function() {
      $("#r").delay(12000).css("opacity","1");
    }, 12000);
	// $(".roulette").css("left","0");
	// $(".roulette").css("right","0");

	// 
	$(".spinner").center();
	// $(".roulette").center();
	$("#info").verticalcenter();
});

//custom
jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + 
                                                $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + 
                                                $(window).scrollLeft()) + "px");
    return this;
}

jQuery.fn.verticalcenter = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + 
                                                $(window).scrollTop()) + "px");
    return this;
}



