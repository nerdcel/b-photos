var p = {};

p.ImageSlider = function(_config)
{
	var _public = this;
	var _protected = Object;
	
	var config = {
		root : ".moduleImageSlider",
		images : ".slide li",
		navigationContainer : "nav",
		presentTime : 7500,
		fadeTime : 1050,
		positions : {
			outer : "100",
			inner : "0"
		},
		activeIndex : 1,
		activeClass : "active"
	}
	
	var main = function()
	{
		
		config = $.extend(config, _config, true);
		
		getElements();
		createNavigation();
		initActive(config.activeIndex);
		sliderTime();
		
	}
	
	var getElements = function()
	{
		_protected.root = $(config.root);
		_protected.images = _protected.root.find(config.images);
	}
	
	var initActive = function(index)
	{
		_protected.images.eq(index).prevAll().css(
		{
			left : (config.positions.outer * -1) + "%",
			opacity : 0.4
		});
		
		_protected.images.eq(index).nextAll().css(
		{
			left : config.positions.outer + "%",
			opacity : 0.4
		});
		
		_protected.images.eq(index).css(
		{
			left : config.positions.inner + "%",
			opacity : 1
		}).addClass(config.activeClass);
		
		_protected.naviContainer.find("li").eq(index).addClass(config.activeClass);
		
	}
	
	var createNavigation = function()
	{
		_protected.naviContainer = $("<ul></ul>").appendTo(_protected.root.find(config.navigationContainer)).addClass("clearfix");
		
		$.each(_protected.images, function()
		{
			$("<li></li>").appendTo(_protected.naviContainer);
		})
		
	}
	
	var sliderTime = function()
	{
		
		_protected.interval = setInterval(slideNext, config.presentTime);
		
	}
	
	var slideNext = function()
	{
		var indexNow = _protected.images.index(_protected.images.filter("." + config.activeClass));
		var lengthImages = _protected.images.length;
		
		if( indexNow < lengthImages - 1 )
		{
			_protected.images.eq(indexNow).animate(
			{
				left : (config.positions.outer * -1) + "%",
				opacity : 0.4
			}, config.fadeTime, function()
			{
				$(this).removeClass(config.activeClass);
				_protected.naviContainer.find("li").eq(indexNow).removeClass(config.activeClass);
			});
			
			_protected.images.eq(indexNow).next().animate(
			{
				left : config.positions.inner + "px",
				opacity: 1
			}, config.fadeTime, function()
			{
				$(this).addClass(config.activeClass);
				_protected.naviContainer.find("li").eq(indexNow).next().addClass(config.activeClass);
			});
			
		}else
		{
			_protected.images.eq(indexNow).prevAll().css(
			{
				left : config.positions.outer + "%",
				opacity : 0.4
			});
		
			_protected.images.eq(indexNow).animate(
			{
				left : (config.positions.outer * -1 ) + "%",
				opacity : 0.4
			}, config.fadeTime, function()
			{
				$(this).removeClass(config.activeClass);
				_protected.naviContainer.find("li").eq(indexNow).removeClass(config.activeClass);
				$(this).css({ left : config.positions.outer + "%"} );
			});
						
			_protected.images.eq(0).animate(
			{
				left : config.positions.inner + "px",
				opacity : 1
			}, config.fadeTime, function()
			{
				$(this).addClass(config.activeClass);
				_protected.naviContainer.find("li").eq(0).addClass(config.activeClass);
			});
			
		}
		
		
	}
	
	main();
	
	return _public;
	
}
