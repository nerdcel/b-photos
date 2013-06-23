/* document ready */
$(function(){
	p.ImageSlider();
	
	$(window).scroll(function(e)
	{
		/* top - 50 */
		if( parseInt( $(document).scrollTop(),10) > ( parseInt($('#gallery').height(),10) - 50 ) )
		{
			$('body').addClass('fixedPosition');
		}
		else
		{
			$('body').removeClass('fixedPosition');
		}
		
		/* bottom + 175 */		
		if( parseInt( $(document).scrollTop(), 10) > 175 )
			$('.moduleImageSlider nav').hide();
		else
			$('.moduleImageSlider nav').show();
			
		/* top - 175 */
		if( parseInt( $(document).scrollTop(), 10) > ( parseInt($('#gallery').height(),10) - 175 ) )
			$('#logo').addClass("yellow");
		else
			$('#logo').removeClass("yellow");
			
		
		/* 50% */
		if( parseInt( $(document).scrollTop(), 10) > (( parseInt($('#gallery').height(),10) / 2 ) - 25 ) )
			$('.moduleImageSlider').addClass("hideHeader");
		else
			$('.moduleImageSlider').removeClass("hideHeader");
		
		
	});
	
})