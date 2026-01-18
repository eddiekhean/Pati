/* Product Image Carousel Initialization */
/* Depends on jQuery and Slick Slider */

$(document).ready(function () {
    // Initialize Main Carousel
    $(".main_product-image-carousel").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        asNavFor: ".main_product-image-carousel_thumbs",
        prevArrow: "<button type='button' class='slick-prev pull-left'><img class='left_arrow' src='https://cdn.shopify.com/s/files/1/0917/5649/5191/files/iconamoon_arrow-up-2-thin_1.png?v=1752126281'/></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><img class='right_arrow' src='https://cdn.shopify.com/s/files/1/0917/5649/5191/files/iconamoon_arrow-up-2-thin.png?v=1752126281'/></button>"
    });

    // Initialize Thumbnails Carousel
    $(".main_product-image-carousel_thumbs").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        focusOnSelect: true,
        asNavFor: ".main_product-image-carousel"
    });
});
