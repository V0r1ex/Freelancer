const scrollBtn = $('.scroll-btn')

//скрытие/показ кнопки прокрутки
window.addEventListener('scroll', showScrollButton)
scrollBtn.on('click', scrollWindowToTop)

//появление и исчезновение кнопки
function showScrollButton() {
    if (window.scrollY > 500) {
        scrollBtn.fadeIn(500)
        scrollBtn.css('pointer-events', 'all')
    } else if (scrollBtn.css('opacity') == '1') {
        scrollBtn.fadeOut(500)
        scrollBtn.css('pointer-events', 'none')
    }  
}

//плавный скролл до верха
function scrollWindowToTop() {
    let coffScroll = 10
    let start = setInterval(() => {
        if (window.scrollY > 0) {
            coffScroll += 0.7
            document.documentElement.scrollTop = window.scrollY - coffScroll
        }
        else clearInterval(start)
    }, 1)
}