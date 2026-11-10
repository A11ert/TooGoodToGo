// Home page: FAQ accordion with jQuery (Yernaz Amangeldin)

$('.faq-question').on('click', function () {
    const item = $(this).closest('.faq-item');
    const isOpen = item.hasClass('open');

    // close all other answers
    $('.faq-item').not(item).removeClass('open')
        .find('.faq-answer').stop(true, true).slideUp(250);
    $('.faq-question').not(this).attr('aria-expanded', 'false');

    // open or close this answer; stop() so fast clicks do not repeat the animation
    item.toggleClass('open');
    item.find('.faq-answer').stop(true, true).slideToggle(250);
    $(this).attr('aria-expanded', String(!isOpen));
});
