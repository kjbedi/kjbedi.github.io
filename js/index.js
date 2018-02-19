//on resize
$( window ).resize(function() {
	$("#step1").center();
});

//on ready
$(document).ready(function(){
    $("#step1").fadeIn(3000);
    $("#step1").center();
	$(".main").delay(3000).fadeIn();
	$("#step1").fadeOut();
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

