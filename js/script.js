(function () {

	var ph = {

		init: function () {
			this.cacheDom();
			this.bindEvents();
			this.totopButton();
			this.stickyHeader();
			this.enablePopupLogin();
			this.paralax();
		},
		cacheDom: function(){
			this.toTop = $('.totop');
			this.topTrigger = $('.ph__mainMenu-trigger');
			this.menuBurger = $('.ph__menuBurger');
			this.cgmenu = $('.ph__mainMenu');
			this.rezMenu = $('.ph__resMenu');
			this.pageWrapper = $('#page_wrapper');
			this.backIcon = $('.ph__resMenu-backIcon');
			this.hasAnimation = $('.hasAnimation');
			this._body = $('body');
			this.menuLink = $('.ph__menu-link');
			this.iframeLogin = $ ('.showlogin');
			this.showsearch = $ ('.search-trigger');
			this.paral = $ ('.parafixy');
		},
		bindEvents: function(){
			var self = this;
			self.topTrigger.on('click', self.responsiveTopMenu);
			self.menuBurger.on('click', self.triggerMenu);
			self.rezMenu.find( 'a:not(.ph__resMenu-back)').on('click', self.CloseMenu);
			self.backIcon.on('click', self.CloseMenu);
			$(window).on('scroll', self.addAnimations);
			self.showsearch.on('click', self.showSearch);

		},
		addAnimations: function() {
			ph.hasAnimation.each(ph.startAnimations);
		},
		startAnimations: function(index, el) {
			var itemIsReached = ph.isScrolledIntoView(el);
			if (itemIsReached) {

				var animationType = $(this).attr("data-animationType");
				var animationDuration = $(this).attr("data-animationDuration");
				var animationDelay = $(this).attr("data-animationDelay");

				if (!$(this).hasClass('is-animating')) {

					$(this).css({"animation-duration": animationDuration,
								"animation-name":animationType,
								"animation-delay":animationDelay});
				}
				$(this).addClass('is-animating');
			}
		},
		isScrolledIntoView: function(elem) {
			var docViewTop = $(window).scrollTop();
			var docViewBottom = docViewTop + $(window).height();
			var elemTop = $(elem).offset().top;
			var elemBottom = elemTop + $(elem).height();
			var offset = 600;
			return ((elemBottom <= docViewBottom + offset) && (elemTop >= docViewTop - offset));
		},
		paralax: function(){
		if(!Modernizr.touchevents){
				myParaxify = paraxify('.paraxify');
			}
		},
	
		responsiveTopMenu: function() {
			if ($(this).hasClass('is-toggled')) {
				$(this).closest('.ph__topMenu-wrapper').removeClass('is-opened');
				$(this).removeClass('is-toggled');
			} else {
				$(this).closest('.ph__topMenu-wrapper').addClass('is-opened');
				$(this).addClass('is-toggled');
			}
		},

		triggerMenu: function(e) {
			e.preventDefault();
				if($(this).hasClass('is-active')){
					ph.CloseMenu();
				}
				else {
					ph.OpenMenu();
			}
		},
		OpenMenu: function() {
			ph.rezMenu.addClass('ph__menu--visible');
			ph.menuBurger.addClass('is-active');
			ph.setMenuHeight();
		},
		CloseMenu: function() {
			$(this).closest('ul').removeClass('ph__menu--visible');
			ph.menuBurger.removeClass('is-active');
			ph.removeMenuHeight();
		},
		removeMenuHeight: function() {
			ph.pageWrapper.css({'height':'auto'});
		},
		setMenuHeight: function() {
			var _menu = $('.ph__menu--visible').last(),
				window_height  = $(window).height(),
				height = _menu.css({window_height:'auto'});
			ph.pageWrapper.css({'height':height});
		},
		enablePopupLogin: function(){
			var self = this;
			self.iframeLogin.magnificPopup({
				type:'iframe',
				iframe:{ markup: '<div class="mfp-content--login">'+
	            '<div class="mfp-close"></div>'+
	            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
	          '</div>'}

			});
		},
		showSearch: function(e) {
			e.preventDefault();
			if ($('.search-btn').hasClass('active')) {
				$('.search-btn').removeClass('active');
				$('.search-container').removeClass('opened');
				$('.search-close').removeClass('active');
				$('.search-active').removeClass('remove');
			} else {
				$('.search-btn').addClass('active');
				$('.search-container').addClass('opened');
				$('.search-close').addClass('active');
				$('.search-active').addClass('remove');
			}
		},
		totopButton: function() {
			var self = this;

			/* Show totop button*/
			$(window).scroll(function(){
				var toTopOffset = self.toTop.offset().top;
				var toTopHidden = 1000;

				if (toTopOffset > toTopHidden) {
					self.toTop.addClass('totop-vissible');
				} else {
					self.toTop.removeClass('totop-vissible');
				}
			});

			/* totop button animation */
			if(self.toTop && self.toTop.length > 0){
				self.toTop.on('click',function (e){
					e.preventDefault();
					$( 'html, body').animate( {scrollTop: 0 }, 'slow' );
				});
			}
		},
		stickyHeader: function() {

		var $el = $(".site-header"),
			headerHeight = $el.find('.siteheader-container').outerHeight();

		$(window).on('scroll', function(event){
			if( $(window).scrollTop() > headerHeight ){
				$el.removeClass('header--not-sticked');
				$el.addClass('header--is-sticked');


			}
			else{
				$el.removeClass('header--is-sticked');
				$el.addClass('header--not-sticked');
			}
		});
	}
	};
	ph.init();
})();
