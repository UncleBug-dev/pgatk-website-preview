/*Menu*/
jQuery(document).ready(function () {
jQuery('.top-menu .parent > a').click(function () {
	jQuery('.top-menu .parent ul').slideUp();
	if (jQuery(this).next().is(":visible")) {
		jQuery(this).next().slideUp();
	} else {
		jQuery(this).next().slideToggle();
	}
	return false;
	});
	jQuery('.top-menu > li > a').click(function(){
	   jQuery('.top-menu > li > a, .parent a').removeClass('activ');
	   jQuery(this).addClass('activ');
	}),
       jQuery('.parent ul li a').click(function(){
	   jQuery('.parent ul li a').removeClass('activ');
	   jQuery(this).addClass('activ');
	});
      
	});



jQuery(document).ready(function () {
jQuery('.sidebar .nav-menu .parent > a').click(function () {
	jQuery('.sidebar .nav-menu .parent  ul').slideUp();
	if (jQuery(this).next().is(":visible")) {
		jQuery(this).next().slideUp();
	} else {
		jQuery(this).next().slideToggle();
	}
	return false;
	});
	jQuery('.sidebar .nav-menu > li > a').click(function(){
	   jQuery('.sidebar .nav-menu > li > a, .parent a').removeClass('activ');
	   jQuery(this).addClass('activ');
	}),
       jQuery('.parent ul li a').click(function(){
	   jQuery('.parent ul li a').removeClass('activ');
	   jQuery(this).addClass('activ');
});

});

/*subcat*/
jQuery(function () {
    jQuery('.category-open').on('click', function () {
        jQuery('.subcatopen').slideToggle();

    });

});
jQuery(function () {
    jQuery('#accessibility-setting').on('click', function () {
        jQuery('#setting-panel').slideToggle();

    });

});


