jQuery(document).ready(function (jQuery) {
	if (jQuery.cookie("accessibilitycookie") == "on") {
		CecutientOn();
		if (jQuery.cookie("fonts") == "small") {
			SmallFonts();
		}
		if (jQuery.cookie("fonts") == "medium") {
			MediumFonts();
		}
		if (jQuery.cookie("fonts") == "big") {
			BigFonts();
		}
		if (jQuery.cookie("image") == "on") {
			ImageOn();
		}
		if (jQuery.cookie("image") == "off") {
			ImageOff();
		}
		if (jQuery.cookie("image") == "grscale") {
			GrScale();
		}
		if (jQuery.cookie("image") == "grcolor") {
			GrColor();
		}
		if (jQuery.cookie("style") == "white") {
			WhiteStyle();
		}
		if (jQuery.cookie("style") == "black") {
			BlackStyle();
		}
		if (jQuery.cookie("style") == "blue") {
			BlueStyle();
		}
		if (jQuery.cookie("style") == "green") {
			GreenStyle();
		}
		if (jQuery.cookie("volume") == "on") {
			VolumeOn();
		}
		if (jQuery.cookie("volume") == "off") {
			VolumeOff();
		}
		
		
		if (jQuery.cookie("kerning") == "sk") {
			SKerning();
		}
		if (jQuery.cookie("kerning") == "mk") {
			MKerning();
		}
		if (jQuery.cookie("kerning") == "bk") {
			BKerning();
		}
		if (jQuery.cookie("string") == "sl") {
			SLine();
		}
		if (jQuery.cookie("string") == "ml") {
			MLine();
		}
		if (jQuery.cookie("string") == "bl") {
			BLine();
		}
		
	}
	/*Включение стилей для слабовидящих*/
	jQuery('#accessibility-btn').click(function () {
		CecutientOn();
	});
	/*Включение выключение изображений*/
	jQuery('#accessibility-ioff').click(function () {
		ImageOn();
	});
	jQuery('#accessibility-ion').click(function () {
		ImageOff();
	});
	/*Звук*/
	jQuery('#accessibility-volumeoff').click(function () {
		VolumeOn();
	});
	jQuery('#accessibility-volumeon').click(function () {
		VolumeOff();
	});
	/*Размер шрифта*/
	jQuery('#accessibility-sf').click(function () {
		SmallFonts();
	});
	jQuery('#accessibility-mf').click(function () {
		MediumFonts();
	});
	jQuery('#accessibility-bf').click(function () {
		BigFonts();
	});
	jQuery('#accessibility-gs').click(function () {
		BigFonts();
	});
	/*Цветовая схема*/
	jQuery('#accessibility-wbg').click(function () {
		WhiteStyle();
	});
	jQuery('#accessibility-bbg').click(function () {
		BlackStyle();
	});
	jQuery('#accessibility-blbg').click(function () {
		BlueStyle();
	});
	jQuery('#accessibility-green').click(function () {
		GreenStyle();
	});
	
	jQuery('#accessibility-grs').click(function () {
		GrScale();
	});
	jQuery('#accessibility-grcolor').click(function () {
		GrColor();
	});
	jQuery('.krn-s').click(function () {
		SKerning();
	});
	jQuery('.krn-m').click(function () {
		MKerning();
	});
	jQuery('.krn-b').click(function () {
		BKerning();
	});
	jQuery('.line-s').click(function () {
		SLine();
	});
	jQuery('.line-m').click(function () {
		MLine();
	});
	jQuery('.line-b').click(function () {
		BLine();
	});


	function CecutientOn() {
		jQuery('#accessibility-btnoff').css("display", "inline-block");
		jQuery('#accessibility-btn').css("display", "none");
		
		jQuery("#page").addClass("accessibility default smallfonts");
		
 
		
		jQuery.cookie("accessibilitycookie", "on", {
			expires: 365,
			path: '/'
		});
		return false;
	}

function BlackStyle() {
        if (jQuery.cookie("accessibilitycookie") == "on") {
            jQuery("#page").addClass("blackcolor");
			jQuery("#page").removeClass("default bluecolor greencolor");
			
            jQuery.cookie("style", "black", {
                expires: 365,
                path: '/'
            });
            return false;
        }
    }
	
	function BlueStyle() {
        if (jQuery.cookie("accessibilitycookie") == "on") {
            jQuery("#page").addClass("bluecolor");
			jQuery("#page").removeClass("default blackcolor greencolor");
			
            jQuery.cookie("style", "blue", {
                expires: 365,
                path: '/'
            });
            return false;
        }
    }
	
	

    function WhiteStyle() {
        if (jQuery.cookie("accessibilitycookie") == "on") {
            jQuery("#page").addClass("default");
			jQuery("#page").removeClass("blackcolor bluecolor greencolor");
			
            jQuery.cookie("style", "white", {
                expires: 365,
                path: '/'
            });
            return false;
        }
    }
	function GreenStyle() {
        if (jQuery.cookie("accessibilitycookie") == "on") {
            jQuery("#page").addClass("greencolor");
			jQuery("#page").removeClass("default blackcolor bluecolor");
			
            jQuery.cookie("style", "green", {
                expires: 365,
                path: '/'
            });
            return false;
        }
    }
	
	/*Функции обработчик отображения изображений*/
    function ImageOn() {
        if (jQuery.cookie("accessibilitycookie") == "on") {
            
            jQuery('#accessibility-ioff').css("display", "none");
            jQuery('#accessibility-ion').css("display", "inline-block");
			
			jQuery("img").addClass("imagesoff");
			jQuery("img").removeClass("imageson");
			/*jQuery("img.imageson").attr("src", "");*/
			
			 
            
			jQuery.cookie("image", "on", {
                expires: 365,
                path: '/'
            });
            return false;
        }
    }

   function ImageOff() {
        if (jQuery.cookie("accessibilitycookie") == "on") {
            
            jQuery('#accessibility-ion').css("display", "none");
            jQuery('#accessibility-ioff').css("display", "inline-block");
			
			/*jQuery("img").attr("src", "");*/
			jQuery("img").addClass("imageson");
		jQuery("img").removeClass("imagesoff");
			
           jQuery('.post_block').removeClass("imageson");
           
			jQuery.cookie("image", "off", {
                expires: 365,
                path: '/'
            });
            return false;
        }
    }
	
	function GrScale() {
        if (jQuery.cookie("accessibilitycookie") == "on") {
			jQuery('#accessibility-grs').css("display", "none");
			jQuery('#accessibility-grcolor').css("display", "inline-block");
			
            jQuery('img').css({
            "filter": "grayscale(1)"

        });
            
			jQuery.cookie("image", "grscale", {
                expires: 365,
                path: '/'
            });
            return false;
        }
    }
	function GrColor() {
        if (jQuery.cookie("accessibilitycookie") == "on") {
           jQuery('#accessibility-grs').css("display", "inline-block");
			jQuery('#accessibility-grcolor').css("display", "none"); 
            jQuery('img').css({
            "filter": "grayscale(0)"

        });
            
			jQuery.cookie("image", "grcolor", {
                expires: 365,
                path: '/'
            });
            return false;
        }
    }
	/*Размер текста*/
	function SmallFonts() {
        if (jQuery.cookie("accessibilitycookie") == "on") {
          
            jQuery('#page').removeClass("mediumfonts bigfonts").addClass("smallfonts");
			
			jQuery.cookie("fonts", "small", {
                expires: 365,
                path: '/'
            });
            return false;
        }
    }
	function MediumFonts() {
        if (jQuery.cookie("accessibilitycookie") == "on") {
          
            jQuery('#page').removeClass("smallfonts bigfonts").addClass("mediumfonts");
			
			jQuery.cookie("fonts", "medium", {
                expires: 365,
                path: '/'
            });
            return false;
        }
    }
	function BigFonts() {
        if (jQuery.cookie("accessibilitycookie") == "on") {
            jQuery('#page').removeClass("smallfonts mediumfonts").addClass("bigfonts");
			jQuery.cookie("fonts", "big", {
                expires: 365,
                path: '/'
            });
            return false;
        }
    }
	
	/*Функция озвучивания текста на сайте*/
	function VolumeOn() {
		jQuery('#accessibility-volumeon').css("display", "inline-block");
		jQuery('#accessibility-volumeoff').css("display", "none");
		
		jQuery("#content, #header, #section-menu").addClass("ugost-voice");
		
 
		
		jQuery.cookie("volume", "on", {
			expires: 365,
			path: '/'
		});
		return false;
	}
	function VolumeOff() {
		jQuery('#accessibility-volumeoff').css("display", "inline-block");
		jQuery('#accessibility-volumeon').css("display", "none");
		jQuery("#content, #header, #section-menu").removeClass("ugost-voice");
		jQuery.cookie("volume", "off", {
			expires: 365,
			path: '/'
		});
		return false;
	}
	function SKerning(){
		jQuery("#page").addClass("skerning");
		jQuery("#page").removeClass("mkerning bkerning");
		jQuery.cookie("kerning", "sk", {
			expires: 365,
			path: '/'
		});
		return false;
	}
	function MKerning(){
		jQuery("#page").addClass("mkerning");
		jQuery("#page").removeClass("skerning bkerning");
		jQuery.cookie("kerning", "mk", {
			expires: 365,
			path: '/'
		});
		return false;
	}
	function BKerning(){
		jQuery("#page").addClass("bkerning");
		jQuery("#page").removeClass("mkerning skerning");
		jQuery.cookie("kerning", "bk", {
			expires: 365,
			path: '/'
		});
		return false;
	}
	/*Интервал*/
	function SLine(){
		jQuery("#page").addClass("s-line");
		jQuery("#page").removeClass("m-line b-line");
		
		jQuery.cookie("string", "sl", {
			expires: 365,
			path: '/'
		});
		return false;
		
	}
	function MLine(){
		jQuery("#page").addClass("m-line");
		jQuery("#page").removeClass("s-line b-line");
		jQuery.cookie("string", "ml", {
			expires: 365,
			path: '/'
		});
		return false;
		
		
	}
	function BLine(){
		jQuery("#page").addClass("b-line");
		jQuery("#page").removeClass("m-line s-line");
		jQuery.cookie("string", "bl", {
			expires: 365,
			path: '/'
		});
		return false;
		
	}
	/*Отключение версии для слабовидящих*/
	jQuery('#accessibility-btnoff').click(function () {
		jQuery.cookie('accessibilitycookie', null, {
			expires: -365,
			path: '/'
		});
		jQuery.cookie("style", null, {
			expires: -365,
			path: '/'
		});
		jQuery.cookie("image", null, {
			expires: -365,
			path: '/'
		});
		jQuery.cookie("fonts", null, {
			expires: -365,
			path: '/'
		});

		window.location.reload();
		return false;

	});
});

