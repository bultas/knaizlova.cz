$(document).ready(function(){

	$('#basicuse').jflickrfeed({
		feedapi: 'photoset.gne',
		limit: 7,
		qstrings: {
		set: '72157628835685427',
		nsid: '74181411@N06' },
		itemTemplate: '<div class="image"><a href="{{image_b}}"><img src="{{image}}" alt="{{title}}" /></a></div>'
	});

	$('#cbox').jflickrfeed({

		feedapi: 'photoset.gne',
		qstrings: {
		set: '72157636420469015',
		nsid: '74181411@N06' 
		},
		limit: 6,
		itemTemplate: '<div class="col-1-3 image">'+
						'<a rel="colorbox" href="{{image_b}}" title="{{title}}">' +
							'<img src="{{image}}" alt="{{title}}" />' +
						'</a>' +
					  '</div>'
	}, function(data) {
		$('#cbox a').colorbox();
	});
	
	
	
	

});