window.onload = function () {

    $('.carousel').owlCarousel({
        loop: true,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        margin: 0,
        nav: true,
        items: 2,
        itemsCustom: false,
        responsive: {
            0 : {
                items:1
            }
        }
    });


};