var mobile_timer = false;
if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
    $('#viewport').attr('content', 'width=device-width,minimum-scale=1.0,maximum-scale=1.0,initial-scale=1.0');
    $(window).bind('gesturestart', function () {
        clearTimeout(mobile_timer);
        $('#viewport').attr('content', 'width=device-width,minimum-scale=1.0,maximum-scale=10.0');
    }).bind('touchend', function () {
        clearTimeout(mobile_timer);
        mobile_timer = setTimeout(function () {
            $('#viewport').attr('content', 'width=device-width,minimum-scale=1.0,maximum-scale=1.0,initial-scale=1.0');
        }, 1000);
    });
}