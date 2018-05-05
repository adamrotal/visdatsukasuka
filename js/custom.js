$(window).load(function () {

    // $('#hongkong-places-container').hide();
    $('#singapore-places-container').hide();
    $('#japan-places-container').hide();
    $('#malaysia-places-container').hide();
    $('#thailand-places-container').hide();

    // preloader
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(550).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(550).css({
        'overflow': 'visible'
    });

    $('select[name=selector]').change(function(){
        // alert($(this).val());
        if ($(this).val() == 'HK') {
            // alert("Hongkong");
            $('#hongkong-places-container').show();
            $('#singapore-places-container').hide();
            $('#japan-places-container').hide();
            $('#malaysia-places-container').hide();
            $('#thailand-places-container').hide();
        } else if ($(this).val() == 'SG') {
            // alert("Singapura");
            $('#hongkong-places-container').hide();
            $('#singapore-places-container').show();
            $('#japan-places-container').hide();
            $('#malaysia-places-container').hide();
            $('#thailand-places-container').hide();
        } else if ($(this).val() == 'JP') {
            // alert("Japan");
            $('#hongkong-places-container').hide();
            $('#singapore-places-container').hide();
            $('#japan-places-container').show();
            $('#malaysia-places-container').hide();
            $('#thailand-places-container').hide();
        } else if ($(this).val() == 'MY') {
            // alert("MY");
            $('#hongkong-places-container').hide();
            $('#singapore-places-container').hide();
            $('#japan-places-container').hide();
            $('#malaysia-places-container').show();
            $('#thailand-places-container').hide();
        } else if ($(this).val() == 'TH') {
            // alert("TH");
            $('#hongkong-places-container').hide();
            $('#singapore-places-container').hide();
            $('#japan-places-container').hide();
            $('#malaysia-places-container').hide();
            $('#thailand-places-container').show();
        }
    });
    
});

$(document).ready(function () {
    // $('#hongkong-places-container').hide();
    // $('#singapore-places-container').hide();
    // $('#japan-places-container').hide();
    // $('#malaysia-places-container').hide();
    // $('#thailand-places-container').hide();
});