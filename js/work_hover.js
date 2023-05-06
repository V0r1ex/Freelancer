const works = $('.works__img')

// наведение на картинку

works.mouseover(function() {
    if (window.screen.width > 480) {
        $(this).css({animation: 'hoverWork .3s ease-in forwards', 'z-index': 1})
        $('.works__img').not(this).css('filter', 'blur(3px)')
    }
})

// покидание картинки

works.mouseout(function() {
    $(this).css({animation: 'unHoverWork .3s ease-in forwards', 'z-index': 0})
    $('.works__img').css('filter', 'none')
})