window.onload = function () {

    $('.carousel').owlCarousel({
        loop: true,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        margin: 0,
        nav: true,
        dots:true,
        items: 2,
        itemsCustom: false,
        responsive: {
            0 : {
                items:1
            }
        }
    });


    if ( $( ".owl-item" ).hasClass( "active" ) ) {

        $( ".slider-content" ).css("right","0");


    }

};