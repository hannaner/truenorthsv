
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});


$(window).on("load",function() {
  $(window).scroll(function() {
    $(".fade").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      var windowBottom = $(window).scrollTop() + $(window).innerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(600,1);}
      } 
    });
  }); $(window).scroll(); //invoke scroll-handler on page-load
});
	
$(document).ready(function(){
  $('.carousel').carousel({
    interval: 4000
  })
});    



jQuery(function($){
  
  	// Prevent Google Maps from hijacking scroll
	var onMapMouseleaveHandler = function (event) {
		var that = $(this);
		that.on('click', onMapClickHandler);
		that.off('mouseleave', onMapMouseleaveHandler);
		that.find('iframe').css("pointer-events", "none");
	}

	var onMapClickHandler = function (event) {
		var that = $(this);
		// Disable the click handler until the user leaves the map area
		that.off('click', onMapClickHandler);
		// Enable scrolling zoom
		that.find('iframe').css("pointer-events", "auto");
		// Handle the mouse leave event
		that.on('mouseleave', onMapMouseleaveHandler);
	}

	// Enable map zooming with mouse scroll when the user clicks the map
	$('.map-responsive').on('click', onMapClickHandler);

});