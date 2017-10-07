
(function($) {
	$WIN = $(window);
	var doc = document.documentElement;
	doc.setAttribute('data-useragent', navigator.userAgent);
	var ssPreloader = function() {

		$WIN.on('load', function() {

			// force page scroll position to top at page refresh
			// $('html, body').animate({ scrollTop: 0 }, 'normal');

	      // will first fade out the loading animation
	    	$("#loader").fadeOut("slow", function(){

	        // will fade out the whole DIV that covers the website.
	        $("#preloader").delay(300).fadeOut("slow");

	      });
	  	});
	};

   var triggerMenu = function() {

	       var menuTrigger = $('#header-menu-trigger'),
	       nav             = $('#menu-nav-wrap'),
	       closeButton     = nav.find('.close-button'),
	       siteBody        = $('body'),
	       mainContents    = $('section, footer');

		// open-close menu by clicking on the menu icon
		menuTrigger.on('click', function(e){
			e.preventDefault();
			menuTrigger.toggleClass('is-clicked');
			siteBody.toggleClass('menu-is-open');
		});

		// close menu by clicking the close button
		closeButton.on('click', function(e){
			e.preventDefault();
			menuTrigger.trigger('click');
		});

		// close menu clicking outside the menu itself
		siteBody.on('click', function(e){
			if( !$(e.target).is('#menu-nav-wrap, #header-menu-trigger, #header-menu-trigger span') ) {
				menuTrigger.removeClass('is-clicked');
				siteBody.removeClass('menu-is-open');
			}
		});

   };

	(function ssInit() {
		ssPreloader();
		triggerMenu();
	})();

})(jQuery);

setTimeout(function () {
   document.getElementById("myVideo").play();
});

$('document').ready(function () {
    $('div.demo').simpleSkillbar({});
});

filterSelection("All");
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("pro-elem");
    if(c === "All") c = "";
    for(i = 0; i< x.length; i++){
       aRemoveClass(x[i], "show");
       if(x[i].className.indexOf(c) > -1) aAddClass(x[i], "show");
    }
}
function aAddClass(element, name) {
   var i, arr1, arr2;
   arr1 = element.className.split(" ");
   arr2 = name.split(" ");
   for(i = 0; i<arr2.length; i++){
       if (arr1.indexOf(arr2[i])=== -1){
           element.className += " " + arr2[i];
       }
   }
}
function aRemoveClass(element, name){
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for(i = 0; i< arr2.length; i++){
        while(arr1.indexOf(arr2[i]) > -1){
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

$(document).ready(function () {
   $(".portfolio-menu li").on("click", function (event) {
       $(this).siblings(".active").removeClass("active");
       $(this).addClass("active");
       event.preventDefault()
   });
});
$(document).ready(function () {
   $(window).scroll(function () {
      if($(this).scrollTop() > 100){
          $('.scroll-top').fadeIn();
      }else {
          $('.scroll-top').fadeOut();
      }
   });
   $('.scroll-top').click(function () {
      $("html, body").animate({
         scrollTop:0
      },600);
      return false;
   });
});

//smooth scrolling

$(document).ready(function(){
    $('ul.nav-list li a').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
            && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target
                || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body')
                    .animate({scrollTop: targetOffset}, 1000);
                return false;
            }
        }
    });
});

//map

//     var map;
//     function initialize() {
//     var mapOptions = {
//          // center: new google.maps.LatLng(40.5472,12.282715),
//         // zoom: 12,
//         mapTypeId: google.maps.MapTypeId.ROADMAP
//     };
//     map = new google.maps.Map(document.getElementById("map"),
//         mapOptions);
// }
//     google.maps.event.addDomListener(window, 'load', initialize);
//
//     google.maps.event.addDomListener(window, "resize", function() {
//     var center = map.getCenter();
//     google.maps.event.trigger(map, "resize");
//     map.setCenter(center);
// });



$(window).scroll(function(){
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});













