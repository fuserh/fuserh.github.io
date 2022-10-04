$(function () {
	$("#use").click(function(){
		bootstro.start();
		$('.navbar-over').show();
	});
	
	$('a').bind("focus", function(){
		$(this).blur();
	})
	
	if (/webkit/.test(navigator.userAgent.toLowerCase()) == true) {
		$('#video embed').removeClass('img-rounded');
	}
	
	$('.video,.video2').width('100%').height('100%');

	$('.video').height($('.video').width() / 1.333, 'px');
	$('.video2').height($('.video2').width() / 1.555, 'px');

	$(window).resize(function () {
		$('.video').height($('.video').width() / 1.333, 'px');
		$('.video2').height($('.video2').width() / 1.555, 'px');
		$('#myTab').width($('.list').width());
	});

	$('.list li a').each(function (e) {
		if ($('.break_title').text() != '' && $(this).text().indexOf($('.break_title').text()) >= 0) {
			$(this).parent().addClass('active');
			$(this).attr('href' , 'javascript:void(0)');
		}
	});
	
	$('#myTab').width($('.list').width());
	
	var len = location.href.indexOf('comment-page-');
	var ajaxCount = 0;
	if (len > -1) {
		var index = len + 13;
		var page = location.href.substr(index,1);
		var ajaxCount = page - 1;
		if (page < $('#comment_pages_count').val() && page > -1) {
			$('#firstbutton').show();
		}
	} else {
		$('#firstbutton').hide();
		var ajaxCount = $('#comment_pages_count').val() - 1;
	}
	$('#commentbutton').on('click', function () {
		$('#commentbutton').html('<img src="http://www.ycku.com/wp-content/uploads/2014/01/loading.gif" alt="loading" />');
		var url = $('#comment_pages_href').val() + 'comment-page-' + ajaxCount + '/';
		$.ajax({
			type : 'POST',
			url : url,
			success : function (response, status, xhr) {
				$('.navigation').before($(response).find('ol').fadeIn(300));
				ajaxCount--;
				$('#commentbutton').html('显示更多评论');
				if (ajaxCount < 1) {
					$('#commentbutton').addClass('disabled');
					$('#commentbutton').html('没有更多评论了');
					$('#commentbutton').off('click');
				}
			}
		});
	});
	
	if (ajaxCount < 1) {
		$('#commentbutton').addClass('disabled');
		$('#commentbutton').html('没有更多评论了');
		$('#commentbutton').off('click');
	}
	
	$("img.lazy").lazyload();
	
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 300, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 200, // Animation in speed (ms)
		animationOutSpeed: 200, // Animation out speed (ms)
		scrollText: '', // Text for element
		activeOverlay: false  // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	});
});