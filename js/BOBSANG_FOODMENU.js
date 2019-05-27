$(document).ready(function () {
    let boxtext;
    $('svg').on('mouseover', function () {
        let boxname = $(this).parent().parent();
        if ((boxname.attr('class')).indexOf('food') >= 0) {
            boxtext = $(boxname).find('.foodboxtext');
            boxtext.slideDown();
        } else {
            boxtext = $(boxname).find('.drinkboxtext');
            boxtext.slideDown();
        }
    });

    $('svg').on('mouseout', function () {
        boxtext.slideUp();
    });

});
