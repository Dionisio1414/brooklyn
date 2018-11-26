$(function() {
	var $gridItem = $('.total-risk .grid__info');
	$gridItem.hover(function() {
			var self = $(this);
			$(this).addClass('hover-shadow').css('padding', '0').find('.grid__current-count').hide();
			$(this).find('span.descr').animate({
				marginLeft: 99 + "px",
				color: '#FFC070'
			}, 300);
			$(this).find('a').animate({
				marginTop: 5 + "px",
				marginRight: 20 + "px"
			}, 100, function() {
				self.find('img').show().animate({
					opacity: 1,
					left: 32 + "px"
				}, 100);
			});
	}, function() {
			$(this).removeClass('hover-shadow').css('padding-top', '30px').find('.grid__current-count').show(300);
			$(this).find('span.descr').animate({
				marginLeft: 39 + "px",
				color: '#000'
			}, 300);
			$(this).find('img').hide().animate({
				opacity: 0,
				left: 0 + "px"
			}, 100);
			$(this).find('a').animate({
				marginTop: 0 + "px",
				marginRight: 0 + "px",
				marginLeft: 39 + "px"
			}, 100);
		});
	
	$('.scroll-pane').jScrollPane();
});
	