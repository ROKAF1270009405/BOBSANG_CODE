$(document).ready(function () {
    function slidedown() {
        let boxname = $(this).parent().parent();
        if ((boxname.attr('class')).indexOf('food') >= 0) {
            boxtext = $(boxname).find('.foodboxtext');
            boxtext.slideDown();
        } else {
            boxtext = $(boxname).find('.drinkboxtext');
            boxtext.slideDown();
        }
    }

    function slideup() {
        boxtext.slideUp();
    }

    $('svg').on('mouseover', slidedown);
    $('svg').on('mouseout', slideup);
    $('.boxundertextname').on('focusin', slidedown);
    $('.boxundertextname').on('focusout', slideup);

    $(window).resize(autoheight);

    function autoheight() {
        for (let i = 0; i < 2; i++) {
            let imgtag = $('.drinkboximg:eq(' + (i * 2 - 2) + ')').find('img');
            let boxh = $('.drinkboximg:eq(' + (i * 2 - 1) + ')').find('img');
            imgtag.height(boxh.height());
        }
    }
});
