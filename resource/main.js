// $(document).ready(function () {
//     $('.carousel').slick({
//         autoplay: true,
//         autoplaySpeed: 4000,
//         arrows: false,
//         fade: true,
//         pauseOnFocus: false,
//         pauseOnHover: false
//     });
// });

function createSlick(){  

	$(".slider").not('.slick-initialized').slick({
    autoplay: true,
    dots: true,
    responsive: [{ 
        breakpoint: 500,
        settings: {
            dots: false,
            arrows: false,
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 2
        } 
    }]
});	

}

createSlick();

//Now it will not throw error, even if called multiple times.
$(window).on( 'load', createSlick );