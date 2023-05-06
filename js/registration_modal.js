// открываем окно регистрации

$('.base-btn, .border-btn').click(function() {
    if (!$('.registration').length) {
        const registration = $('<div class="registration"></div>').html(registrationInner)
        $('body').append(registration, $('<div class="dark-fon"></div>'))
        $('body').css({'overflow':'hidden'});
    }
})

// закрываем окно регистрации

function closeRegistration() {
    $('.registration, .dark-fon').remove()
    $('body').css({'overflow':'auto'});
}


// открываем окно авторизации

function autorization() {
    $('.registration').html(autorizationInner)
}