
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
	


var clicked = false, clickY;
	$(document).on({
		'mousemove': function(e) {
			clicked && updateScrollPos(e);
		},
		'mousedown': function(e) {
			clicked = true;
			clickY = e.pageY;
		},
		'mouseup': function() {
			clicked = false;
			$('html').css('cursor', 'auto');
		}
	});

var updateScrollPos = function(e) {
	$('html').css('cursor', 'row-resize');
	$(window).scrollTop($(window).scrollTop() + (clickY - e.pageY));
}
