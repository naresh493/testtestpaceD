jQuery.noConflict();
jQuery(document).ready(function($){	
  document.getElementById("contact-form").reset();
  document.getElementById("singup-form").reset();
  $("p").removeClass("error");
  $("input").removeClass("error");
	//STICKY MENU...
	$(".dt-sticky-menu").sticky({ topSpacing: 0 });

	//ONE PAGE NAV...
	$('#main-menu').onePageNav({
		currentClass : 'current_page_item',
		filter		 : ':not(.external)',
		scrollSpeed  : 750,
		scrollOffset : 87,
		scrollChange : fixMagicline
	});
	
	//MINI MOBILE MENU...
    $('nav#main-menu').meanmenu({
        meanMenuContainer: $('header .menu-main-menu-container'),
        meanRevealPosition: 'left',
        meanScreenWidth: 767,
        meanMenuClose: "<span/><span/><span/>",
		onePage: true
    });
	
	//SCROLL TO...	
	$('#scrolldown a').click(function(){
		   $.scrollTo('#home', 1400, { offset: { top: -147 }});
		   return false;
   });
   
   	/*To Top*/
  	$().UItoTop({ easingType: 'easeOutQuart' });
	
	//TABS...
	if($('ul.tabs-frame').length > 0) {
		$('ul.tabs-frame').tabs('> .tabs-frame-content', { effect: 'slide' });
	}
	
	if($('.team-tab ul.tabs-frame').length > 0) {
		$('ul.tabs-frame').tabs('> .tabs-frame-content', { effect: 'fade' });
	}
  
  	$('div.pic').click(function(){ 
		$.scrollTo('#team', 750);
	});
  
	//TOGGLES...
	$('.dt-sc-toggle').toggle(function(){ $(this).addClass('active'); },function(){ $(this).removeClass('active'); });
	$('.dt-sc-toggle').click(function(){ $(this).next('.dt-sc-toggle-content').slideToggle(); });
	$('.dt-sc-toggle-frame-set').each(function(){
	  var $this = $(this),
		  $toggle = $this.find('.dt-sc-toggle-accordion');
	  
	  $toggle.click(function(){
		if( jQuery(this).next().is(':hidden') ) {
		  $this.find('.dt-sc-toggle-accordion').removeClass('active').next().slideUp();
		  $(this).toggleClass('active').next().slideDown();
		}
		return false;
	  });
	  
	  $this.find('.dt-sc-toggle-accordion:first').addClass("active");
	  $this.find('.dt-sc-toggle-accordion:first').next().slideDown();
	});
	
	//Load After Window Loads...
	$(window).load( function() {
		my_smartresize_function();
		$('#preloader').fadeOut('slow',function(){$(this).remove();});
	});
	
	$(window).smartresize(function(){
		my_smartresize_function();
	});
	
	// funy text
	
	$('#home .sub-title h2').funnyText({
        speed: 500,
        color: '#323232',
        borderColor: 'none'
    });
	
	$('#services .main-title h2').funnyText({
        speed: 500,
        color: '#323232',
        borderColor: 'none'
    });
	$('#solutions .main-title h2').funnyText({
        speed: 500,
        color: '#323232',
        borderColor: 'none'
    });
	$('#products .main-title h2').funnyText({
        speed: 500,
        color: '#323232',
        borderColor: 'none'
    });
    $('#team .main-title h2').funnyText({
        speed: 500,
        color: '#323232',
        borderColor: 'none'
    });
    $('#portfolio .main-title h2').funnyText({
        speed: 500,
        color: '#323232',
        borderColor: 'none'
    });
    $('#blog .main-title h2').funnyText({
        speed: 500,
        color: '#323232',
        borderColor: 'none'
    });
    $('#contact .main-title h2').funnyText({
        speed: 500,
        color: '#323232',
        borderColor: 'none'
    });
	$('#freetrial .main-title h2').funnyText({
        speed: 500,
        color: '#323232',
        borderColor: 'none'
    });
	
	$('#ecommerce-testing .main-title h2').funnyText({
        speed: 500,
        color: '#323232',
        borderColor: 'none'
    });
	
	$('#resources .main-title h2').funnyText({
        speed: 500,
        color: '#323232',
        borderColor: 'none'
    });
	
	$('#partners .main-title h2').funnyText({
        speed: 500,
        color: '#323232',
        borderColor: 'none'
    });
	
	$('#testimonial .main-title h2').funnyText({
        speed: 500,
        color: '#323232',
        borderColor: 'none'
    });
	
	$('#page-title h1').funnyText({
        speed: 500,
        color: '#323232',
        borderColor: 'none',
		activeColor: '#ffffff'
    });
	
	
	
	
	/*wow animation*/
	new WOW().init();
    
	//Twitter Tweets...
	if($('.tweets_container').length > 0) {	
		$(".tweets_container").tweet({
			modpath: 'js/twitter/',
			username: "envato",
			count: 3,
			loading_text: "loading tweets...",
			template: "{text} {time}"
		});
	}

	//Tweets CarouFred...
	if($('.tweets_container').length > 0) {
		$('.tweets_container .tweet_list').carouFredSel({
			width: 'auto',
			height: 'auto',
			scroll: 1,
			direction: 'up',
			items: {
				height: 'auto',
				visible: {
					min: 1,
					max: 1
				}
			}
		});
		$('#panel').hide();
	}

	if($("#testimonial-list").length) {
		$('#testimonial-list').carouFredSel({
			responsive: true,
			auto: true,
			width: 'auto',
			height: 'auto',
			prev: '.prev',
			next: '.next',
			scroll: {
				fx: "fade",
				duration: 1000,
				pauseOnHover : true,
			},
			items: {
				height: 'auto',
				visible: {
					min: 1,
					max: 1
				}
			}
		});
	}
	
	//PRETTYPHOTO...
	var $pphoto = $('a[data-gal^="prettyPhoto[gallery]"]');
	if($pphoto.length){
		$("a[data-gal^='prettyPhoto[gallery]']").prettyPhoto({ 
			hook:'data-gal',
			overlay_gallery: false, 
			social_tools: false,
			deeplinking: false
		});
	}
	
	//PARALLAX SECTIONS...
	$('.parallax').each(function(){
		$(this).bind('inview', function (event, visible) {
			if(visible == true) {
				if($.browser.safari) {
					$(this).parallax("50%", -0.3);
				} else {
					$(this).parallax("50%", 0.3);
				}
			} else {
				$(this).css('background-position','');
			}
		});
	});

	//Progress Bar...
	$('.dt-custom-progress').click(function(){	
		$('.dt-sc-progress').each(function(){
			var progressBar = $(this),
				progressValue = progressBar.find('.dt-sc-bar').attr('data-value');
					 
				if (!progressBar.hasClass('animated')) {
					progressBar.addClass('animated');
					progressBar.find('.dt-sc-bar').animate({width: progressValue + "%"},600,function(){ progressBar.find('.dt-sc-bar-text').fadeIn(400); });
				}
		});		
	});
	
	//NEWSLETTER AJAX SUBMIT...
	$('form[name="frmnewsletter"]').submit(function () {
		
		var This = $(this);
		
		if($(This).valid()) {
			var action = $(This).attr('action');

			var data_value = unescape($(This).serialize());
			$.ajax({
				 type: "POST",
				 url:action,
				 data: data_value,
				 error: function (xhr, status, error) {
					 confirm('The page save failed.');
				   },
				  success: function (response) {
					$('#ajax_subscribe_msg').html(response);
					$('#ajax_subscribe_msg').slideDown('slow');
					if (response.match('success') != null) $(This).slideUp('slow');
				 }
			});
		}
		return false;
    });
	
	$('form[name="frmnewsletter"], form[name="commentform"], form[name="frmsearch"]').each(function(){
		$(this).validate({
			errorPlacement: function(error, element) {
				$(element).parent('p').addClass('error');
			},
			
			unhighlight: function(element){
				$(element).parent('p').removeClass('error');
			}
		});
	});
	
	$('form[name="commentform"]').submit(function () {
		return false;
	});
	
	//Tooltip
	 if($(".dt-sc-tooltip-bottom").length){
		$(".dt-sc-tooltip-bottom").each(function(){	$(this).tipTip({maxWidth: "auto"}); });
	 }
	  
	 if($(".dt-sc-tooltip-top").length){
		$(".dt-sc-tooltip-top").each(function(){ $(this).tipTip({maxWidth: "auto",defaultPosition: "top"}); });
	 }
	  
	 if($(".dt-sc-tooltip-left").length){
		$(".dt-sc-tooltip-left").each(function(){ $(this).tipTip({maxWidth: "auto",defaultPosition: "left"}); });
	 }
	  
	 if($(".dt-sc-tooltip-right").length){
		$(".dt-sc-tooltip-right").each(function(){ $(this).tipTip({maxWidth: "auto",defaultPosition: "right"}); });
	 }
	
	//CONTACT BOX VALIDATION & MAIL SENDING....
	$('form[name="frmcontact"]').validate({
		errorPlacement: function(error, element) {
			$(element).parent('p').addClass('error');
		},
		
		unhighlight: function(element){
			$(element).parent('p').removeClass('error');
        }
	});
	
	/* form submit */
	function ajaxLoaderStartMailRequest(text)
	{
	  if (jQuery('body').find('#resultLoading').attr('id') != 'resultLoading') {
		jQuery('body').append('<div id="resultLoading" style="display:none"><div><img src="images/ajaxloader.gif"><div>' + text + '</div></div><div class="bg"></div></div>');
	  }

	  jQuery('#resultLoading').css({
		'width': '100%',
		'height': '100%',
		'position': 'fixed',
		'z-index': '10000000',
		'top': '0', 'left': '0',
		'right': '0',
		'bottom': '0',
		'margin': 'auto'
	  });
	  jQuery('#resultLoading .bg').css({
		'background': '#000000',
		'opacity': '0.7',
		'width': '100%',
		'height': '100%',
		'position': 'absolute',
		'top': '0'
	  });
	  jQuery('#resultLoading>div:first').css({
		'width': '250px',
		'height': '250px',
		'text-align': 'center',
		'position': 'fixed',
		'top': '0', 'left': '0',
		'right': '0',
		'bottom': '0',
		'margin': 'auto',
		'font-size': '16px',
		'z-index': '10',
		'color': '#ffffff'

	  });
	  jQuery('#resultLoading .bg').height('100%');
	  jQuery('#resultLoading').fadeIn(300);
	  jQuery('body').css('cursor', 'wait');
	}
	function ajaxLoaderStopMailRequest()
	{
	  jQuery('#resultLoading .bg').height('100%');
	  jQuery('#resultLoading').fadeOut(300);
	  jQuery('body').css('cursor', 'default');
	}
 
	
	$('form[name="frmcontact"]').submit(function (e) {
		 e.preventDefault();
		 var This = $(this);
		 var nameRegex = /^[A-Za-z\s]{1,}[\.]{0,6}[A-Za-z\s]{3,100}$/;
		 var emailRegex =  /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-z]{2,3}$/;
		 var phoneNumberRegex = /^[0-9]{10,14}$/;
		 var data_value = unescape($(This).serialize());
		 var txtname = $('#txtname').val();
		 var txtphone = $('#txtphone').val();
		 var txtemail = $('#txtemail').val();
		 var txtmessage = $('#txtmessage').val();
		 $("#txtname").removeClass("error");
		 $("#txtphone").removeClass("error");
		 $("#txtemail").removeClass("error");
		 $("#txtmessage").removeClass("error");
		 if(txtname.trim()==''){
		   $("#txtname").addClass("error");
		   $("#txtname").parent().addClass("error");
		   alert('Please enter name');
		 }else if(nameRegex.test(txtname)==false){
		   $("#txtname").addClass("error");
		   $("#txtname").parent().addClass("error");
		   alert('Please enter valid name');
		 }else if(txtphone.trim()==''){
		   $("#txtphone").addClass("error");
		   $("#txtphone").parent().addClass("error");
		   alert('Please enter phone number');
		 }else if(phoneNumberRegex.test(txtphone)==false){
		   $("#txtphone").addClass("error");
		   $("#txtphone").parent().addClass("error");
		   alert('Please enter valid phone number');
		 }else if(txtemail.trim()==''){
		   $("#txtemail").addClass("error");
		   $("#txtemail").parent().addClass("error");
		   alert('Please enter email');
		 }else if(emailRegex.test(txtemail)==false){
		   $("#txtemail").addClass("error");
		   $("#txtemail").parent().addClass("error");
		   alert('Please enter valid email');
		 }else if(txtmessage.trim()==''){
		   $("#txtmessage").addClass("error");
		   $("#txtmessage").parent().addClass("error");
		   alert('Please enter message');
		 }else if(txtmessage.trim().length<5 || txtmessage.trim().length>500){
		   $("#txtmessage").addClass("error");
		   $("#txtmessage").parent().addClass("error");
		   alert('Please enter message must be between 5 to 500 characters');
		 }else{
			$.ajax({
				type: "POST",
				url:'php/send.php',
				data: data_value,
				 beforeSend: function() {
					ajaxLoaderStartMailRequest('Request Sending Please Wait..');
				},
				//error: function (xhr, status, error) {
				 //confirm('The page save failed.');
				//},
				success: function (response) {
				    ajaxLoaderStopMailRequest();
					$('#ajax_contact_msg').html(response);
					$('#ajax_contact_msg').slideDown('slow');
					if (response!=''){
						$(This).slideUp('slow');
					}
				}
			});
		 }
	});
	
	
	$('form[name="frmsingup"]').submit(function (e) {
		 e.preventDefault();
		 var This = $(this);
		 var nameRegex = /^[A-Za-z\s]{1,}[\.]{0,6}[A-Za-z\s]{3,100}$/;
		 var emailRegex =  /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-z]{2,3}$/;
		 var phoneNumberRegex = /^[0-9]{10,14}$/;
		 var companyNameRegex = /^[.@&]?[a-zA-Z0-9 ]+[ !.@&()]?[ a-zA-Z0-9!()]{2,150}$/;
		 var data_value = unescape($(This).serialize());
		 var sname = $('#sname').val();
		 var sphone = $('#sphone').val();
		 var semail = $('#semail').val();
		 var scompanyname = $('#scompanyname').val();
		 $("#sname").removeClass("error");
		 $("#sphone").removeClass("error");
		 $("#semail").removeClass("error");
		 $("#scompanyname").removeClass("error");
		 if(sname.trim()==''){
		   $("#sname").addClass("error");
		   $("#sname").parent().addClass("error");
		   alert('Please enter full name');
		 }else if(nameRegex.test(sname)==false){
		   $("#sname").addClass("error");
		   $("#sname").parent().addClass("error");
		   alert('Please enter valid full name');
		 }else if(sphone.trim()==''){
		   $("#sphone").addClass("error");
		   $("#sphone").parent().addClass("error");
		   alert('Please enter business phone number');
		 }else if(phoneNumberRegex.test(sphone)==false){
		   $("#sphone").addClass("error");
		   $("#sphone").parent().addClass("error");
		   alert('Please enter valid business phone number');
		 }else if(semail.trim()==''){
		   $("#semail").addClass("error");
		   $("#semail").parent().addClass("error");
		   alert('Please enter business email');
		 }else if(emailRegex.test(semail)==false){
		   $("#semail").addClass("error");
		   $("#semail").parent().addClass("error");
		   alert('Please enter valid business email');
		 }else if(scompanyname.trim()==''){
		   $("#scompanyname").addClass("error");
		   $("#scompanyname").parent().addClass("error");
		   alert('Please enter company name');
		 }else if(!isNaN(scompanyname)){
		   $("#scompanyname").addClass("error");
		   $("#scompanyname").parent().addClass("error");
		   alert('Please enter valid company name');
		 } else if(companyNameRegex.test(scompanyname)==false){
		   $("#scompanyname").addClass("error");
		   $("#scompanyname").parent().addClass("error");
		   alert('Please enter valid company name');
		 }else{
		 
			$.ajax({
				type: "POST",
				url:'php/send.php',
				data: data_value,
				 beforeSend: function() {
					ajaxLoaderStartMailRequest('Request Sending Please Wait..');
				},
				//error: function (xhr, status, error) {
				// confirm('The page save failed.');
				//},
				success: function (response) {
				    ajaxLoaderStopMailRequest();
					$('#ajax_singup_msg').html(response);
					$('#ajax_singup_msg').slideDown('slow');
					if (response!=''){
						$(This).slideUp('slow');
					}
				}
			});
		 }
	});
	
	
	//reset forms
	//contact form
	$(document).on('click','#contactFormReset', function(){
    	document.getElementById("contact-form").reset();
		$("p").removeClass("error");
		$("input").removeClass("error");
	});
	//signup form
	$(document).on('click','#singupFormReset', function(){
	  document.getElementById("singup-form").reset();
	  	$("p").removeClass("error");
		$("input").removeClass("error");
	});
	
	//contact for on blur validations
	$(document).on('blur','#txtname', function(){
		var nameRegex = /^[A-Za-z\s]{1,}[\.]{0,6}[A-Za-z\s]{3,100}$/;
		var txtname = $('#txtname').val();
		if(nameRegex.test(txtname)==false){
			   $("#txtname").addClass("error");
			   $("#txtname").parent().addClass("error");
		}else{
			$("#txtname").removeClass("error");
			$("#txtname").parent().removeClass("error");

		}
	});
	
	$(document).on('blur','#txtphone', function(){
	    var phoneNumberRegex = /^[0-9]{10,14}$/;
		var txtphone = $('#txtphone').val();
		if(phoneNumberRegex.test(txtphone)==false){
			   $("#txtphone").addClass("error");
			   $("#txtphone").parent().addClass("error");
		}else{
			$("#txtphone").removeClass("error");
			$("#txtphone").parent().removeClass("error");
		}
	});
	
	$(document).on('blur','#txtemail', function(){
	  	var emailRegex =  /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-z]{2,3}$/;
		var txtemail = $('#txtemail').val();
		if(emailRegex.test(txtemail)==false){
			   $("#txtemail").addClass("error");
			   $("#txtemail").parent().addClass("error");
		}else{
			$("#txtemail").removeClass("error");
			$("#txtemail").parent().removeClass("error");
        }
	});
	
	$(document).on('blur','#txtmessage', function(){
	 var txtmessage = $('#txtmessage').val();
	  	if(txtmessage.trim().length<5 || txtmessage.trim().length>500){
			   $("#txtmessage").addClass("error");
			   $("#txtmessage").parent().addClass("error");
		}else{
			$("#txtmessage").removeClass("error");
			$("#txtmessage").parent().removeClass("error");
        }
	});
	
	//singup for on blur validations
	$(document).on('blur','#sname', function(){
		var nameRegex = /^[A-Za-z\s]{1,}[\.]{0,6}[A-Za-z\s]{3,100}$/;
		var sname = $('#sname').val();
		if(nameRegex.test(sname)==false){
			   $("#sname").addClass("error");
			   $("#sname").parent().addClass("error");
		}else{
			$("#sname").removeClass("error");
			$("#sname").parent().removeClass("error");

		}
	});
	
	$(document).on('blur','#sphone', function(){
	    var phoneNumberRegex = /^[0-9]{10,14}$/;
		var sphone = $('#sphone').val();
		if(phoneNumberRegex.test(sphone)==false){
			   $("#sphone").addClass("error");
			   $("#sphone").parent().addClass("error");
		}else{
			$("#sphone").removeClass("error");
			$("#sphone").parent().removeClass("error");
		}
	});
	
	$(document).on('blur','#semail', function(){
	  	var emailRegex =  /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-z]{2,3}$/;
		var semail = $('#semail').val();
		if(emailRegex.test(semail)==false){
			   $("#semail").addClass("error");
			   $("#semail").parent().addClass("error");
		}else{
			$("#semail").removeClass("error");
			$("#semail").parent().removeClass("error");
        }
	});
	
	$(document).on('blur','#scompanyname', function(){
	 var scompanyname = $('#scompanyname').val();
	  if(scompanyname.trim()==''){
		   $("#scompanyname").addClass("error");
		   $("#scompanyname").parent().addClass("error");
	  }else if(!isNaN(scompanyname)){
		   $("#scompanyname").addClass("error");
		   $("#scompanyname").parent().addClass("error");
	  } else{
		$("#scompanyname").removeClass("error");
		$("#scompanyname").parent().removeClass("error");
	  }
	 
	});
	
	/* hiding form submit
	$('form[name="frmcontact"]').submit(function () {
		
		var This = $(this);
		
		if($(This).valid()) {
			var action = $(This).attr('action');

			var data_value = unescape($(This).serialize());
			$.ajax({
				 type: "POST",
				 url:action,
				 data: data_value,
				 error: function (xhr, status, error) {
					 confirm('The page save failed.');
				   },
				  success: function (response) {
					$('#ajax_contact_msg').html(response);
					$('#ajax_contact_msg').slideDown('slow');
					if (response.match('success') != null) $(This).slideUp('slow');
				 }
			});
		}
		return false;
    });
	$('form[name="frmcontact"]').validate({
		rules: { 
			txtname: { required: true },
			txtemail: { required: true, email: true }
		},
		errorPlacement: function(error, element) { }
	});
	*/
	//Contact Map
	var $map = $('#contact_map');
	$map.gMap({
		address: 'Uxbridge College, Hayes, Middlesex, United Kingdom UB3 3BB, United Kingdom',		
		markers: [
			{ 'address' : 'Studio 2, Hayes Business Studios, Middlesex, United Kingdom - UB3 3BB.' }
		],
		zoom: "fit",
		scrollwheel: false
	});

	//TOGGLE PANEL...
	
	$("#toggle-panel").click(function(e){
		if($('#toggle i').hasClass('fa-plus')) {
			$('#toggle i').removeClass('fa-plus');
			$('#toggle i').addClass('fa-minus');
		} else {
			$('#toggle i').removeClass('fa-minus');
			$('#toggle i').addClass('fa-plus');
		}

		setTimeout(function() {
			var $panel_map = $('#panel_map');
			$panel_map.gMap({
				address: 'Iamdesigning, 1/52,3/53, Lal Bahadhur Colony,Shringar Nagar Road, Near Gopal Naidu School, Peelamedu, Coimbatore, TN 641004',		
				markers: [
					{ 'address' : 'Iamdesigning, 1/52,3/53, Lal Bahadhur Colony,Shringar Nagar Road, Near Gopal Naidu School, Peelamedu, Coimbatore, TN 641004' }
				],
				zoom: "fit",
				scrollwheel: false
			});
		}, 400);

		$("#panel").slideToggle("slow");
		e.preventDefault();
		return false;
	});
	
	$('section#panel').attr('style', 'display:none');
	
	//Animate Number...
	$('.dt-sc-num-count').each(function(){
	  $(this).one('inview', function (event, visible) {

		  if(visible === true) {
			  var val = $(this).attr('data-value');
			  $(this).animateNumber({ number: val }, 2000);
		  }
	  });
	});
	
	//Image Hover Animation
	$('.dt-hover-pager li').each(function(){

		$(this).click(function () {

			$('.dt-hover-pager').find('li').removeClass('active');

			var $this = $(this);
			$('#dt-ipad-main-img').fadeOut('fast', function () {
				
				var src = $this.attr('data-image');
				$('#dt-ipad-main-img').attr({ 'src': src });
				$('#dt-ipad-main-img').fadeIn(300);
				
			});
			
			$(this).addClass('active');

		});	
	
	});
});

//CUSTOM FIX...
function fixMagicline() {
		
    var $magicLine = jQuery("#magic-line-two");
    
    var leftPos, newWidth;
	
	leftPos = jQuery(".current_page_item a").position().left;
    newWidth = jQuery(".current_page_item").width();
	
	$magicLine.stop().animate({
		left: leftPos,
		width: newWidth
	});
}

// ANIMATE CSS + JQUERY INVIEW CONFIGURATION
(function ($) {
    "use strict";
    $(".animate").each(function () {
        $(this).one('inview', function (event, visible) {
            var $delay = "";
            var $this = $(this),
                $animation = ($this.data("animation") !== undefined) ? $this.data("animation") : "slideUp";
            $delay = ($this.data("delay") !== undefined) ? $this.data("delay") : 300;

            if (visible === true) {
                setTimeout(function () {
                    $this.addClass($animation);
                }, $delay);
            } else {
                setTimeout(function () {
                    $this.removeClass($animation);
                }, $delay);
            }
        });
    });
})(jQuery);

//MeanMenu Custom Scroll...
function funtoScroll(x, e) {
	"use strict";
	var str = new String(e.target);
	var pos = str.indexOf('#');
	var t = str.substr(pos);
	
	var eleclass = jQuery(e.target).prop("class");
	
	if(eleclass == "external") {
		window.location.href = e.target;	
	} else {
		jQuery.scrollTo(t, 750, { offset: { top: -44 }});
	}
	
	jQuery(x).parent('.mean-bar').next('.mean-push').remove();		
	jQuery(x).parent('.mean-bar').remove();

	jQuery('nav#main-menu').meanmenu({
		meanMenuContainer :  jQuery('header .menu-main-menu-container'),
		meanRevealPosition:  'left',
		meanScreenWidth   :  767,
        meanMenuClose : "<span/><span/><span/>",
		onePage: true
	});
	
	e.preventDefault();
}(jQuery);

//CAROUSEL...
function my_smartresize_function(){
	
	//ISOTOPE CATEGORY...
	var $container = jQuery('.dt-sc-portfolio-container');
	$ctr = jQuery('.container').width();

	jQuery('.dt-sc-sorting-container a').click(function(){ 
		jQuery('.dt-sc-sorting-container').find('a').removeClass('active-sort');
		jQuery(this).addClass('active-sort');
		
		var selector = jQuery(this).attr('data-filter');
		
		if($ctr < 710)	{
			var opt = {
				filter: selector,
				itemSelector: jQuery('.dt-sc-portfolio-container .portfolio'),
				masonry: {
					columnWidth: 0
				}			
			};
		}
		else {
			var opt = {
				filter: selector,
				layoutMode: 'perfectMasonry',
				perfectMasonry: {
					layout: 'vertical',
					liquid: true
				}
			};
		}
		$container.isotope(opt);
		return false;
	});
	
	if($ctr < 710)	{
		var opt = {
			itemSelector: jQuery('.dt-sc-portfolio-container .portfolio'),
			masonry: {
				columnWidth: 0
			}
		};
	}
	else {
		var opt = {
			layoutMode: 'perfectMasonry',
			perfectMasonry: {
				layout: 'vertical',
				liquid: true
			}
		};
	}	
	$container.isotope(opt);
	
	//PORTFOLIO CAROUSEL...
	if(jQuery(".portfolio-carousel").length) {
		var pmax = 3;
		if(jQuery('.container').width() < 710) { pmax = 1; }
		else if(jQuery('.container').width() > 710 && jQuery('.container').width() < 768) { pmax = 1; }
		
		jQuery(".portfolio-carousel").carouFredSel({
		  responsive: true,
		  auto: false,
		  width: '100%',
		  prev: jQuery('.carousel-arrows').find('.prev-arrow'),
		  next: jQuery('.carousel-arrows').find('.next-arrow'),
		  height: 'auto',
		  scroll: 1,
		  items: { width: jQuery(this).find('.column').width(), visible: { min: 1, max: pmax } }
		});
	}
}