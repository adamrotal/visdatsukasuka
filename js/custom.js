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

$.fn.WBslider = function() {
    return this.each(function() {
        var $_this = $(this),
            $_date = $('input', $_this),
            $_title = $('.setyear', $_this),
            thumbwidth = 50, // set this to the pixel width of the thumb
            yrnow = new Date().getFullYear();

        // set range max to current year
        // $_date.attr('max', yrnow);
        // $('.endyear', $_this).text( yrnow );
        // $_date.val(yrnow - 10); // -10 years, just because...
        $_date.val(0);

        $_date.on('input change keyup', function() {
            var $_this = $(this),
                val = parseInt($_date.val(), 10);

            // console.log(val); // = 0

            // if (val < 1988) {
            //     val = '< 1987';
            // }
            // if (val === '') { // Stop IE8 displaying NaN
            //     val = 0;
            // }

            $_title.text( 'minggu ke-' + val + ', 2017' );

            var pos = (val - $_date.attr('min'))/($_date.attr('max') - $_date.attr('min'));

            // position the title with the thumb
            var thumbCorrect = thumbwidth * (pos - 0.5) * -1,
                titlepos = Math.round( ( pos * $_date.width() ) - thumbwidth/4 + thumbCorrect );

            $_title.css({'left': titlepos});

            // show "progress" on the track
            pos = Math.round( pos * 99 ); // to hide stuff behide the thumb
            var grad = 'linear-gradient(90deg, #A7A7A7 ' + pos + '%,#109618 ' + (pos+1) + '%)';
            $_date.css({'background': grad});

        }).on('focus', function() {
            if ( isNaN( $(this).val() ) ) {
                $(this).val(0);
            }
        }).trigger('change');
        
        $(window).on('resize', function() {
            $_date.trigger('change');
        });
    });
};

$(function() {

    $('.slider').WBslider();

});