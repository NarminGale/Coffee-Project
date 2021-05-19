// Ana səhifədə kiçik stəkanlardan hansına basılsa, o stəkan slide-da görünür və arxa fonda ona uyğun dəyişir
$('.about-icon').on('click', function() {
    var color = $(this).css('background-color')
    $('.about-us').css(
        'background',
        `linear-gradient(0deg, rgb(255, 255, 255), ${color} 15%, rgb(255, 255, 255))`
    )
    var id = $(this).data('id')
    $('.carousel-item').removeClass('active')
    $(`#item-${id}`).addClass('active')
})

// Ana səhifədəki slayd dəyişəndə arxa fonunda ona uyğun dəyişməsi
$('.homepage-carousel').on('slid.bs.carousel', function() {
    var element_id = $('.carousel-item.active').attr('id');
    var id = element_id[element_id.length - 1];
    var color = $(`.icon-${id}`).data('color');

    $('.about-us').css(
        'background',
        `linear-gradient(0deg, rgb(255, 255, 255), ${color} 15%, rgb(255, 255, 255))`
    )

});

// products
$('.tab-heading').click(function() {
    let dataName = $(this).data('name')
    let tabContents = $('.tab-content')
    tabContents.each(function(index, value) {
        let dataValue = $(value).data('name')
        $(value).removeClass('active')
        if (dataValue === dataName) {
            $(value).addClass('active')
        }
    })
    let tabImages = $('.tab-image')
    tabImages.each(function(index, value) {
        let imageValue = $(value).data('name')
        $(value).removeClass('active')
        if (imageValue === dataName) {
            $(value).addClass('active')
        }
    })

})

// Səbətin PopUp kimi açılması

$('#cart-button').on('click', function() {
    $('#basket-pop-up').css('display', 'block');
});

$('.close').on('click', function() {
    $('#basket-pop-up').css('display', 'none');
})

$(window).on('click', function(event) {
    if (event.target == $('#basket-pop-up')) {
        $('#basket-pop-up').css('display', 'none');
    }
})

// CallBack PopUp

$('.call-back').on('click', function() {
    $('#callback-popup').css('display', 'block');
});


$('.close').on('click', function() {
    $('#callback-popup').css('display', 'none');
})

$(window).on('click', function(event) {
    if (event.target == $('#basket-pop-up')) {
        $('#callback-popup').css('display', 'none');
    }
})