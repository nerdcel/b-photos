/* document ready */
$(function(){
	p.ImageSlider();
	
	$(window).scroll(function(e)
	{
		if( parseInt( $(document).scrollTop()) > ( parseInt($('#gallery').height()) / 2 ) )
		{
			$('.moduleNavigationMain').addClass('fixedPosition');
		}
		else
		{
			$('.moduleNavigationMain').removeClass('fixedPosition');
		}
		
		if( parseInt( $(document).scrollTop()) > 175 )
			$('.moduleImageSlider nav').hide();
		else
			$('.moduleImageSlider nav').show();
		
	});
	
})