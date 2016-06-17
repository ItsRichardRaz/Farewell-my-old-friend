$(document).ready(function () {
    setTimeout(function () {
        $(document).ready(function () {
            $('p.tv').stop(true).fadeIn({
                duration: 2000
                , queue: false
            }).css('display', 'none').slideDown(1000, 'swing');
        });
    }, 3000);
});