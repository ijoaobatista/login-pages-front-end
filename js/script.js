function loginToast(message, time = 3000) {
    let expire = null;
    let classToast = 'login-toast-alert';
    let element = '<div class="'+classToast+'"><span>'+message+'</span></div>'
    $('body').append(element);
    $('.'+classToast).fadeIn('fast', function() {
        expire = setTimeout(function() {
            $('.'+classToast).fadeOut('fast', function() {
                clearTimeout(expire);
            });
        }, time);
    });
}

