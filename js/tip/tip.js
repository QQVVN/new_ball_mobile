$(function () {
    console.log('tip.js');
    $('.okb').on('click', function () {
        let parent = $(this).parent();
        $(parent.next()).toggleClass('none');
        if (parent.attr('class') === '4') {
            $('section').addClass('none');
            $('section.1').removeClass('none');
        } else {
            return
        }
    });
});