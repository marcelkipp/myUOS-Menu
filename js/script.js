jQuery(function() {
	jQuery("#sliderstudiumtrigger, #sliderstudium").hover(function(){
      jQuery("#sliderstudium").toggleClass("slideron-studium");
    });
    jQuery("#sliderdienstleistungtrigger, #sliderdienstleistung").hover(function(){
      jQuery("#sliderdienstleistung").toggleClass("slideron-dienstleistung");
    });
    jQuery("#sliderstudium").hover(function(){
      jQuery('#sliderstudiumtrigger').toggleClass("slideroff-slider-hovermenu");
    });
    jQuery("#sliderdienstleistung").hover(function(){
      jQuery("#sliderdienstleistungtrigger").toggleClass("slideroff-slider-hovermenu");
    });
});

function slideron() {
	$("#slider").toggleClass("slideron-slider");
	$("#overlay").toggleClass("black-overlay-on");
	$("overlay").toggleClass("black-overlay-on");
}