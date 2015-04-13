


$(document).ready(function(){

    // scroll

    $('#top').localScroll({
        duration:500,
        offset: {top:-70}
    });


    // services


    $('#list a').click(function(){

        $("#list a").removeClass("active");
        $(this).addClass("active");

         $('.content div').hide();
         var tmp_div = $(this).parent().index();
         $('.content div').eq(tmp_div).fadeIn(500);
      });
     $('.content div').hide();

     $("#page1").show();
     $("#link1 a").addClass("active");


    // Google maps
      function initialize() {
        var myLatlng = new google.maps.LatLng(49.713954,13.405821);
        var mapOptions = {
          zoom: 15,
          center: myLatlng,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: 'K Řece 716/14'
        });
      }

      google.maps.event.addDomListener(window, 'load', initialize);

      // Flickr
      $('#basicuse').jflickrfeed({
        feedapi: 'photoset.gne',
        limit: 7,
        qstrings: {
        set: '72157628835685427',
        nsid: '74181411@N06' },
        itemTemplate: '<div class="image"><a href="{{image_b}}"><img class="lightbox-image" src="{{image}}" alt="{{title}}" /></a></div>'
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
        $('#cbox a').colorbox({width:"60%"});
      });


});


