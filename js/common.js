
  // slider
  $('#da-slider').cslider({
	autoplay    : true,
	 interval    : 8000
  });

  // lightbox gallery
  $(".gallery:first a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'light_square',slideshow:3000, autoplay_slideshow: true});

  // social sharing
  $('#shareme').sharrre({
	  share: {
		googlePlus: true,
        twitter: true,
        facebook: false,
		pinterest: false
	  },
	  buttons: {
		googlePlus: {size: 'tall'},
		twitter: {count: 'vertical'}
	  },
	  enableHover: true,
	  enableCounter: true,
	  enableTracking: true
	});
