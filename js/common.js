$(document).ready(function(){
	$('.top-left p').click(function(event){
		$('.top-left p').toggleClass('t-left');
		$('.russian-language').fadeToggle().toggleClass('rus');
		$('.top-left i').toggleClass('icon-one')
	});
	$('.profile-click').click(function(event){
		$('.profile-click').toggleClass('t-right');
		$('.profile').fadeToggle().toggleClass('prof')
	});
	$('.header-poisk').click(function(event){
		$('.window-modal').toggleClass('window-modal-active');
		$('body').toggleClass('lock');
	});
	$('.close i').click(function(event){
		$('.window-modal').removeClass('window-modal-active');
		$('body').toggleClass('lock');
	});
	$('.works-video').click(function(event){
		$('.video').fadeToggle().css('display','block');
		$('body').toggleClass('lock');
	});
	$('.close-video i').click(function(event){
		$('.video').fadeToggle().css('display','none');
		$('body').toggleClass('lock');
	});
	$('#info-body1').click(function(event){
		$('#info-none1').fadeToggle().toggleClass('info-active');
		$('#info-body1').toggleClass('info-body-active');
		$('#info-down1').toggleClass('info-down-active');
	});
	$('#info-body2').click(function(event){
		$('#info-none2').fadeToggle().toggleClass('info-active');
		$('#info-body2').toggleClass('info-body-active');
		$('#info-down2').toggleClass('info-down-active');
	});
	$('#info-body3').click(function(event){
		$('#info-none3').fadeToggle().toggleClass('info-active');
		$('#info-body3').toggleClass('info-body-active');
		$('#info-down3').toggleClass('info-down-active');
	});
	$('#info-body4').click(function(event){
		$('#info-none4').fadeToggle().toggleClass('info-active');
		$('#info-body4').toggleClass('info-body-active');
		$('#info-down4').toggleClass('info-down-active');
	});
	$('#info-body5').click(function(event){
		$('#info-none5').fadeToggle().toggleClass('info-active');
		$('#info-body5').toggleClass('info-body-active');
		$('#info-down5').toggleClass('info-down-active');
	});
	$('#info-body6').click(function(event){
		$('#info-none6').fadeToggle().toggleClass('info-active');
		$('#info-body6').toggleClass('info-body-active');
		$('#info-down6').toggleClass('info-down-active');
	});
	$('.log-button').click(function(event){
		$('#info-wrapper1').css('display','none');
		$('#info-wrapper2').css('display','block');
		$('.log-button').css('background','#ba0000');
		$('.log-button p').css('color','white');
		$('.exspress-button').css('background','#ffcc00');
		$('.exspress-button p').css('color','#ba0000');
	});
	$('.exspress-button').click(function(event){
		$('#info-wrapper2').css('display','none');
		$('#info-wrapper1').css('display','block');
		$('.exspress-button').css('background','transparent');
		$('.exspress-button p').css('color','white');
		$('.log-button').css('background','#ffcc00')
		$('.log-button p').css('color','#ba0000');
	});
	$('.menu__link').click(function(event){
		$('body').removeClass('lock');
		$('.burger-menu').removeClass('burger-menu-active');
		$('nav').removeClass('nav-active');
		$('.menu-top').removeClass('menu-top-click');
		$('.menu-middle').removeClass('menu-middle-click');
		$('.menu-bottom').removeClass('menu-bottom-click');
		$('.menu').removeClass('menu-active');
	});
	$('.menu-bg').click(function(event){
		$('.burger-menu').toggleClass('burger-menu-active');
		$('nav').toggleClass('nav-active');
		$('.menu').toggleClass('menu-active');
	});
		$('.poisk').click(function(event){
		$('.poisk-dropdown').toggleClass('poisk-dropdown-active');
		$('.poisk').toggleClass('poisk-active');
	});
	$('.russia').click(function(event){
		$('.location').text('Russia');
		$('.poisk-dropdown').removeClass('poisk-dropdown-active');
		$('.poisk').removeClass('poisk-active');
	});
	$('.usa').click(function(event){
		$('.location').text('USA');
		$('.poisk-dropdown').removeClass('poisk-dropdown-active');
		$('.poisk').removeClass('poisk-active');
	});
	$('.britan').click(function(event){
		$('.location').text('Britan');
		$('.poisk-dropdown').removeClass('poisk-dropdown-active');
		$('.poisk').removeClass('poisk-active');
	});
	$('.finland').click(function(event){
		$('.location').text('Finland');
		$('.poisk-dropdown').removeClass('poisk-dropdown-active');
		$('.poisk').removeClass('poisk-active');
	});
});

var Menu = {
  
  el: {
    ham: $('.menu-bg'),
    menuTop: $('.menu-top'),
    menuMiddle: $('.menu-middle'),
    menuBottom: $('.menu-bottom')
  },
  
  init: function() {
    Menu.bindUIactions();
  },
  
  bindUIactions: function() {
    Menu.el.ham
        .on(
          'click',
        function(event) {
        Menu.activateMenu(event);
        event.preventDefault();
      }
    );
  },
  
  activateMenu: function() {
    Menu.el.menuTop.toggleClass('menu-top-click');
    Menu.el.menuMiddle.toggleClass('menu-middle-click');
    Menu.el.menuBottom.toggleClass('menu-bottom-click'); 
  }
};

Menu.init();

document.body.onload = function() {

    setTimeout(function() {
    var preloader = document.getElementById('preloader');
    if(!preloader.classList.contains('done') ) {
    preloader.classList.add('done');
    body.classList.add('lock');
    }
    }, 1000);
 }
