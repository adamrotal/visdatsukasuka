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

var weeks = [["9/4/2017"], ["16/4/2017"], ["23/4/2017"], ["30/4/2017"], ["7/5/2017"], ["14/5/2017"], ["21/5/2017"], ["28/5/2017"], ["4/6/2017"], ["11/6/2017"], ["18/6/2017"], ["25/6/2017"], ["2/7/2017"], ["9/7/2017"], ["16/7/2017"], ["23/7/2017"], ["30/7/2017"], ["6/8/2017"], ["13/8/2017"], ["20/8/2017"], ["27/8/2017"], ["3/9/2017"], ["10/9/2017"], ["17/9/2017"], ["24/9/2017"], ["1/10/2017"], ["8/10/2017"], ["15/10/2017"], ["22/10/2017"], ["29/10/2017"], ["5/11/2017"], ["12/11/2017"], ["19/11/2017"], ["26/11/2017"], ["3/12/2017"], ["10/12/2017"], ["17/12/2017"], ["24/12/2017"], ["31/12/2017"], ["7/1/2018"], ["14/1/2018"], ["21/1/2018"], ["28/1/2018"], ["4/2/2018"], ["11/2/2018"], ["18/2/2018"], ["25/2/2018"], ["4/3/2018"], ["11/3/2018"], ["18/3/2018"], ["25/3/2018"], ["1/4/2018"]];

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

            $_title.text( 'Minggu ' + weeks[val] );

            var pos = (val - $_date.attr('min'))/($_date.attr('max') - $_date.attr('min'));

            // position the title with the thumb
            var thumbCorrect = thumbwidth * (pos - 0.5) * -1,
                titlepos = Math.round( ( pos * $_date.width() ) - thumbwidth/4 + thumbCorrect );

            $_title.css({'left': titlepos});

            // show "progress" on the track
            pos = Math.round( pos * 99 ); // to hide stuff behide the thumb
            var grad = 'linear-gradient(90deg, #D3D3D3 ' + pos + '%,#D3D3D3 ' + (pos+1) + '%)';
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